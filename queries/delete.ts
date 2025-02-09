import { db } from '../db';
import { eq } from 'drizzle-orm';
import { SelectUser, usersTable } from '../schema-db';

export async function deleteUser(id: SelectUser['id']) {
  await db.delete(usersTable).where(eq(usersTable.id, id));
}
