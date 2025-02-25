import { connection } from './connection.js';
import { UserEntity } from './types.js';

const getUserTable = () => connection.table<UserEntity>('user');

export async function getUser(id: string) {
  return await getUserTable().first().where({ id });
}

export async function getUserByEmail(email: string) {
  return await getUserTable().first().where({ email });
}
