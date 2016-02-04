import express from 'express';
import graphqlHTTP from 'express-graphql';

import schema from './schema';

const app = express();

app.use('/', graphqlHTTP({
  schema,
  pretty: true,
  graphiql: true
}));

app.listen(process.env.PORT || 3000, () => {
  console.log('La aplicación corre en el puerto 3000 :)');
});
