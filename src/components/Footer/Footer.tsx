const Footer = () => {
    return (
        <div className={"flex flex-col bg-gray-950 text-white px-0 lg:px-40 py-14"}>
            <div className={"flex justify-between"}>
                <div className={"flex justify-start"}>
                    <div className={"flex flex-col items-center gap-4"}>
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
                <div className={"flex flex-col text-center gap-2"}>
                    <p>
                        ©️ All rights reserved.
                    </p>
                    <p>
                        The Manta5 brand is owned by Manta5 LP
                    </p>
                    <p>
                        WaterWay brand is owned by WaterWay Co., LTD.
                    </p>
                </div>
                <div className={"hidden lg:flex flex-col text-white nav"}>
                    <div>
                        <a className={"uppercase"} href={"#"}>Buy mantas</a>
                    </div>
                    <div>
                        <a className={"uppercase"} href={"#"}>Test-ride and trainings</a>
                    </div>
                    <div>
                        <a className={"uppercase"} href={"#"}>About</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
