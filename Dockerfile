FROM node:12.16-slim
WORKDIR /opt
COPY package*.json .
ENV NODE_ENV=test
RUN npm install
WORKDIR /opt/app

CMD ["npm", "test"]