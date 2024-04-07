import React from 'react';
import { ServerStyleSheet } from 'styled-components';
import ReactDOMServer from 'react-dom/server';
import { App } from '../App';

/**
 * Based on doc: https://styled-components.com/docs/advanced#streaming-rendering
 */
export const renderToNodeStream = (res) => {
  res.write('<html><head><title>Test</title></head><body>');

  const sheet = new ServerStyleSheet();
  const jsx = sheet.collectStyles(<App />);
  const stream = sheet.interleaveWithNodeStream(ReactDOMServer.renderToNodeStream(jsx));

  stream.pipe(res, { end: false });
  stream.on('end', () => res.end('</body></html>'));
};
