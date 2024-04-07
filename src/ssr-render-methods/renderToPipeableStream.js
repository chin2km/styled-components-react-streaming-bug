import React from 'react';
import { ServerStyleSheet } from 'styled-components';
import ReactDOMServer from 'react-dom/server';
import { Duplex } from 'stream';
import { App } from '../App';

class RenderStream extends Duplex {
  _read() {}
  _write(chunk, _encoding, next) {
    this.push(chunk);
    next();
  }
}

/**
 * No documentation available for styled-components with renderToPipeableStream
 */
export const renderToPipeableStream = (res) => {
  res.write('<html><head><title>Test</title></head><body>');

  const sheet = new ServerStyleSheet();
  const renderStream = new RenderStream();

  const pipeableStream = ReactDOMServer.renderToPipeableStream(sheet.collectStyles(<App />), {
    onAllReady() {
      pipeableStream.pipe(renderStream);
    },
  });
  renderStream.on('finish', () => renderStream.push(null));

  const stream = sheet.interleaveWithNodeStream(renderStream);

  stream.pipe(res, { end: false });
  stream.on('end', () => res.end('</body></html>'));
};
