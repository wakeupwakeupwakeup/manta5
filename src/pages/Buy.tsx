import Layout from "@/layouts/Layout.tsx";

export function BuyPage() {
    return (
        <Layout>
            <>
                <section className={"object-contain p-0"}>
                    {/*<img className={"object-contain"} src={"/backgrounds/manta_picture.png"} alt={"Manta picture"}/>*/}
                    <video autoPlay={true} loop muted>
                        <source src={"videos/Easy_launch_technology.mp4"} type={"video/mp4"}/>
                    </video>
                </section>
                <section className={"flex flex-col gap-32"}>
                    <div className={"flex gap-12"}>
                        <div>
                            <img src={"/products/HYDROFOILER_SL3.png"}  alt={"HYDROFOILER SL3"}/>
                        </div>
                        <div className={"flex flex-col gap-8"}>
                            <h3><span className={"text-red-600"}>Manta5 SL3</span> - The Gateway to Hydrofoiling</h3>
                            <ul className={"list-disc"}>
                                <li>Chassis: Orca White, offering a sleek and modern design.</li>
                                <li>Battery: Light Hydropack 600, providing efficient power.</li>
                                <li>Rear Foil: 'Learner' Fixed Chord 2.0 (FC2), suitable for all riders</li>
                                <li>Ideal For: Everyone, from beginners to seasoned riders.</li>
                                <li>Feature: A lightweight battery for ease of use and transportation.</li>
                            </ul>
                            <p>
                                A perfect blend of style and function, the Manta5 SL3 offers an accessible entry into the
                                world of hydrofoil biking.
                            </p>
                        </div>
                    </div>
                    <div className={"flex gap-12"}>
                        <div>
                            <img src={"/products/HYDROFOILER_SL3_PRO.png"}  alt={"HYDROFOILER SL3 PRO"}/>
                        </div>
                        <div className={"flex flex-col gap-8"}>
                            <h3><span className={"text-red-600"}>Manta5 SL3 Pro</span> - Advanced Hydrofoiling</h3>
                            <ul className={"list-disc"}>
                                <li>Chassis: Sharkskin, designed for performance.</li>
                                <li>Battery: Long-range Hydropack 1000, for extended adventures.</li>
                                <li>Rear Foil: Both Fixed Chord 2.0 (FC2) and ‘Super Lightweight’ High Efficiency(HE2),
                                    catering to confident starters and experts.</li>
                                <li>Ideal For: Enthusiasts seeking longer range and advanced features.</li>
                                <li>Feature: Offers the longest range among hydrofoil bikes.</li>
                            </ul>
                            <p>
                                The Manta5 SL3 Pro is engineered for those who demand the best in hydrofoiling, combining
                                advanced features with exceptional range.
                            </p>
                        </div>
                    </div>
                </section>
                <section className={"flex flex-col gap-16 bg-article bg-center bg-cover text-white"}>
                    <div className={"flex flex-col gap-3 max-w-[1170px]"}>
                        <h2 className={"max-w-full"}>Feel the freedom of innovation</h2>
                        <p>
                            The Manta5 SL3 reimagines the water experience with its cutting-edge hydrofoil technology.
                            Its sleek design propels you across the surface with the grace of a marine creature and the
                            precision of an elite athlete. Every element is engineered for effortless cruising,
                            exceptional handling, and ultimate enjoyment.

                        </p>
                        <p>
                            Seamless Transition to Water: No trailers, no hassle. The SL3's compact and lightweight
                            build ensures you can transition from land to water in moments, offering unparalleled
                            convenience.

                        </p>
                        <p>
                            Engineered for Endurance: Made with advanced materials, this e-bike is your steadfast
                            companion against saltwater and sun. It's crafted for performance, requiring only a simple
                            rinse after your rides.

                        </p>
                        <p>
                            Intuitive Riding Experience: The SL3's patented technology makes it accessible to all,
                            promising an intuitive ride every time. It's not just about the journey; it's about the new
                            realms of exploration that open up with every pedal.

                        </p>
                        <p>
                            Unmatched Versatility: Whether you seek the solace of silent glides or the thrill of racing
                            the wind, the SL3 adapts to your desires. It's an extension of your quest for freedom and
                            fun on the water.

                        </p>
                        <p>
                            Embark on an aquatic adventure like no other with the Manta5 SL3 – where innovation meets
                            the tides, and every ride is a discovery.
                        </p>
                    </div>
                </section>
                <section className={"flex gap-8"}>
                    <div className={"w-1/2"}>
                        <div>
                            <div className={"flex flex-col gap-3"}>
                                <span className={"subtitle"}>
                                    a whole new level of confidence
                                </span>
                                <h2>Industry leading safety features</h2>
                                <p>
                                    The SL3 is tougher and more reliable in the hardest of marine environments.
                                </p>
                            </div>
                        </div>
                        <div>

                        </div>
                    </div>
                    <div>
                        <img src={"patterns/battery_pattern.png"} alt={"Battery"}/>
                    </div>
                </section>
            </>
        </Layout>
    );
}