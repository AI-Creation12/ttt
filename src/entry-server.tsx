import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';
import { StaticRouter } from 'react-router/server';
import { CookieManager } from 'react-cookie-manager';

export async function render(url: string, res: import('stream').Writable) {
  const { renderToPipeableStream } = await import('react-dom/server');
  const helmetContext = {};
  const { pipe } = renderToPipeableStream(
    <HelmetProvider context={helmetContext}>
      <CookieManager cookieKitId="" displayType="modal" theme="light">
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </CookieManager>
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
