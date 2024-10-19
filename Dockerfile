# Use the official Node.js image as the base image
FROM node:current-alpine AS build

# Set the working directory in the container
WORKDIR ./

# Copy the package.json to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application with CI=true to prevent looping
ENV CI=true
RUN npm run build

# Stage 2: Serve the production build
FROM node:current-alpine AS production

# Set the working directory in the container
WORKDIR ./

# Copy the build folder from the previous stage
COPY --from=build ./ ./

# Expose the application port
EXPOSE 3000

# Start the server
CMD ["npm", "start"]
