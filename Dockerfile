# From the blueprint: package_config_blueprint.md
# Production docker file for agentbuilder

# Step 1: Build stage
FROM node:cluster as build
ADD https://github.com/arberrexhepi/agentbuilder.git
# Full run optimizer and create react running environment
run yarn run build

# Step 2: Optimize stage
FROM build stage as init production container, with offline dependencies for logging
# Add smaller image layer for lighter production config
COPY --from=build /app /app
add\nCONTAINER NVIRD run server.

# Step 3: Production image serve commands with correct api call (avoid dev build)
WORKDIR /app
RUN node server index.js