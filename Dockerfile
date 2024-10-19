# Use the official Node.js image as the base application

FROM node:current-alpine AS build

# Set the working directory in the container
WORKDIR ./

# Copy the package.json and package-lock.json to install dependencies
COPY package*.json ./
# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .


# Build the application
RUN npm run build

FROM node:current-alpine AS production
WORKDIR ./

COPY --from=build ./ ./


# Expose the application port
EXPOSE 3000

CMD ["npm", "start"]
