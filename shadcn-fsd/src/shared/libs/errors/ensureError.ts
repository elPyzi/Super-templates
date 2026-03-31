import { AppError } from '@shared-model';
import axios, { HttpStatusCode } from 'axios';

export const ensureError = (value: unknown) => {
  if (value instanceof AppError) return value;

  if (axios.isAxiosError(value)) {
    const response = value.response;

    return new AppError({
      status: response?.status ?? HttpStatusCode.InternalServerError,
      message:
        typeof response?.data?.message === 'string'
          ? response.data.message
          : value.message,
      timestamp:
        typeof response?.data?.timestamp === 'string'
          ? response.data.timestamp
          : new Date().toISOString(),
      fields: response?.data?.fields,
      url: response?.data?.url,
    });
  }

  if (value instanceof Error) {
    return new AppError({
      status: HttpStatusCode.InternalServerError,
      message: value.message,
      timestamp: new Date().toISOString(),
    });
  }

  let stringified = '[Unable to stringify the thrown value]';
  try {
    stringified = JSON.stringify(value);
  } catch (error) {
    console.error(error);
  }

  return new AppError({
    status: HttpStatusCode.InternalServerError,
    message: stringified,
    timestamp: new Date().toISOString(),
  });
};
