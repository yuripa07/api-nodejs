import { server } from './app.ts'

server.listen({ port: 3333 }).then(() => {
  console.log('Server running on http://localhost:3333')
})
