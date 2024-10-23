import { useEffect, useState } from "react";

export const useFetchData = <T>(id: number, url: string) => {
  const [data, setData] = useState<T>();
  useEffect(() => {
    (async () => {
      const response = await fetch(`${url}/${id}`);
      if (response.ok) {
        const data = await response.json();
        if (data) setData(data);
      }
    })();
  }, [id, url]);
  return [data];
};
