import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';

const isProd = process.env.NODE_ENV === 'production';
const app = express();

if (isProd) {
  app.use(express.static(path.resolve('dist/client'), { index: false }));
} else {
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'custom'
  });
  app.use(vite.middlewares);
}

app.get('*', async (req, res) => {
  try {
    if (isProd) {
      const { render } = await import('./dist/server/entry-server.js');
      await render(req.originalUrl, res);
    } else {
      const { render } = await vite.ssrLoadModule('/src/entry-server.tsx');
      await render(req.originalUrl, res);
    }
  } catch (e) {
    console.error('SSR Error:', e);
    res.status(500).send('Internal Server Error');
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`SSR server on ${port}`));
