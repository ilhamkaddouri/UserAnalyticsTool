FROM node:14-stretch-slim as develop
LABEL maintainer = "OpusCapita"

RUN app-get update && apt-get install -y curl