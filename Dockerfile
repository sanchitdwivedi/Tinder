# Dockerfile

# base image
FROM node:14-alpine

# create & set working directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# copy source files
COPY . /usr/src

# install dependencies
RUN npm install