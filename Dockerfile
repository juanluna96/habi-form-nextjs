FROM node:18-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json ./
RUN  npm install --production

FROM node:18-alpine AS deps-dev
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json ./
RUN  npm install --dev

FROM node:18-alpine AS test
WORKDIR /app
COPY --from=deps-dev /app/node_modules ./node_modules
COPY . .
RUN npm run test

FROM node:18-alpine AS dev
WORKDIR /app
COPY --from=deps-dev /app/node_modules ./node_modules
COPY public/ src/ ./
EXPOSE 3000
CMD ["npm", "run", "dev"]
