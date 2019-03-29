FROM node:8.11.2
ENV NODE_ENV=production
WORKDIR /usr/src/app/
COPY package.json dist static ./
RUN npm install
COPY . .
EXPOSE 8081
CMD npm run prod
