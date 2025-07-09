# Use a Node.js base image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json for installing dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Define environment variables for database connection
ENV DB_HOST=localhost
ENV DB_USER=root
ENV DB_PASSWORD=yourpassword
ENV DB_NAME=my_app_db

# Start the application
CMD ["node", "src/app.js"]
