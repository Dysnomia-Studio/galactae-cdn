FROM nginx:latest
WORKDIR /usr/share/nginx/html

# Build Project
COPY . /usr/share/nginx/html/