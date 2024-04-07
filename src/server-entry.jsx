import express from 'express';
import { renderToNodeStream } from './ssr-render-methods/renderToNodeStream';
import { renderToPipeableStream } from './ssr-render-methods/renderToPipeableStream';
import { renderToString } from './ssr-render-methods/renderToString';

const app = express();

app.get('/*', (req, res) => {
  renderToNodeStream(res); // not working
  // renderToPipeableStream(res); // not working
  // renderToString(res); // working
});

app.listen(1234, () => {
  console.log('🚀🚀🚀 RUNNING ON: http://localhost:1234');
});
