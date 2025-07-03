import React from 'react';
import { StaticRouter } from 'react-router/server';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';

export async function render(url: string, res: import('stream').Writable) {
  const { renderToPipeableStream } = await import('react-dom/server');
  const helmetContext = {};
  const { pipe } = renderToPipeableStream(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </HelmetProvider>,
    {
      onShellReady() {
        const { helmet } = helmetContext as any;
        res.write(`<!DOCTYPE html><html lang="pl"><head>
          ${helmet.title.toString()}${helmet.meta.toString()}
          <script async src="https://pagead2.googlesyndication.com/pagead/js?client=${process.env.GADS_ID}" crossorigin="anonymous"></script>
        </head><body><div id="root">`);
        pipe(res);
      },
      onAllReady() {
        res.end(`</div><script type="module" src="/assets/entry-client.js"></script></body></html>`);
      }
    }
  );
}
