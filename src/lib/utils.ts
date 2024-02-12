import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
// import WebSocket from 'websocket';
import WebSocket from 'ws';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function websocketConnection(){
  const ws = new WebSocket('ws://localhost:8080')
  return ws
}

export function websocketServer(){
  const wss = new WebSocket.Server({port:5173})
  return wss
}