import { PropsWithChildren } from 'react';

function withPrtialHOComponent(
    Component: React.ElementType,
    partialProps?: object
) {
    return (props: object) => {
        return <Component {...props} {...partialProps} />;
    };
}

function Button({
    children,
    color = 'white',
    backgroundColor = 'blue',
    fontSize = '24px',
}: {
    text: string;
    color: string;
    backgroundColor: string;
    fontSize: string | undefined;
} & PropsWithChildren) {
    return (
        <button
            style={{
                color,
                backgroundColor,
                fontSize,
            }}
        >
            {children}
        </button>
    );
}

const Primary = withPrtialHOComponent(Button);
const RedButton = withPrtialHOComponent(Primary, {
    color: 'white',
    backgroundColor: 'red',
});
const SmallRedButton = withPrtialHOComponent(RedButton, { fontSize: '16px' });

const PartialComponent = () => {
    return (
        <>
            <Primary>Button</Primary>
            <RedButton>Red button</RedButton>
            <SmallRedButton>Small red</SmallRedButton>
        </>
    );
};

export default PartialComponent;
