# Use the official Apache HTTP Server image from the Docker Hub
FROM httpd:2.4

# Copy your application files to the Apache server's document root
COPY ./dist/ /usr/local/apache2/htdocs/

# Copy the .htaccess file to the document root
COPY ./dist/.htaccess /usr/local/apache2/htdocs/.htaccess