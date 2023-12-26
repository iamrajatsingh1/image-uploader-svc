# Use an official Node.js runtime as a base image
FROM node:14

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Copy .env file to the working directory
COPY .env ./

# Expose the port the app runs on
EXPOSE 3001

# Run the application
CMD ["npm", "start"]
