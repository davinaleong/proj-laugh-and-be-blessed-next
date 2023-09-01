export interface HelpersInterface {
  LogFunction(name: string, params: any): void
}

export function LogFunction(name: String, params: any): void {
  console.log(`fn ${name}:(${JSON.stringify(params)})`)
}

export const Helpers = {
  LogFunction,
}
