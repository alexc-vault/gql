export type Logger = (message: string, ...rest: any) => void;

export function createLogger(id: string, userId?: number) {
  return (message: string, ...rest: any) => {
    const userPart = userId ? userId : 'unknown';
    const restPart = '\n' + JSON.stringify(rest);
    
    console.log(`${id} (${userPart}): ${message}${restPart}`)
  }
}
