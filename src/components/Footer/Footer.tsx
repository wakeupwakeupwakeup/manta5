import React from 'react';

const Footer = () => {
    return (
        <div className={"flex flex-col bg-gray-950 text-white px-40 py-14"}>
            <div className={"flex justify-between"}>
                <div className={"flex justify-start"}>
                    <div className={"flex flex-col items-center gap-4"}>
                        <div>
                            <img src="/logo.png" alt={"Logo"}/>
                        </div>
                        <div className={"flex gap-2"}>
                            <a>
                                <img src={"/icons/instagram.svg"} alt={"instagram"} />
                            </a>
                            <a>
                                <img src={"/icons/facebook.svg"} alt={"facebook"} />
                            </a>
                        </div>
                    </div>
                </div>
                <div className={"flex gap-24 text-white nav"}>
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
                <div className={""}>

                </div>
            </div>
            <div className={"flex justify-center"}>
                <span>
                    Copyright 2023 Manta 5
                </span>
            </div>
        </div>
    );
};

export default Footer;
