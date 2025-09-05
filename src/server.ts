import { fastifySwagger } from '@fastify/swagger'
import fastify from 'fastify'
import {
  validatorCompiler,
  serializerCompiler,
  type ZodTypeProvider,
  jsonSchemaTransform,
} from 'fastify-type-provider-zod'
import { createCourseRoute } from './routes/create-course.ts'
import { getCourseByIdRoute } from './routes/get-course-by-id.ts'
import { getCoursesRoute } from './routes/get-courses.ts'
import scalarAPIReference from '@scalar/fastify-api-reference'

const server = fastify({
  logger: {
    transport: {
      target: 'pino-pretty',
      options: {
        translateTime: 'HH:MM:ss Z',
        ignore: 'pid,hostname',
      },
    },
  },
}).withTypeProvider<ZodTypeProvider>()

server.register(fastifySwagger, {
  openapi: {
    info: {
      title: 'API de Cursos',
      description: 'API para gerenciar cursos',
      version: '1.0.0',
    },
  },
  transform: jsonSchemaTransform,
})

if (process.env.NODE_ENV === 'development') {
  server.register(scalarAPIReference, {
    routePrefix: '/docs',
  })
}

server.setSerializerCompiler(serializerCompiler)
server.setValidatorCompiler(validatorCompiler)

server.register(createCourseRoute)
server.register(getCoursesRoute)
server.register(getCourseByIdRoute)

server.listen({ port: 3333 }).then(() => {
  console.log('Server running on http://localhost:3333')
})
