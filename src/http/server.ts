import { Elysia } from 'elysia';
import { cors } from '@elysiajs/cors';

const app = new Elysia({ prefix: '/api'})
  .use(cors());

app.listen(process.env.PORT!, () => {
  console.log('HTTP server running!');
});