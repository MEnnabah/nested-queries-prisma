This project uses Docker for the app and the db. The port mapping is 8080 (find more in docker-compose.yml).

To run the project:

1. docker compose up.
2. `docker exec -it main /bin/sh` (`main` is the app container, I'm using `/bin/sh` here).
3. `npx prisma migrate dev` (this will run the migrations and seed the DB).

Open `http://localhost:8080/graphql` and run the following query:

```
query {
  cat(id: 1) {
    name
    age
    children {
      name
      age
      children {
        name
        age
        children {
          name
          age
          children {
          	name
          	age
        	}
        }
      }
    }
  }
}
```

This will crash the app silently. However, Postgres will log:
```
LOG:  could not receive data from client: Connection reset by peer
```

Now, to confirm this won't happen if we don't speak to Postgres, open `src/cats/cats.resolver.ts`, and toggle the constructor to use in-memory version (i.e. comment line 19, and uncomment 20).

Make sure the app was hot reloaded by observing Docker logs, once hot reloaded, trigger the same query again. Works fine!