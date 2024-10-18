import React, { useEffect, useState } from "react";
import { IAuthor } from "../../types";

const CurrentUserInfo = ({ currentUser }: { currentUser?: IAuthor }) => {
  // to avoid empty props
  const { name } = currentUser || {};
  return currentUser ? <>Name: {name ?? "no name"}</> : <>Loading...</>;
};

const UserInfo = ({ user }: { user?: IAuthor }) => {
  // to avoid empty props
  const { name } = user || {};
  return user ? <>Name: {name ?? "no name"}</> : <>Loading...</>;
};

const DataSourceLoader = ({
  getData,
  resourceName,
  children,
}: {
  getData: () => Promise<object>;
  resourceName: string;
  children?: React.ReactNode;
}) => {
  const [resource, setResource] = useState<object>();

  // load data
  useEffect(() => {
    (async () => {
      const data = await getData();
      console.log(data);

      if (data) setResource(data);
    })(); // self invoked function
  }, [getData]);

  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          // add new conditional property to child
          return React.cloneElement(child, {
            // pass prop with external key (resourceName)
            [resourceName]: resource,
          });
        }
        return child;
      })}
    </>
  );
};

const DataSourceLoaderExample = () => {
  return (
    <>
      <h3>Current user</h3>
      <DataSourceLoader
        getData={async () => {
          // fetch data here, return Promise
          const response = await fetch("http://localhost:4000/currentUser");
          const data = await response.json();
          return data;
        }}
        resourceName="currentUser"
      >
        <CurrentUserInfo />
      </DataSourceLoader>
      <hr />
      <h3>Some user</h3>
      <DataSourceLoader
        getData={async () => {
          // fetch data here, return Promise
          const response = await fetch("http://localhost:4000/users/2");
          const data = await response.json();
          return data;
        }}
        resourceName="user"
      >
        <UserInfo />
      </DataSourceLoader>
    </>
  );
};

export default DataSourceLoaderExample;
