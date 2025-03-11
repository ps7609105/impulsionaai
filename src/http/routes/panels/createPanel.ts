import { Elysia, t } from 'elysia';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const createPanel = new Elysia()
  .post('/panels', async ({ set, body, error }) => {
    const { email, password } = body;

    const panelFromEmail = await prisma.panel.findUnique({
      where: {
        email,
      },
    });

    if (panelFromEmail) {
      return error(409, 'Email already exists.');
    };

    const passwordHash = await Bun.password.hash(password);

    await prisma.panel.create({
      data: {
        email,
        passwordHash,
      },
    });

    set.status = 'Created';
  }, {
    detail: {
      tags: ['Panel'],
    },
    body: t.Object({
      email: t.String({ format: 'email' }),
      password: t.String({ minLength: 8 }),
    }),
  });