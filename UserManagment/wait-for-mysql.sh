#!/bin/sh

# Hostname and port of MySQL container
MYSQL_HOST="mysql-db"
MYSQL_PORT="3306"

echo "⏳ Waiting for MySQL at $MYSQL_HOST:$MYSQL_PORT..."

# Wait until the MySQL port is open
while ! nc -z $MYSQL_HOST $MYSQL_PORT; do
  sleep 1
done

echo "✅ MySQL is ready. Starting Spring Boot App..."
exec java -jar app.jar
