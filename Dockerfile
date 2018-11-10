FROM node:10


# working directory where our thing will live in the container:
WORKDIR /usr/scr/app

COPY package*.json ./

RUN npm install 

# Copy whatever it is here, we will copy it over to this file. 
COPY . .

EXPOSE 1128 

RUN npm run build

CMD ["npm", "start"]