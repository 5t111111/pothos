// @ts-nocheck
import { CompatibleTypes, FieldKind, FieldNullability, FieldOptionsFromKind, NormalizeArgs, SchemaTypes, TypeParam, } from '../types/index.ts';
import RootFieldBuilder from './root.ts';
export default class FieldBuilder<Types extends SchemaTypes, ParentShape, Kind extends FieldKind = FieldKind> extends RootFieldBuilder<Types, ParentShape, Kind> {
    /**
     * Create a Boolean field from a boolean property on the parent object
     * @param {string} name - the name of the property on the source object (does not need to match the field name).
     * @param {object} [options={}] - Options for this field
     */
    exposeBoolean<Name extends CompatibleTypes<Types, ParentShape, "Boolean", Nullable>, ResolveReturnShape, Nullable extends FieldNullability<"Boolean"> = Types["DefaultFieldNullability"]>(...args: NormalizeArgs<[
        name: Name,
        options?: Omit<FieldOptionsFromKind<Types, ParentShape, "Boolean", Nullable, {}, Kind, ParentShape, ResolveReturnShape>, "resolve" | "type">
    ]>) {
        const [name, options = {} as never] = args;
        return this.exposeField<"Boolean", Nullable, Name>(name, { ...options, type: "Boolean" });
    }
    /**
     * Create a Float field from a numeric property on the parent object
     * @param {string} name - the name of the property on the source object (does not need to match the field name).
     * @param {object} [options={}] - Options for this field
     */
    exposeFloat<Name extends CompatibleTypes<Types, ParentShape, "Float", Nullable>, ResolveReturnShape, Nullable extends FieldNullability<"Float"> = Types["DefaultFieldNullability"]>(...args: NormalizeArgs<[
        name: Name,
        options?: Omit<FieldOptionsFromKind<Types, ParentShape, "Float", Nullable, {}, Kind, ParentShape, ResolveReturnShape>, "resolve" | "type">
    ]>) {
        const [name, options = {} as never] = args;
        return this.exposeField<"Float", Nullable, Name>(name, { ...options, type: "Float" });
    }
    /**
     * Create an ID field from a property on the parent object
     * @param {string} name - the name of the property on the source object (does not need to match the field name).
     * @param {object} [options={}] - Options for this field
     */
    exposeID<Name extends CompatibleTypes<Types, ParentShape, "ID", Nullable>, ResolveReturnShape, Nullable extends FieldNullability<"ID"> = Types["DefaultFieldNullability"]>(...args: NormalizeArgs<[
        name: Name,
        options?: Omit<FieldOptionsFromKind<Types, ParentShape, "ID", Nullable, {}, Kind, ParentShape, ResolveReturnShape>, "resolve" | "type">
    ]>) {
        const [name, options = {} as never] = args;
        return this.exposeField<"ID", Nullable, Name>(name, { ...options, type: "ID" });
    }
    /**
     * Create an Int field from a numeric property on the parent object
     * @param {string} name - the name of the property on the source object (does not need to match the field name).
     * @param {object} [options={}] - Options for this field
     */
    exposeInt<Name extends CompatibleTypes<Types, ParentShape, "Int", Nullable>, ResolveReturnShape, Nullable extends FieldNullability<"Int"> = Types["DefaultFieldNullability"]>(...args: NormalizeArgs<[
        name: Name,
        options?: Omit<FieldOptionsFromKind<Types, ParentShape, "Int", Nullable, {}, Kind, ParentShape, ResolveReturnShape>, "args" | "resolve" | "type">
    ]>) {
        const [name, options = {} as never] = args;
        return this.exposeField<"Int", Nullable, Name>(name, { ...options, type: "Int" });
    }
    /**
     * Create a String field from a string property on the parent object
     * @param {string} name - the name of the property on the source object (does not need to match the field name).
     * @param {object} [options={}] - Options for this field
     */
    exposeString<Name extends CompatibleTypes<Types, ParentShape, "String", Nullable>, ResolveReturnShape, Nullable extends FieldNullability<"String"> = Types["DefaultFieldNullability"]>(...args: NormalizeArgs<[
        name: Name,
        options?: Omit<FieldOptionsFromKind<Types, ParentShape, "String", Nullable, {}, Kind, ParentShape, ResolveReturnShape>, "resolve" | "type">
    ]>) {
        const [name, options = {} as never] = args;
        return this.exposeField<"String", Nullable, Name>(name, { ...options, type: "String" });
    }
    /**
     * Create a Boolean list field from a boolean[] property on the parent object
     * @param {string} name - the name of the property on the source object (does not need to match the field name).
     * @param {object} [options={}] - Options for this field
     */
    exposeBooleanList<Name extends CompatibleTypes<Types, ParentShape, [
        "Boolean"
    ], Nullable>, ResolveReturnShape, Nullable extends FieldNullability<[
        "Boolean"
    ]> = Types["DefaultFieldNullability"]>(...args: NormalizeArgs<[
        name: Name,
        options?: Omit<FieldOptionsFromKind<Types, ParentShape, [
            "Boolean"
        ], Nullable, {}, Kind, ParentShape, ResolveReturnShape>, "resolve" | "type">
    ]>) {
        const [name, options = {} as never] = args;
        return this.exposeField<[
            "Boolean"
        ], Nullable, Name>(name, { ...options, type: ["Boolean"] });
    }
    /**
     * Create a Float list field from a number[] property on the parent object
     * @param {string} name - the name of the property on the source object (does not need to match the field name).
     * @param {object} [options={}] - Options for this field
     */
    exposeFloatList<Name extends CompatibleTypes<Types, ParentShape, [
        "Float"
    ], Nullable>, ResolveReturnShape, Nullable extends FieldNullability<[
        "Float"
    ]> = Types["DefaultFieldNullability"]>(...args: NormalizeArgs<[
        name: Name,
        options?: Omit<FieldOptionsFromKind<Types, ParentShape, [
            "Float"
        ], Nullable, {}, Kind, ParentShape, ResolveReturnShape>, "resolve" | "type">
    ]>) {
        const [name, options = {} as never] = args;
        return this.exposeField<[
            "Float"
        ], Nullable, Name>(name, { ...options, type: ["Float"] });
    }
    /**
     * Create an ID list field from an id[] property on the parent object
     * @param {string} name - the name of the property on the source object (does not need to match the field name).
     * @param {object} [options={}] - Options for this field
     */
    exposeIDList<Name extends CompatibleTypes<Types, ParentShape, [
        "ID"
    ], Nullable>, ResolveReturnShape, Nullable extends FieldNullability<[
        "ID"
    ]> = Types["DefaultFieldNullability"]>(...args: NormalizeArgs<[
        name: Name,
        options?: Omit<FieldOptionsFromKind<Types, ParentShape, [
            "ID"
        ], Nullable, {}, Kind, ParentShape, ResolveReturnShape>, "resolve" | "type">
    ]>) {
        const [name, options = {} as never] = args;
        return this.exposeField<[
            "ID"
        ], Nullable, Name>(name, { ...options, type: ["ID"] });
    }
    /**
     * Create a Int list field from a number[] property on the parent object
     * @param {string} name - the name of the property on the source object (does not need to match the field name).
     * @param {object} [options={}] - Options for this field
     */
    exposeIntList<Name extends CompatibleTypes<Types, ParentShape, [
        "Int"
    ], Nullable>, ResolveReturnShape, Nullable extends FieldNullability<[
        "Int"
    ]> = Types["DefaultFieldNullability"]>(...args: NormalizeArgs<[
        name: Name,
        options?: Omit<FieldOptionsFromKind<Types, ParentShape, [
            "Int"
        ], Nullable, {}, Kind, ParentShape, ResolveReturnShape>, "resolve" | "type">
    ]>) {
        const [name, options = {} as never] = args;
        return this.exposeField<[
            "Int"
        ], Nullable, Name>(name, { ...options, type: ["Int"] });
    }
    /**
     * Create a String list field from a string[] property on the parent object
     * @param {string} name - the name of the property on the source object (does not need to match the field name).
     * @param {object} [options={}] - Options for this field
     */
    exposeStringList<Name extends CompatibleTypes<Types, ParentShape, [
        "String"
    ], Nullable>, ResolveReturnShape, Nullable extends FieldNullability<[
        "String"
    ]> = Types["DefaultFieldNullability"]>(...args: NormalizeArgs<[
        name: Name,
        options?: Omit<FieldOptionsFromKind<Types, ParentShape, [
            "String"
        ], Nullable, {}, Kind, ParentShape, ResolveReturnShape>, "resolve" | "type">
    ]>) {
        const [name, options = {} as never] = args;
        return this.exposeField<[
            "String"
        ], Nullable, Name>(name, { ...options, type: ["String"] });
    }
    /**
     * Create a field that resolves to a property of the corresponding type on the parent object
     * @param {string} name - the name of the property on the source object (does not need to match the field name).
     * @param {object} [options={}] - Options for this field
     */
    expose<Type extends TypeParam<Types>, Nullable extends FieldNullability<Type>, ResolveReturnShape, Name extends CompatibleTypes<Types, ParentShape, Type, Nullable>>(...args: NormalizeArgs<[
        name: Name,
        options?: Omit<FieldOptionsFromKind<Types, ParentShape, Type, Nullable, {}, Kind, ParentShape, ResolveReturnShape>, "resolve">
    ]>) {
        const [name, options = {} as never] = args;
        return this.exposeField(name, options);
    }
}
