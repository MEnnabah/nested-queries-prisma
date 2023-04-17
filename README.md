This project is demo of a crash while using Prisma and GraphQL.
The app crashes when querying nested many-to-many relation.

Note: This project uses Docker for the app and the db. The port mapping is 8080 (find more in docker-compose.yml).

To run the project:

1. Clone the repo. (it uses Docker for the app and the database).
2. `yarn install`
3. Run `docker compose up`, and wait for the app to run by observing the logs.
4. Now you need to run the migration file within the container, that will also seed the database with data. Run `docker exec -it main /bin/sh` to get a container shell.
5. Run the migration file: `npx prisma migrate dev` (this will seed the DB too).

Open `http://localhost:8080/graphql` and run the following query:

```
query {
  cat(id: 1) {
    name
    age
    owner {
      name
      houses {
        address
      }
    }
    legs {
      color
      claws {
        length
      }
    }
  }
}
```

This will crash the app silently. However, Postgres will (sometimes) log:
```
LOG:  could not receive data from client: Connection reset by peer
```

You can edit the query to remove `claws` part of the query. This will remove the many-to-many relationship that triggers the crash.

```
query {
  cat(id: 1) {
    name
    age
    owner {
      name
      houses {
        address
      }
    }
    legs {
      color
    }
  }
}
```

Now, to confirm this won't happen if we don't speak to Postgres, open `src/cats/cats.resolver.ts` and `src/cats/legs.resolver.ts`, and toggle the constructor to use in-memory version (i.e. comment line 19, and uncomment 20).

Make sure the app was hot reloaded by observing Docker logs, once hot reloaded, trigger the same query again. Works fine!