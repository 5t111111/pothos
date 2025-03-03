/* eslint-disable @typescript-eslint/require-await */
import SchemaBuilder from '@pothos/core';
import PrismaPlugin from '@pothos/plugin-prisma';
import type PrismaTypes from '../../prisma/generated';
import ScopeAuthPlugin from '../../src';
import { db } from './db';
import User from './user';

interface Context {
  user: User | null;
  count?: (name: string) => void;
}

const builder = new SchemaBuilder<{
  Context: Context;
  Interfaces: {
    StringInterface: {};
  };
  AuthScopes: {
    loggedIn: boolean;
    admin: boolean;
    syncPermission: string;
    asyncPermission: string;
  };
  AuthContexts: {
    loggedIn: Context & { user: User };
  };
  PrismaTypes: PrismaTypes;
}>({
  plugins: [ScopeAuthPlugin, PrismaPlugin],
  prisma: {
    client: db,
  },
  authScopes: async (context) => ({
    loggedIn: !!context.user,
    admin: !!context.user?.roles.includes('admin'),
    syncPermission: (perm) => {
      context.count?.('syncPermission');

      return !!context.user?.permissions.includes(perm);
    },
    asyncPermission: async (perm) => {
      context.count?.('asyncPermission');

      return !!context.user?.permissions.includes(perm);
    },
  }),
});

export default builder;
