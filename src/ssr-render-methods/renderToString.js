import React from 'react';
import { ServerStyleSheet } from 'styled-components';
import ReactDOMServer from 'react-dom/server';
import { App } from '../App';

/**
 * Based on doc: https://styled-components.com/docs/advanced#example
 */
export const renderToString = (res) => {
  const sheet = new ServerStyleSheet();
  try {
    const html = ReactDOMServer.renderToString(sheet.collectStyles(<App />));
    const styleTags = sheet.getStyleTags();

    res.end(`
    <html>
      <head>
        <title>Test</title>
        ${styleTags}
      </head>
      <body>
        <div id="root">${html}</div>
      </body>
    </html>
  `);
  } catch (error) {
    // handle error
    console.error(error);
  } finally {
    sheet.seal();
  }
};
