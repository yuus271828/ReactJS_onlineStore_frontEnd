# 建立 node.js 環境並打包
FROM node:16.13.2-alpine AS build

WORKDIR /workdir

COPY package.json /workdir/package.json
COPY package-lock.json /workdir/package-lock.json

RUN npm ci --production

COPY . .

RUN npm run build


# 建立運行容器
FROM nginx:1.20.2-alpine AS prod

LABEL \
  version="1.0" \
  maintainer="yuus271828@gmail.com" \
  build-date="2022-01-31" 

COPY --from=build /workdir/container /
COPY --from=build /workdir/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]








