import http from 'http';

const PORT = 8080;

export const server = http.createServer(function (req, res) {
  res.write('Hello World!');
  res.end();
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
