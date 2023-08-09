FROM node:17.0.1

WORKDIR /app

COPY package*.json ./

RUN npm install --force

COPY . .

CMD npm start