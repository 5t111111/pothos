/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { GraphQLFieldConfig, GraphQLFieldConfigArgumentMap } from 'graphql';
// @ts-ignore
import fromEntries from 'object.fromentries';
import {
  TypeParam,
  InputFields,
  ShapeFromTypeParam,
  FieldNullability,
  MaybeSubscriptionFieldOptions,
} from '../types';
import { typeFromParam, buildArg } from '../utils';
import BaseType from './base';
import BasePlugin from '../plugin';
import { BuildCache } from '..';

export default class Field<
  Args extends InputFields<Types>,
  Types extends GiraphQLSchemaTypes.TypeInfo,
  ParentType extends TypeParam<Types>,
  Type extends TypeParam<Types>,
  Nullable extends FieldNullability<Types, Type> = FieldNullability<Types, Type>,
  Extends extends string | null = null,
  Subscription extends boolean = false,
  Options extends MaybeSubscriptionFieldOptions<
    Types,
    ParentType,
    Type,
    Nullable,
    Args,
    Subscription
  > = MaybeSubscriptionFieldOptions<Types, ParentType, Type, Nullable, Args, Subscription>
> {
  shape?: ShapeFromTypeParam<Types, Type, true>;

  nullable: Nullable;

  args: Args = {} as Args;

  extendsField: Extends;

  type: Type;

  options: Options;

  parentTypename: string;

  constructor(
    options: Options & {
      extendsField?: Extends;
    },
    parentTypename: string,
  ) {
    this.options = options;
    this.nullable = options.nullable || (false as Nullable);
    this.args = options.args ? options.args! : ({} as Args);
    this.extendsField = options.extendsField || (null as Extends);
    this.type = options.type;
    this.parentTypename = parentTypename;
  }

  protected buildArgs(cache: BuildCache<Types>): GraphQLFieldConfigArgumentMap {
    return fromEntries(
      Object.keys(this.args).map(key => {
        const arg = this.args[key];

        return [
          key,
          {
            description:
              typeof arg !== 'object' || arg instanceof BaseType || Array.isArray(arg)
                ? undefined
                : arg.description,
            required:
              typeof arg !== 'object' || arg instanceof BaseType || Array.isArray(arg)
                ? false
                : arg.required || false,
            type: buildArg(arg, cache),
          },
        ];
      }),
    );
  }

  build(
    name: string,
    cache: BuildCache<Types>,
    plugins: BasePlugin<Types>[],
  ): GraphQLFieldConfig<unknown, unknown> {
    const baseConfig: GraphQLFieldConfig<unknown, unknown> = {
      args: this.buildArgs(cache),
      description: this.options.description,
      resolve: this.options.resolve as (...args: unknown[]) => unknown,
      subscribe: (this.options as { subscribe?: (...args: unknown[]) => unknown }).subscribe,
      type: typeFromParam(this.type, cache, this.nullable),
      extensions: this.options.extensions,
    };

    return plugins.reduce((config, plugin) => {
      return plugin.updateFieldConfig
        ? plugin.updateFieldConfig(name, this as any, config, cache)
        : config;
    }, baseConfig);
  }
}