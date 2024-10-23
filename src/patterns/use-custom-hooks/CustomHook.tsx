import { useFetchData } from "./useFetchData";
import { IJPUser } from "../../types";

const CustomHookExample = ({ id, url }: { id: number; url: string }) => {
  const [user] = useFetchData<IJPUser>(id, url);
  if (!user) return <>No data</>;
  return (
    <div>
      CustomHooksExample
      <div>
        <div>
          {user && user.name} : id: {user.id}
        </div>
        <div>
          {user.username} | company: {user.company.name}
        </div>
      </div>
    </div>
  );
};

export default CustomHookExample;
