export type Logger = (message: string, ...rest: any) => void;

export function createLogger(id: string, userId?: string) {
  return (message: string, ...rest: any) => {
    const userPart = userId !== undefined ? userId : 'unknown';
    const restPart = rest.length ? '\n' + JSON.stringify(rest) : '';

    console.log(`${id} (${userPart}): ${message}${restPart}`)
  }
}
