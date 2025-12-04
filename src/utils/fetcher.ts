export const fetcher = (...args: Parameters<typeof fetch>) =>
    fetch(...args).then((res) => res.json()) as Promise<any>;

export const fetchWithParams = (...args: Parameters<typeof fetch>) => {
    return fetch(...args).then((res) => res.json()) as Promise<any>;
};
