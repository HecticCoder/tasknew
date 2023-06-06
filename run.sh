#!/bin/bash

# Clone the repository
git clone https://github.com/HecticCoder/task.git

# Navigate into the repository directory
cd task

# Install dependencies
npm install

# Build the project
npm run build

# Start the server
npm start