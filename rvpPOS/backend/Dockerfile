# Base image
FROM node:18

# Create app directory
WORKDIR /usr/src/app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./
COPY *.key ./

# Install app dependencies
RUN npm install

# Bundle app source
COPY . .

# Creates a "dist" folder with the production build
RUN npm run build-docker

COPY uploaded ./build/uploaded

ENV ROOT_PATH=./build
ENV MONGO_HOST=172.17.0.2
ENV MONGO_PORT=27017


# Start the server using the production build
CMD [ "node", "build/index.js" ]
