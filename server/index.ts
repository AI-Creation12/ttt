import express from 'express';
import { createReadStream } from 'fs';
import path from 'path';
import { render } from '../dist/server/entry-server.js';

const isProd = process.env.NODE_ENV === 'production';
const app = express();
const distPath = path.resolve('dist/client');

if (isProd) {
  app.use(express.static(distPath, { index: false }));
}

app.get('*', async (req, res) => {
  try {
    if (isProd) {
      const { render } = await import('../dist/server/entry-server.js');
      render(req.originalUrl, res);
    } else {
      // dev: użycie Vite jako middleware
      const vite = await import('vite').then(m => m.createServer({ server: { middlewareMode: 'ssr' } }));
      app.use(vite.middlewares);
      const { render } = await vite.ssrLoadModule('/src/entry-server.tsx');
      res.status(200);
      render(req.originalUrl, res);
    }
  } catch (e) {
    res.status(500).end(e?.message);
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`SSR server on ${port}`));
