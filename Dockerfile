FROM node:alpine AS base
RUN apk add --no-cache openssl-dev ca-certificates

WORKDIR /workspace/studio
COPY package.json yarn.lock ./

#####################
#### DEVELOPMENT ####
#####################
FROM base AS development

RUN export NODE_ENV=development

RUN yarn

COPY . .

RUN npx prisma generate
RUN yarn build

# CMD/ENTRYPOINT for development stage is part of docker-compose.yml