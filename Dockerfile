FROM node:16-alpine


WORKDIR /app

COPY . . 

COPY package.json /app/

RUN npm install

CMD ["npm", "start"]