FROM node:24-bookworm-slim
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
ENV NODE_ENV=production
USER node
EXPOSE 3000
CMD ["node","--import","tsx","server/app.mjs"]
