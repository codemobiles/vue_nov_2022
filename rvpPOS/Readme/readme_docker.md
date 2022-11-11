# run docker mongo

- docker run --name rpv-mongo -d mongo
- docker run --name rpv-mongo -p 27018:27017 -d mongo
- mongorestore --port 27018 -d demopos /Users/chaiyasittayabovorn/Desktop/vue_nov_2022/rvpPOS/backend/dummy_db_cmpos
- mongodb://localhost:27018
- docker-compose up

# docker commandlines

- docker ps
- docker start <container-id>
- docker stop <container-id>
- docker network ls
- docker inspect bridge
- docker-compose up
- docker-compoose up --build
- docker-compose up --build -d
