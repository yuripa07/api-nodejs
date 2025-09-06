import { test, expect } from 'vitest'
import { randomUUID } from 'node:crypto'
import request from 'supertest'
import { server } from '../app'
import { makeCourse } from '../tests/factories/make-course'

test('get course by id', async () => {
  await server.ready()

  const titleId = randomUUID()

  await makeCourse(titleId)

  const response = await request(server.server).get(
    `/courses?search=${titleId}`
  )

  expect(response.status).toEqual(200)
  expect(response.body).toEqual({
    total: 1,
    courses: [
      {
        id: expect.any(String),
        title: titleId,
        enrollments: 0,
      },
    ],
  })
})
