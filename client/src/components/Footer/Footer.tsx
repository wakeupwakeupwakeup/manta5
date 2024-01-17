import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <div className={"flex flex-col bg-neutral-900 text-white px-0 lg:px-40 py-14"}>
            <div className={"flex flex-col items-center gap-5 justify-between align-center lg:flex-row"}>
                <div className={"flex justify-start"}>
                    <div className={"flex flex-col justify-center items-center gap-4"}>
                        <div>
                            <img src="/logo.png" alt={"Logo"}/>
                        </div>
                        <div className={"flex gap-2"}>
                            <a href={"https://www.instagram.com/manta5.nz/?hl=en"} target={"_blank"}>
                                <img src={"/icons/instagram.svg"} alt={"instagram"}/>
                            </a>
                            <a href={"https://www.facebook.com/Manta5NZ/"} target={"_blank"}>
                                <img src={"/icons/facebook.svg"} alt={"facebook"}/>
                            </a>
                        </div>
                    </div>
                </div>
                <div className={"flex flex-col justify-center text-center gap-1"}>
                    <p className={"text-[9px] lg:text-[13px] leading-5"}>
                        ©️ All rights reserved.
                    </p>
                    <p className={"text-[9px] lg:text-[13px] leading-5"}>
                        The Manta5 brand is owned by Manta5 LP
                    </p>
                </div>
                <div className={"hidden lg:flex flex-col justify-between text-white nav"}>
                    <Link to={"/buy"} className={"uppercase link_animation"}>Buy mantas</Link>
                    <Link to={"/testdrive"} className={"uppercase link_animation"}>Test-ride and trainings</Link>
                </div>
            </div>
        </div>
    );
};

export default Footer;
