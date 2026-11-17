# ---------- Stage 1 : Build (Node) ----------
ARG NODE_VERSION=20
FROM node:${NODE_VERSION}-alpine AS build
WORKDIR /app

# Cache des dependances : package*.json copies avant le code
COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# ---------- Stage 2 : Run (Nginx) ----------
FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
