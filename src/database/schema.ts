import { pgTable, uuid, text } from "drizzle-orm/pg-core";


export const users = pgTable('users', {
  id: uuid().defaultRandom().primaryKey(), 
  name: text().notNull(),
  email: text().notNull().unique(),
})

export const courses = pgTable('courses', {
  id: uuid().defaultRandom().primaryKey(),
  title: text().notNull().unique(),
  description: text(),
})