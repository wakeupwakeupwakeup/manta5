import Layout from "@/layouts/Layout.tsx";
import {ContactForm} from "@/components/Form/ContactForm.tsx";
import {Title} from "@/components/Title/Title.tsx";
import React, {useEffect, useState} from "react"
import {Fade, Slide} from "react-awesome-reveal";
import {CAccordion} from "@/components/Accordion/CAccordion.tsx";
import {IAccordion} from "@/components/Accordion/CAccordion.tsx"
import axios from "axios";
import { Products } from "@/components/Products/Products";

export function BuyPage() {
    const [faq, setFaq] = useState<IAccordion[]>([])

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await axios.get(import.meta.env.VITE_API_URL+"/faqs?populate=*", {
                    headers: {
                        Authorization: "bearer" + import.meta.env.VITE_API_TOKEN,
                    }
                })
                setFaq(res.data.data)
            } catch (e) {
                console.log(e)
            }
        }

        fetchData()
    }, []);
    
    return (
        <Layout>
            <>
                <section className={"object-contain p-0"}>
                    {/*<img className={"object-contain"} src={"/backgrounds/manta_picture.png"} alt={"Manta picture"}/>*/}
                    <video autoPlay={true} loop muted preload={"auto"}>
                        <source src={"videos/Easy_launch_technology.mp4"} type={"video/mp4"}/>
                    </video>
                </section>
                <section className={"flex flex-col gap-10 lg:gap-32"}>
                    <Products />
                    {/*<Slide triggerOnce={true}>*/}
                    {/*    <div className={"flex flex-col gap-7 lg:flex-row lg:gap-10"}>*/}
                    {/*        <h3 className={"text-black font-bold text-center lg:hidden"}><span*/}
                    {/*            className={"text-red-600"}>Manta5 SL3</span> -*/}
                    {/*            The Gateway to Hydrofoiling*/}
                    {/*        </h3>*/}
                    {/*        <div className={"flex flex-col text-center lg:w-1/3"}>*/}
                    {/*            <img src={"/products/HYDROFOILER_SL3.png"} alt={"HYDROFOILER SL3"}/>*/}
                    {/*            <span className={"text-2xl font-semibold"}>99,999 THB</span>*/}
                    {/*        </div>*/}
                    {/*        <div className={"flex flex-col gap-2 lg:gap-8 lg:w-2/3"}>*/}
                    {/*            <h3 className={"hidden lg:block text-black font-bold"}><span*/}
                    {/*                className={"text-red-600"}>Manta5 SL3</span> -*/}
                    {/*                The Gateway to Hydrofoiling*/}
                    {/*            </h3>*/}
                    {/*            <ul className={"text-[9px] font-medium list-disc leading-5 lg:text-xl lg:leading-8"}>*/}
                    {/*                <li>Chassis: Orca White, offering a sleek and modern design.</li>*/}
                    {/*                <li>Battery: Light Hydropack 600, providing efficient power.</li>*/}
                    {/*                <li>Rear Foil: 'Learner' Fixed Chord 2.0 (FC2), suitable for all riders</li>*/}
                    {/*                <li>Ideal For: Everyone, from beginners to seasoned riders.</li>*/}
                    {/*                <li>Feature: A lightweight battery for ease of use and transportation.</li>*/}
                    {/*            </ul>*/}
                    {/*            <p className={"font-semibold"}>*/}
                    {/*                A perfect blend of style and function, the Manta5 SL3 offers an accessible entry*/}
                    {/*                into*/}
                    {/*                the*/}
                    {/*                world of hydrofoil biking.*/}
                    {/*            </p>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</Slide>*/}
                    {/*<Slide triggerOnce={true} direction={"right"}>*/}
                    {/*    <div className={"flex flex-col gap-7 lg:flex-row lg:gap-10"}>*/}
                    {/*        <h3 className={"text-black font-bold text-center lg:hidden"}><span*/}
                    {/*            className={"text-red-600"}>Manta5 SL3 Pro</span> - Advanced Hydrofoiling*/}
                    {/*        </h3>*/}
                    {/*        <div className={"flex flex-col text-center lg:w-1/3"}>*/}
                    {/*            <img src={"/products/HYDROFOILER_SL3_PRO.png"} alt={"HYDROFOILER SL3 PRO"}/>*/}
                    {/*            <span className={"text-2xl font-semibold"}>99,999 THB</span>*/}
                    {/*        </div>*/}
                    {/*        <div className={"flex flex-col gap-2 lg:gap-8 lg:w-2/3"}>*/}
                    {/*            <h3 className={"hidden lg:block text-black font-bold"}><span*/}
                    {/*                className={"text-red-600"}>Manta5 SL3 Pro</span> - Advanced Hydrofoiling</h3>*/}
                    {/*            <ul className={"text-[9px] font-medium list-disc leading-5 lg:text-xl lg:leading-8"}>*/}
                    {/*                <li>Chassis: Sharkskin, designed for performance.</li>*/}
                    {/*                <li>Battery: Long-range Hydropack 1000, for extended adventures.</li>*/}
                    {/*                <li>Rear Foil: Both Fixed Chord 2.0 (FC2) and ‘Super Lightweight’ High*/}
                    {/*                    Efficiency(HE2),*/}
                    {/*                    catering to confident starters and experts.*/}
                    {/*                </li>*/}
                    {/*                <li>Ideal For: Enthusiasts seeking longer range and advanced features.</li>*/}
                    {/*                <li>Feature: Offers the longest range among hydrofoil bikes.</li>*/}
                    {/*            </ul>*/}
                    {/*            <p className={"font-semibold"}>*/}
                    {/*                The Manta5 SL3 Pro is engineered for those who demand the best in hydrofoiling,*/}
                    {/*                combining*/}
                    {/*                advanced features with exceptional range.*/}
                    {/*            </p>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</Slide>*/}
                </section>
                <section className={"flex flex-col gap-16 bg-article bg-[63%_0%] lg:bg-center bg-cover text-white"}>
                    <div className={"flex flex-col max-w-[1170px]"}>
                        <Fade triggerOnce={true}>
                            <h2 className={"max-w-full"}>
                                <span className={"text-red-600"}>Feel the freedom</span> of innovation
                            </h2>
                        </Fade>
                        <div className={"flex flex-col gap-4 font-semibold"}>
                            <Slide triggerOnce={true}>
                                <p>
                                    The Manta5 SL3 reimagines the water experience with its cutting-edge hydrofoil
                                    technology.
                                    Its sleek design propels you across the surface with the grace of a marine creature
                                    and
                                    the
                                    precision of an elite athlete. Every element is engineered for effortless cruising,
                                    exceptional handling, and ultimate enjoyment.

                                </p>
                                <p>
                                    Seamless Transition to Water: No trailers, no hassle. The SL3's compact and
                                    lightweight
                                    build ensures you can transition from land to water in moments, offering
                                    unparalleled
                                    convenience.

                                </p>
                                <p>
                                    Engineered for Endurance: Made with advanced materials, this e-bike is your
                                    steadfast
                                    companion against saltwater and sun. It's crafted for performance, requiring only a
                                    simple
                                    rinse after your rides.

                                </p>
                                <p>
                                    Intuitive Riding Experience: The SL3's patented technology makes it accessible to
                                    all,
                                    promising an intuitive ride every time. It's not just about the journey; it's about
                                    the
                                    new
                                    realms of exploration that open up with every pedal.

                                </p>
                                <p>
                                    Unmatched Versatility: Whether you seek the solace of silent glides or the thrill of
                                    racing
                                    the wind, the SL3 adapts to your desires. It's an extension of your quest for
                                    freedom
                                    and
                                    fun on the water.

                                </p>
                                <p>
                                    Embark on an aquatic adventure like no other with the Manta5 SL3 – where innovation
                                    meets
                                    the tides, and every ride is a discovery.
                                </p>
                            </Slide>
                        </div>
                    </div>
                </section>
                <section className={"flex flex-col lg:flex-row gap-8"}>
                        <div className={"flex flex-col lg:w-1/2"}>
                            <Slide triggerOnce={true}>
                                <div className={"mb-14"}>
                                    <div className={"flex flex-col gap-4"}>
                                    <span className={"subtitle text-base tracking-[6px]"}>
                                        a whole new level of confidence
                                    </span>
                                        <h2 className={"mb-0 text-[40px]"}>Industry leading safety features</h2>
                                        <span className={"text-base"}>
                                        The SL3 is tougher and more reliable in the hardest of marine environments.
                                    </span>
                                    </div>
                                </div>
                                <div className={"flex lg:hidden"}>
                                    <Slide triggerOnce={true} direction={"right"}>
                                        <img src={"patterns/battery_pattern.png"} alt={"Battery"}/>
                                    </Slide>
                                </div>
                                <div className={"flex flex-col gap-12"}>
                                    <div>
                                        <h4>Hydropack batteries</h4>
                                        <p className={"text-base"}>
                                        Dual waterproof layers of protection with a transparent outer housing
                                            (pictured).<br/>
                                            Smart electrical protection for peace of mind while riding and charging
                                        </p>
                                    </div>
                                    <div>
                                        <h4>Ride display</h4>
                                        <p className={"text-base"}>
                                            Track vital ride metrics like battery life.
                                        </p>
                                    </div>
                                    <div>
                                        <h4>Propeller shroud</h4>
                                        <p className={"text-base"}>
                                            An added layer of protection around the propeller.
                                        </p>
                                    </div>
                                    <div>
                                        <h4>Tilt Sensors</h4>
                                        <p className={"text-base"}>
                                            Instantly cuts power to the propeller as soon as a fall is detected.
                                        </p>
                                    </div>
                                    <div>
                                        <h4>Easy Launch Technology</h4>
                                        <p className={"text-base"}>
                                            Easy to mount and incredibly stable once up and foiling.
                                        </p>
                                    </div>
                                </div>
                            </Slide>
                        </div>
                        <div className={"hidden lg:flex"}>
                            <Slide triggerOnce={true} direction={"right"}>
                                <img src={"patterns/battery_pattern.png"} alt={"Battery"}/>
                            </Slide>
                        </div>
                </section>
                <section className={"flex flex-col-reverse lg:flex-row-reverse bg-neutral-900 text-white gap-8"}>
                    <div className={"flex flex-col lg:w-1/2"}>
                        <Slide triggerOnce={true} direction={"right"}>
                            <div className={"mb-14"}>
                                <div className={"flex flex-col gap-4"}>
                                <span className={"subtitle text-base tracking-[6px]"}>
                                    Easy transport
                                </span>
                                    <h2 className={"mb-0 text-[40px]"}>Modular design</h2>
                                    <span className={"text-base"}>
                                    Toolless quick connection points for easy assembly.<br/>
                                    Modular design for compact transport and handling.
                                </span>
                                </div>
                            </div>
                            <div className={"flex flex-col gap-12"}>
                                <div>
                                    <h4>Shipping</h4>
                                    <p className={"text-base"}>
                                        Dual waterproof layers of protection with a transparent outer housing
                                        (pictured).<br/>
                                        Smart electrical protection for peace of mind while riding and charging
                                    </p>
                                </div>
                                <div>
                                    <h4>In-vehicle</h4>
                                    <p className={"text-base"}>
                                        Track vital ride metrics like battery life.
                                    </p>
                                </div>
                                <div>
                                    <h4>To the water</h4>
                                    <p className={"text-base"}>
                                        An added layer of protection around the propeller.
                                    </p>
                                </div>
                                <div>
                                    <h4>Storage</h4>
                                    <p className={"text-base"}>
                                        Instantly cuts power to the propeller as soon as a fall is detected.
                                    </p>
                                </div>
                            </div>
                        </Slide>
                    </div>
                    <div>
                        <Slide triggerOnce={true}>
                            <img src={"patterns/SL3_modular_transport.png"} alt={"SL3"}/>
                        </Slide>
                    </div>
                </section>
                <section className={"bg-[#F0F2F2]"}>
                    <Title title={"WaterWay - official dealer Manta5 in Thailand"} subtitle={"ORDER YOUR SL3"}/>
                    <ContactForm/>
                </section>
                <section>
                    <CAccordion data={faq} />
                </section>
            </>
        </Layout>
    );
}