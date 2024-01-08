import './Header.css'
import {Link} from "react-router-dom";
import {useState} from "react";
import {Fade, Slide} from "react-awesome-reveal";

const Header = () => {
    const [isNavOpen, setIsNavOpen] = useState<boolean>(false)
    return (
        <div>
            <div className={"bg-neutral-900 px-4 py-2 lg:py-3 lg:px-40 w-full"}>
                <div className={"flex justify-between items-center"}>
                    <div className={""}>
                        <Link to={"/"}>
                            <img src={"/logo.png"} alt={"Logo"}/>
                        </Link>
                    </div>
                    <div className={"hidden lg:flex gap-24 text-white nav"}>
                        <Link to={"/buy"} className={"uppercase"}>Buy mantas</Link>
                        <Link to={"/testdrive"} className={"uppercase"}>Test-ride and trainings</Link>
                    </div>
                    <div className={"md:hidden"} onClick={()=> setIsNavOpen(true)}>
                        <img src={"/icons/menu.svg"} alt={"Menu"}/>
                    </div>
                </div>
            </div>
            <div className={isNavOpen? null : "hidden"}>
                <Fade>
                    <div className={"flex flex-col absolute top-0 left-0 w-screen bg-black z-10 text-white px-4 py-4"}>
                        <div className={"self-end"} onClick={() => setIsNavOpen(false)}>
                            X
                        </div>
                        <div className={"flex flex-col gap-2"}>
                            <Link to={"/buy"} className={"uppercase"}>Buy mantas</Link>
                            <Link to={"/testdrive"} className={"uppercase"}>Test-ride and trainings</Link>
                        </div>
                    </div>
                </Fade>
            </div>
        </div>

    );
};

export default Header;
