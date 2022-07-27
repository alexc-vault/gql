import 'reflect-metadata';

import { createServer } from './server';

async function main() {
  const server = createServer();
  
  const info = await server?.listen({ port: 4002 });
  
  console.log(`🚀 Server [v2] ready at ${info?.url}`);
}

main().catch(e => console.error(e));
