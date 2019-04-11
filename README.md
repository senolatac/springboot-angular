# User Management System, Spring Boot, Angular 7, MySQL, Docker, Hibernate, Liquibase

The application structure is as follows.
- **server-user-management** - Microservice implemented using Spring boot. [More info](server-user-management/README.md)
- **client-user-management** - A NodeJs application implemented using Angular 7. This consumes services hosted by server side.  [More info](client-user-management/README.md)
- **docker-compose.yml** - Docker compose file to run server services and course-enrollment-client in container.

### Build

#### 1) Build Docker images and run it in containers using docker-compose from parent directory.
   This also create container for Mysql and run it.
   
```
$ docker-compose up
```

NOTE: To run without docker container follow [steps](server-user-management/README.md) in server-user-management project.

#### 2) Build and run client-user-management application (Important: docker-compose up will handle everything so this is not necessary part.)

```
$ cd client-user-management
$ docker build -t client-user-management .
$ docker run -d -p 4200:80 client-user-management
```

### Access application using following URL

```
http://localhost:4200
```

