FROM node:20 

WORKDIR /app

COPY ./ /app

RUN npm install
RUN npm run build

CMD ["npm", "start"]  
