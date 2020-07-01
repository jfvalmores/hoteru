import server from './server';

/**
  app.use('/api', [
    // ROUTES
  ]);
 */

server.get('/', (req, res) => {
  res.send('Hello, world!');
});

server.get('/api/test', (req, res) => {
  const tests = require('./tests');
  res.send(tests.run());
});

server.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));