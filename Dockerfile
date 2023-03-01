FROM nginx:latest
WORKDIR /usr/share/nginx/html

# Build Project
COPY . /usr/share/nginx/html/
COPY nginx.conf /etc/nginx/nginx.conf