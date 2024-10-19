# Stage 1: Build the application
FROM node:current-alpine AS build

# Set the working directory to root
WORKDIR /

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to root
COPY . ./

# Build the application with CI=true to prevent prompts
ENV CI=true
RUN npm run build

# Stage 2: Serve the production build
FROM node:current-alpine AS production

# Set the working directory to root
WORKDIR /

# Copy the necessary files from the build stage to root
COPY --from=build /build ./build
COPY --from=build /package*.json ./
COPY --from=build /node_modules ./node_modules

# Expose the application port
EXPOSE 3000

# Start the server
CMD ["npm", "start"]
