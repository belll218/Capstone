#!/bin/bash

# Install MySQL Server
sudo apt update
sudo apt install -y mysql-server

# Start MySQL service
sudo service mysql start

# Optional: Set root password (can be skipped if using default auth)
# sudo mysql -e "ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'rootpassword'; FLUSH PRIVILEGES;"

# Create new database and user
sudo mysql <<EOF
CREATE DATABASE IF NOT EXISTS chatbot_db;
CREATE USER IF NOT EXISTS 'cocococonut'@'localhost' IDENTIFIED BY 'password';
GRANT ALL PRIVILEGES ON chatbot_db.* TO 'cocococonut'@'localhost';
ALTER USER 'cocococonut'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';
FLUSH PRIVILEGES;
EOF

echo "MySQL installed and chatbot_db created with user chatuser."