import { Elysia } from 'elysia';
import { cors } from '@elysiajs/cors';
import { swagger } from '@elysiajs/swagger';
import { createPanel } from './routes/panels/createPanel';

const app = new Elysia()
  .use(cors())
  .use(swagger({
    path: '/swagger',
    documentation: {
      info: {
        title: 'Impulsiona Aí',
        version: '1.0.0',
      },
    },
  }))
  .use(createPanel);

app.listen(process.env.PORT!, () => {
  console.log('HTTP server running!');
});