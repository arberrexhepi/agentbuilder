# Use the official Node.js image as the base image
FROM node:current-alpine AS build

Workdir .

COPY package*.json ./
# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build
FROM  node:current-alpine AS production

WORKDIR . 
COPY --from build . ./

EXPOSE 3000
CMD ["npm","start"]
