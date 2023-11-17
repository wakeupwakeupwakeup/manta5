import './Header.css'

const Header = () => {
    return (
        <div className={"flex justify-between px-40 py-6 bg-gray-950"}>
            <div className={""}>
                <img src={"/logo.png"} alt={"Logo"}/>
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
        </div>
    );
};

export default Header;
