# run docker mongo

- docker run --name rpv-mongo -d mongo
- docker run --name rpv-mongo -p 27018:27017 -d mongo
- mongorestore --port 27018 -d demopos /Users/chaiyasittayabovorn/Desktop/vue_nov_2022/rvpPOS/backend/dummy_db_cmpos
- mongodb://localhost:27018