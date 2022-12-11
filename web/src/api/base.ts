interface IFetchParams<T> {
  path: string;
  method: string;
  body?: T;
  extractResponse?: boolean;
}

export const baseFetch = async <T>(options: IFetchParams<T>): Promise<any> => {
  const { path, method, body, extractResponse = true } = options;
  const response = await fetch('/api' + path, {
    method,
    headers: { 'Content-Type': 'application/json' },
    body: body ? JSON.stringify(body) : null,
  });
  if (extractResponse) {
    return response.json();
  }
};

export const get = async <T>(path: string): Promise<T> => {
  return baseFetch<void>({ path, method: 'GET' });
};

export const post = async <T>(path: string, item: T): Promise<T> => {
  return baseFetch<T>({ path, method: 'POST', body: item });
};

export const put = async <T>(path: string, item: T): Promise<T> => {
  return baseFetch<T>({ path, method: 'PUT', body: item });
};

export const del = async (path: string): Promise<void> => {
  return baseFetch<void>({ path, method: 'DELETE' });
};
