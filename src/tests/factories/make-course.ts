import { faker } from '@faker-js/faker'
import { db } from '../../database/client'
import { courses } from '../../database/schema'

export async function makeCourse(title?: string) {
  const result = await db
    .insert(courses)
    .values({
      title: title ?? faker.lorem.words(4),
    })
    .returning()

  return result[0]
}
