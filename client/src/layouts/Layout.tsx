import Header from "@/components/Header/Header.tsx";
import Footer from "@/components/Footer/Footer.tsx";
import { ReactElement } from "react";
import {Analytics} from "@vercel/analytics/react";

type Props = {
    children: ReactElement
}
const Layout = ({children}: Props) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
            <Analytics />
        </>
    );
};

export default Layout;
