import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';

const server = createServer(async (request, response) => {
  try {
    const body = await readFile(new URL('./public/index.html', import.meta.url));
    response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    response.end(body);
  } catch {
    response.writeHead(500);
    response.end('Não foi possível abrir a página.');
  }
});
server.listen(3000, '127.0.0.1', () => console.log('Task Flow IA: http://localhost:3000'));
