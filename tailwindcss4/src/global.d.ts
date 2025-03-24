export {};

declare global {
  interface ExtendableEvent extends Event {
    waitUntil(fn: Promise<any>): void;
  }

  interface FetchEvent extends Event {
    readonly request: Request;
    respondWith(response: Response | Promise<Response>): void;
  }
}
