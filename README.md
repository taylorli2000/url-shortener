# Blog Posts

Basic URL shortener built using Angular for the front end and MongoDB, Express.js, and Node.js for the back end

## Initial Setup

In the server folder, install dependencies:

```shell
cd server
npm install
```

You must set up the .env file:

URLSHORTENER_DB_URI=your-database-connection-string
URLSHORTENER_DB_NS=your-database-name
URLS_COLLECTION_NS=your-collection-name

In the client folder, install dependencies:

```shell
cd client
npm install
```

### Running the application locally

In one terminal, start the back end:

```shell
cd server
npm start
```

In another terminal, start the front end:

```shell
cd client
npm start
```
