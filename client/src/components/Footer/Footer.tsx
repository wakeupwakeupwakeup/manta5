
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
                            <a>
                                <img src={"/icons/instagram.svg"} alt={"instagram"}/>
                            </a>
                            <a>
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
                    <p className={"text-[9px] lg:text-[13px] leading-5"}>
                        WaterWay brand is owned by WaterWay Co., LTD.
                    </p>
                </div>
                <div className={"hidden lg:flex flex-col justify-between text-white nav"}>
                    <a className={"uppercase"} href={"#"}>Buy mantas</a>
                    <a className={"uppercase"} href={"#"}>Test-ride and trainings</a>
                    <a className={"uppercase"} href={"#"}>About</a>
                </div>
            </div>
        </div>
    );
};

export default Footer;
