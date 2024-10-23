import { useState } from 'react';

type TUser = {
    name: string;
    age: number;
};

const TypeUseStateHook = () => {
    // inference typing for simple types
    const [first] = useState(false);
    const [user] = useState<TUser | null>(null);

    return (
        <>
            <div>First: {first}</div>
            <div>User: {`${user ?? 'null'}`}</div>
        </>
    );
};

export default TypeUseStateHook;
