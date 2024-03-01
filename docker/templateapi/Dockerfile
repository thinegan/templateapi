FROM maven:3.9-amazoncorretto-20-debian-bullseye AS MAVEN_TOOL_CHAIN
WORKDIR /app
COPY . .
RUN mvn install

# Use an official OpenJDK runtime as a parent image
FROM openjdk:21-slim-bullseye
# FROM openjdk:23-slim

# Copy the fat jar into the container at /app
COPY --from=MAVEN_TOOL_CHAIN /app/target/*.jar /app/spring-boot-application.jar

# Make port 8080 available to the world outside this container
EXPOSE 8080

ENV SPRING_PROFILES_ACTIVE $SPRING_PROFILES_ACTIVE

RUN echo "spring profile: $SPRING_PROFILES_ACTIVE"

ENTRYPOINT [ "java","-jar","/app/spring-boot-application.jar" ]
