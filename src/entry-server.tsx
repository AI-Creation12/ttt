import React from 'react';
import { StaticRouter } from 'react-router';
import { HelmetProvider } from 'react-helmet-async';
import { renderToPipeableStream } from 'react-dom/server';
import App from './App';

export async function render(url: string, res: import('stream').Writable) {
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
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.VITE_GOOGLE_ADS_ID}" crossorigin="anonymous"></script>
        </head><body><div id="root">`);
        pipe(res);
      },
      onAllReady() {
        res.end('</div><script type="module" src="/assets/entry-client.js"></script></body></html>');
      }
    }
  );
}
