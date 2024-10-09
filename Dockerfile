## Production ##################################################################
# Use a larger node image to build for native dependencies (e.g., gcc, python)
FROM node:lts AS production

# Reduce yarn log spam and disable color during install within Docker
ENV YARN_CONFIG_LOGLEVEL=warn
ENV YARN_CONFIG_COLOR=false

# Set working directory to the app folder in the node user's home
WORKDIR /home/node/app

# Copy source code and install dependencies
COPY --chown=node:node . /home/node/app/
RUN yarn install

# Build the Docusaurus app
RUN yarn build

## Deploy ######################################################################
# Use a stable nginx image for deployment
FROM nginx:stable-alpine AS deploy

# Copy the built app from the production stage to the nginx HTML directory
COPY --from=production /home/node/app/build /usr/share/nginx/html/
