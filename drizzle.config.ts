import { defineConfig } from 'drizzle-kit'
import { config } from 'dotenv';

config({ path: '.env.local' })

export default defineConfig({
	schema: './schema-db.ts',
	out: './migrations',
	dialect: 'postgresql',
	dbCredentials: {
		url: process.env.DATABASE_URL!,
	},
})
