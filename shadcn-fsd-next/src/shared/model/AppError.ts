import { HttpStatusCode, Method } from 'axios';

export type BackendError = {
  status: HttpStatusCode;
  message: string;
  timestamp: string | Date;
  fields?: { field: string; message: string; code: string }[];
  url?: string;
  method?: Method;
  code?: string;
};

export class AppError extends Error {
  public readonly status: HttpStatusCode;
  public readonly timestamp: string | Date;
  public readonly method?: Method;
  public readonly code?: string;
  public readonly fields?: { field: string; message: string; code: string }[];
  public readonly url?: string;

  constructor(payload: BackendError) {
    super(payload.message);
    this.name = 'AppError';
    this.status = payload.status;
    this.fields = payload.fields;
    this.timestamp = payload.timestamp;
    this.url = payload.url;
    this.method = payload.method;
    this.code = payload.code;

    Object.setPrototypeOf(this, AppError.prototype);
  }
}
