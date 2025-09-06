FROM node:22-alpine AS builder

RUN npm install -g pnpm

WORKDIR /app

COPY . ./

RUN pnpm install --prod --frozen-lockfile

EXPOSE 3333

CMD ["node", "src/server.ts"]