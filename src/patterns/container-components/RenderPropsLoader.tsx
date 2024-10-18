import { useEffect, useState } from 'react';
import type { IAuthor } from '../../types';

const AuthorInfo = ({ author }: { author?: IAuthor }) => {
    // to avoid empty props
    const { name } = author || {};
    return author ? <>Name: {name ?? 'no name'}</> : <>Loading...</>;
};

const RenderPropsLoader = <T,>({
    getData,
    render,
}: {
    getData: () => Promise<object>;
    render: (resource: T) => JSX.Element;
}) => {
    const [resource, setResource] = useState<T>();

    // load data
    useEffect(() => {
        (async () => {
            const data = (await getData()) as T;
            if (data) setResource(data);
        })(); // self invoked function
    }, [getData]);

    return render(resource!);
};

export default function RenderPropsLoaderExample() {
    return (
        <RenderPropsLoader
            getData={async () => {
                const response = await fetch(`http://localhost:4000/users/3`);
                if (response.ok) {
                    return response.json();
                } else {
                    return null;
                }
            }}
            render={(resource: IAuthor) => <AuthorInfo author={resource} />}
        />
    );
}