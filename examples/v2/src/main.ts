import { createServer } from './server';


async function main() {
  const server = createServer();
  
  const info = await server?.listen();
  
  console.log(`🚀 Server ready at ${info?.url}`);
}

main().catch(e => console.error(e));
