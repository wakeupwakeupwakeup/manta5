import Header from "@/components/Header/Header.tsx";
import Footer from "@/components/Footer/Footer.tsx";

type Props = {
    children: JSX.Element
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
