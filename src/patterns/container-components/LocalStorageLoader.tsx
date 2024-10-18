import { useEffect, useState } from "react";

const LocalStorageLoader =({
  getData,
  render,
}: {
  getData: () => string | null;
  render: (resource: string) => JSX.Element;
}) => {
  const [resource, setResource] = useState<string>('');
  // load data
  useEffect(() => {
    const data = getData();
    if (data) setResource(data);
  }, [getData]);

  return render(resource);
};

export default function LocalStorageLoaderExample() {
  return (
    <LocalStorageLoader
      getData={() => {
        return localStorage.getItem("test");
      }}
      render={(msg: string ) => <h1>{msg}</h1>}
    />
  );
}
