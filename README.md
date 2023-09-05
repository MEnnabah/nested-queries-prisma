**Update 1**: *Prisma merged a PR to the engine images repo to potentionally fix this issue https://github.com/prisma/engine-images/pull/75. It's part of the 5.3.0 milestone*.

---

This project is demo of a crash while using Prisma and GraphQL.
We have demonstrated the crash only is triggered when:

- It's a nested query, and
- It's a one-to-many relationship, and
- It uses `findFirst`, `findUnique` or `$transaction`.

Note: Using `findUnique` doesn't crash the app, but this can't be used because it a one-to-many relationship.

The app is built with Nest.js and uses Apollo GraphQL driver.
The app also uses Postgres, and it crashes silently. The only reason we know it crashes because of a log from Postgres:
`LOG:  could not receive data from client: Connection reset by peer`

We have tried to `export DEBUG="*"` to watch out for help logs. However, the last log before the app crashes is:
`prisma:client:libraryEngine  sending request, this.libraryStarted: true`.

Note: This project uses Docker for the app and the db. The port mapping is 8080 (find more in docker-compose.yml).

### How to reproduce

1. Clone the standalone reproduction repo (it uses Docker for the app and the database).
2. `yarn install`
3. Run `docker compose up`, and wait for the app to run by observing the logs.
4. Now you need to run the migration file within the container, that will also seed the database with data. Run `docker exec -it main /bin/sh` to get a container shell.
5. Run the migration file: `npx prisma migrate dev`.

The app is now running on `http:localhost:8080` with data in the database. We need to query these data to trigger the bug.

1. Open `http:localhost:8080/graphql` and run the following query:
```graphql
query {
  cat(id: 1) {
    name
    age
    legs {
      color
      claws {
        length
      }
    }
  }
}
```

The query has a one-to-many relationship in the `legs` and `claws` part.

Now to confirm this only happens when the query uses any of the previously mentioned methods, open `src/claws/claws.service.ts` and try the methods that are commented at the bottom of the file.

Make sure the app was hot reloaded by observing Docker logs, once hot reloaded, trigger the same query again. Works fine!
