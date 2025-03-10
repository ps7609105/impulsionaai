import { Elysia } from 'elysia';

const app = new Elysia({ prefix: '/api'});

app.listen(process.env.PORT!, () => {
  console.log('HTTP server running!');
});