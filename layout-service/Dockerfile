FROM node:6.10.3-alpine

# referenced as volume for development
#COPY /static/ /static/
COPY server.js server.js
COPY package.json package.json
RUN npm install

EXPOSE 80

ENTRYPOINT ["node","server.js"]