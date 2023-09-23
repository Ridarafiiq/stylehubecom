# Use an official Node runtime as a parent image
FROM node:16

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
#COPY package*.json ./
COPY . .

# Install app dependencies
RUN npm install

# Copy all local files to the image


# Expose the port your app runs on
EXPOSE 3000

# Define the command to run your app
CMD ["npm", "start", "--host=0.0.0.0"]
