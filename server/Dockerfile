FROM node:18.14.0-alpine3.17
ARG APP_DIR=/app/
WORKDIR ${APP_DIR}
VOLUME ${APP_DIR}
VOLUME node_modules
ENV FORCE_COLOR=1
ENV NODE_ENV development
EXPOSE 3000
COPY ./package.json ./yarn.lock ${APP_DIR}
RUN yarn install
CMD [ "yarn", "dev" ]
