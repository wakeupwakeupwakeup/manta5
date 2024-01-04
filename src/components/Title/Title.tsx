import {Fade} from "react-awesome-reveal";

interface IComponentProps {
    title: string,
    subtitle: string,
    unmark?: boolean
}
export function Title(props: IComponentProps) {
    const { title, subtitle, unmark = false} = props;
    return (
        <Fade triggerOnce={true}>
            <div className={"flex flex-col gap-1 items-center text-center leading-1 lg:gap-5"}>
                {
                    unmark ?
                        null:
                        <div>
                            <img className={"w-[14px] lg:w-auto"} src={"/patterns/sm_pattern.svg"} alt={"background"}/>
                        </div>
                }
                <span className={"subtitle"}>
                    {subtitle}
                </span>
                <h2>
                {title}
                </h2>
            </div>
        </Fade>
    );
}