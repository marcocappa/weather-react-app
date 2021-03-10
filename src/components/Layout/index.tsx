import React from 'react';

const Layout = ({
    title,
    children,
}: {
    title: string;
    children: React.ReactNode;
}): JSX.Element => (
    <div>
        <h1>{title}</h1>
        {children}
    </div>
);

export default Layout;
