# Use OpenJDK base image
FROM openjdk:17-jdk-alpine

# Set working directory
WORKDIR /app

# Copy the JAR file
COPY target/UserManagment-0.0.1-SNAPSHOT.jar app.jar

# Copy wait-for-mysql script
COPY wait-for-mysql.sh wait-for-mysql.sh
RUN chmod +x wait-for-mysql.sh

# Expose app port
EXPOSE 8080

# Start app after waiting for MySQL
CMD ["./wait-for-mysql.sh"]
