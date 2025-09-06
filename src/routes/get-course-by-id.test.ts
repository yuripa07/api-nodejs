import { test, expect } from 'vitest'
import request from 'supertest'
import { server } from '../app'
import { makeCourse } from '../tests/factories/make-course'
import { makeAuthenticatedUser } from '../tests/factories/make-user'

test('get course by id', async () => {
  await server.ready()

  const { token } = await makeAuthenticatedUser('student')
  const course = await makeCourse()

  const response = await request(server.server)
    .get(`/courses/${course.id}`)
    .set('Authorization', token)

  expect(response.status).toEqual(200)
  expect(response.body).toEqual({
    course: {
      id: expect.any(String),
      title: expect.any(String),
      description: null,
    },
  })
})

test('return 404 for non existing course', async () => {
  await server.ready()

  const { token } = await makeAuthenticatedUser('student')

  const response = await request(server.server)
    .get(`/courses/59b616ce-5419-4cdd-8b38-19d8d25e24b7`)
    .set('Authorization', token)

  expect(response.status).toEqual(404)
})
