import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
// import WebSocket from 'websocket';
import WebSocket from 'ws';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const convertFileToUrl = (file: File) => URL.createObjectURL(file);
