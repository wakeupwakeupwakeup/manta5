import Header from "@/components/Header/Header.tsx";
import Footer from "@/components/Footer/Footer.tsx";
import { ReactElement } from "react";

type Props = {
    children: ReactElement
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
