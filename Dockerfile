# 引入一個(己完成的) basic image(映像)
# 可以在 basic image 注入自己的 src code，在其之上建構 image
# as 用來區分執行的階段，as build 表示為 docker 創建中的 build 階段
FROM node:16.13.2-alpine AS build

# 建立 Docker 工作目錄
WORKDIR /workdir

# 複製檔案到 Docker 工作目錄
# 可省略 /workdir/
COPY package.json /workdir/package.json
COPY package-lock.json /workdir/package-lock.json

# 在 docker 中安裝 npm 軟件包
# run docer engine command 將會在你的 image 中執行一個進程，並且將結果保留在你的 image 中。
# 我們將在建構 image 時運行 npm install，目的是將 package.json 的 node_modules 安裝在 image 中。
# RUN npm install

# 把 npm install 改成 npm ci --production
RUN npm ci --production

# 將所有文件複製到 Docker 工作目錄中
# 也可以把打包好的文件直接映射到工作目錄中，這樣可以省掉 RUN npm run build 的步驟
# 但現在這個方法可以備份本地的 source code 到 container 中，並在 container 中進行打包
COPY . .

# CMD 指令中設定的指令，在構建 image 時不會被執行
# CMD 中的設定，表示當容器在運行 image 時，要運行的指令(構建完 image，再執行的指令)
# 使用 json 格式，是為了讓它更乾淨，更好讀
# CMD ["npm", "run", "start"]

# 打包文件
RUN npm run build

# docker build -t react-docker:1.0.0-dev .
# docker images
# 表示當前目錄 linux command : $(pwd) ; windows command : %cd%
# docker run --rm -it --name web -p 3000:3000 -v %cd%:/workdir react-docker:1.0.0-dev

# NGINX Web Server
FROM nginx:1.20.2-alpine AS prod

# 把簽名資料包入 Docker 中，可用 Docker inspect 查看
LABEL \
  version="1.0" \
  maintainer="yuus271828@gmail.com" \
  build-date="2022-01-31" 

# --from=build 表示不要在本地找，去 build 階段 copy
COPY --from=build /workdir/container /
COPY --from=build /workdir/build /usr/share/nginx/html

# 設定 expose port 為 3000
EXPOSE 80

# 啟動程式的指令
# nginx 默認情況下會用 daemon 的方式啟動，會導致 container 只有短暫運作就結束，daemon off 能讓 container 維持 active 的模式
# docker 容器默認會把容器內部第一個進程，也就是pid =1的程序作為docker容器是否正在運行的依據，如果docker 容器pid掛了，那麼docker容器便會直接退出。
# docker run的時候把command最為容器內部命令，如果你使用nginx，那麼nginx程序將後台運行，這個時候nginx並不是pid為1的程序，而是執行的bash，這個bash執行了nginx指令後就掛了，所以容器也就退出了，和你這個一樣的道理，pm2 start 過後，bash 的pid為1，那麼此時bash執行完以後會退出，所以容器也就退出了。
CMD ["nginx", "-g", "daemon off;"]

# docker build -t ohiji-frontend:1.0.0-prod .

# 用 docker images 查看，會發現 1.0.0-prod 的大小不到 50MB，比 1.0.0-dev 的 1.5GB 小很多
# 之所以會這麼小，是因為 Docker 在執行完 build 階段，進入到 prod 階段時，只會留下有被 prod 取用的資源，其它都會被刪掉
# 再加上 nginx:1.20.2-alpine 是一個非常輕量的 basic image，所以最後產生的 container 佔用的空間才會這麼小
# docer build 產生的 container 只會留下有包含 CMD 指令(啟動程式)階段的內容，不需要被啟動的部分會被自動刪除

# docker run --rm -it --name web -p 3000:80 ohiji-frontend:1.0.0-prod










