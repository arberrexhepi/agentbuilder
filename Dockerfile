# Use the official Node.js base image
FROM node:18-alpine

# Set the working directory inside the container to the root of the app
WORKDIR ./

# Copy package.json and package-lock.json if available to the working directory
COPY package*.json ./

# Clean npm cache and install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the app (if it's a React or frontend app; skip if not applicable)
RUN npm run build

# Expose the port the app runs on (e.g., 3000 for React)
EXPOSE 3000

# Specify the command to start the app
CMD ["npm", "start"]
