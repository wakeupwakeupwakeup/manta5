import Header from "@/components/Header/Header.tsx";
import Footer from "@/components/Footer/Footer.tsx";
import React from "react";

type Props = {
    children: React.Component
}
const Layout = ({children}: Props) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
};

export default Layout;
