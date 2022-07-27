import { createServer } from './server';


async function main() {
  const server = createServer();
  
  const info = await server?.listen({ port: 4001 });
  
  console.log(`🚀 Server [v1] ready at ${info?.url}`);
}

main().catch(e => console.error(e));
