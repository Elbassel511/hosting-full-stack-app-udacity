# Udagram Infrastructure

Udagram application is hosted on aws cloud services (S3 bucket , Elastic bean stack and RDS postgres)

![infrastructure](./screenshots/infrastructure.png)

## S3 bucket

Application front-end is hosted on a S3 bucket

![S3](./screenshots/S3.PNG)

Site URL : <http://bucket-udagram.s3-website-us-east-1.amazonaws.com>

## Elastic bean stack

App server is deployed on elastic bean service

![api](./screenshots/api.PNG)

Endpoint : <http://udagram.eba-pr5i6m9q.us-east-1.elasticbeanstalk.com>

## RDS postgres

![DB](./screenshots/DB.PNG)
![DB2](./screenshots/DB2.PNG)

App server uses a database provided on postgres RDS

Database Endpoint : database-1.cpekjjwik7ph.us-east-1.rds.amazonaws.com
