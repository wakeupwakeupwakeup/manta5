import './Header.css'
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div className={"bg-neutral-900 px-4 py-2 lg:py-3 lg:px-40 "}>
            <div className={"flex justify-between items-center"}>
                <div className={""}>
                    <Link to={"/"}>
                        <img src={"/logo.png"} alt={"Logo"}/>
                    </Link>
                </div>
                <div className={"hidden lg:flex gap-24 text-white nav"}>
                    <div>
                        <Link to={"/buy"} className={"uppercase"}>Buy mantas</Link>
                    </div>
                    <div>
                        <Link to={"/testdrive"} className={"uppercase"}>Test-ride and trainings</Link>
                    </div>
                    <div>
                        <a className={"uppercase"} href={"#"}>About</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
