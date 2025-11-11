#!/bin/bash

# Hostinger Build Script for React/Vite Project
# This script runs during Hostinger's Git deployment

echo "Starting build process..."

# Install dependencies
npm install

# Build the project
npm run build

# Copy .htaccess to dist folder if not already there
if [ ! -f dist/.htaccess ]; then
    cp public/.htaccess dist/.htaccess
fi

echo "Build completed successfully!"
echo "Deployment files are in the 'dist' directory"
