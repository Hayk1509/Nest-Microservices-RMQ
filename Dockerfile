# Use an official Node.js runtime as the base image.
FROM node:18-alpine

# Set the working directory inside the container.
WORKDIR /

# Copy the root package files.
COPY package*.json ./

# Copy subproject package files.
COPY main/package*.json ./main/
COPY product/package*.json ./product/
COPY users/package*.json ./users/

# Install root dependencies.
RUN npm install

# Install dependencies for each subproject.
RUN cd main && npm install && cd .. && \
    cd product && npm install && cd .. && \
    cd users && npm install && cd ..

# Copy all source code into the container.
COPY . .

# Expose port 3000 (adjust or add ports if needed).
EXPOSE 3000

# Start all services using the root package.json start script.
CMD ["npm", "run", "start"]
