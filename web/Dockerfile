#----------- Base ----------
#---------------------------
FROM node:18-alpine3.15
ARG APP_DIR=/app/
WORKDIR ${APP_DIR}
VOLUME ${APP_DIR}
ENV FORCE_COLOR=1
ENV NODE_ENV development
COPY ./package.json ./yarn.lock ${APP_DIR}
RUN yarn install
CMD [ "yarn", "start" ]
