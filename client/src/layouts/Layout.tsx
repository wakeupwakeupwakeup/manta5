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
            <Header/>
            {children}
            <div className="elfsight-app-2a29a2fe-2584-4c65-8893-7e251ed4bf54" data-elfsight-app-lazy></div>
            <Footer/>
            <Analytics/>
        </>
    );
};

export default Layout;
