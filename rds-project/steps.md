Managed DB service that simplifies db setup,operation and scaling.

Handling adminstration tasks like backups, patching, monitoring and scaling.

## Node App(2-Tier)
Frontend-Ec2 (Docker)
backend-RDS

### Creation of RDS
- select standard
- select MYSQL and engine version as 8.0.39
- select free-tier
- provide master username (keep it as it is)--> Self managed
- provide the passwd make ure to remember as it will be used by our frontend.
- select "yes" in public access
- create vpc security group
- select as Password Authentication
- Create the DB, That's it!!!!!

### Creation of Ec2
- select AMi-amazon-linux
- default vpc
- add inbound rule as 80 along with ssh
- create instance

### Login to Ec2
- Install the docker, start the docker service
```bash
sudo yum install docker -y
systemctl start docker
systemctl status docker
```
- Pull the docker image from the registry
```bash
docker pull suyogks21/nodeapp-rds:v1
```
- Go to RDS SG which we created and edit to allow for our ec2 or for demo purpose select anywhere but it is not recommended in production.

- Run the docker container through the image which we have pulled already you can cross check using command (docker images)
```bash
docker run --rm -p 80:3000 -e DB_HOST="database-1.rds.amazonaws.com" -e DB_USER="admin" -e DB_PASSWORD="passwd" -d suyogks21/nodeapp-rds:v1
```
### Our Node App is ready Simply copy the Public IP and use port 80 to see your website

### Now if you want to verify in the database by running the sql queries to fetch the entries
```bash
#comments for documentaion
docker run -it → Run interactively in a terminal.

--rm → Remove the container when it exits (keeps things clean).

mysql:8.0 → Use the official mysql image, version 8.0.

mysql → Run the mysql CLI client inside the container.

-h <hostname> → Connect to your AWS RDS endpoint.

-u admin -p → Use admin user; -p will prompt for a password.
```

```bash
#Actual command

docker run -it --rm mysql:8.0 mysql -h database-1.rds.amazonaws.com -u admin -p
```
