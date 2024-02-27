// server.js

const express = require('express');
const { createApp } = require('@vue/server-renderer');
const manifest = require('./dist/client/ssr-manifest.json');

const server = express();

const app = createApp({
  render: async () => {
    // render app
  }  
});

server.use('/dist', express.static('./dist/client'));

server.get('*', async (req, res) => {

  try {
    const html = await app.renderToString(req, manifest);
    
    res.setHeader('Content-Type', 'text/html');
    res.end(html);
    
  } catch (err) {
    res.status(500).end(err.stack);
  }
});

server.listen(5173, () => {
  console.log('Server running at http://localhost:5173');
});

/*
    Import the required modules - express, @vue/server-renderer, manifest
    Create the Express server app
    Create the Vue app using createApp and pass the render function
    Serve static assets from ./dist/client
    Handle all routes and render the Vue app to HTML
    Set the Content-Type header
    Send the rendered HTML back in the response
    Handle any errors
    Start the server on port 5173

This is a basic server-side setup to render a Vue app using Vite + Vue 3 SSR.
*/