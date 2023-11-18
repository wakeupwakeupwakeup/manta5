import './Header.css'

const Header = () => {
    return (
        <div className={"flex justify-between px-4 py-2 lg:px-40 lg:py-6 bg-gray-950"}>
            <div className={""}>
                <img src={"/logo.png"} alt={"Logo"}/>
            </div>
            <div className={"hidden lg:flex gap-24 text-white nav"}>
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
    );
};

export default Header;
