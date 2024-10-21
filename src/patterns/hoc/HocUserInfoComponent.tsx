import React, { PropsWithChildren, useEffect, useState } from "react";
import { IJPUser } from "../../types";

const withLoadData = (Component: React.ElementType) => {
  return (props: { id: number } & PropsWithChildren) => {
    const [user, setUser] = useState<IJPUser>();
    const { id } = props;
    // load user by id
    useEffect(() => {
      (async () => {
        try {
          const response = await fetch(
            `https://jsonplaceholder.typicode.com/users/${id}`
          );
          if (response.ok) {
            const data = await response.json();
            setUser(data);
          }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
          console.log(error?.message);
        }
      })();
    }, [id]);

    return <Component {...props} user={user} />;
  };
};

const UserInfo = ({ user }: { user: IJPUser }) => {
  return user ? (
    <>
      <h3>{user.name}</h3>
      <div>
        {user.company.name} - {user.company.catchPhrase}
      </div>
    </>
  ) : (
    <>Loading...</>
  );
};

const UserInfoWrapper = withLoadData(UserInfo);

export default function HocUserInfoComponentExample() {
  return <UserInfoWrapper id={2} />;
}
