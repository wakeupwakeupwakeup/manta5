import React from 'react';
import Layout from "@/layouts/Layout.tsx";

const Home = () => {
    return (
        <Layout>
            <main>
                <section className={"flex flex-col justify-end bg-main h-screen text-white text-center pb-16"}>
                    <div>
                        <a className={"uppercase bg-red-600 py-5 px-8"}>New sl3 features</a>
                    </div>
                </section>
                <section className={"flex flex-col items-center py-24"}>
                    <div className={"flex flex-col items-center gap-5 mb-12"}>
                        <div>
                            <img src={"/patterns/sm_pattern.svg"} />
                        </div>
                        <span className={"subtitle"}>
                            Our history
                        </span>
                        <h2>
                            What is Manta5?
                        </h2>
                    </div>
                    <div className={"flex flex-col max-w-[1376px] gap-16"}>
                        <p>
                            Manta5 exists because of cycling enthusiast and water lover Guy Howard-Willis.
                            A tinkerer and entrepreneur at heart, Guy’s passion for the outdoors led him to co-found
                            New Zealand’s largest multi-sport retailer Torpedo7. After a successful sale of Torpedo7 Guy
                            leapt right into his next venture – to create new world sport.
                        </p>
                        <p>
                            The hydrofoiling bike concept literally came to Guy’s mind in a dream – a dream where
                            he pushed off from his holiday home jetty and rode a bicycle-type product that brought him
                            the same feeling and freedom as his road bike. He cruised out into the bay before being
                            greeted by a pod of dolphins which swam alongside him as he rode.
                        </p>
                        <p>
                            He woke up but the dream stuck with him and he started the Manta5 journey.
                            The original design brief presented no easy feat. Just as a high-performance bicycle,
                            Guy envisioned a concept that was lightweight, fast, agile, easy to transport and assemble.
                            On top of this, there was no settling for any bulky buoyancy or hulls.
                        </p>
                    </div>
                </section>
                <section className={"flex flex-col items-center bg-gray-950 text-white py-20"}>
                    <div className={"flex flex-col items-center gap-5 mb-24"}>
                        <span className={"subtitle"}>
                            Our advantages
                        </span>
                        <h2>What is the uniqueness?</h2>
                    </div>
                    <div className={"grid grid-cols-2 grid-rows-2 max-w-[1376px] gap-y-12 gap-x-52"}>
                        <div>
                            <span className={"text-red-600"}>
                                Innovative
                            </span>
                            <p>
                                Innovation is what drives Manta5. Global innovation and developing new ways to do the
                                old things is what sets
                                Manta5 apart from the others
                            </p>
                        </div>
                        <div>
                            <span className={"text-red-600"}>
                                Fun
                            </span>
                            <p>
                                Manta5 has set out to give the world something new and exciting. We offer an exciting
                                opportunity for water-lovers from all backgrounds.
                            </p>
                        </div>
                        <div>
                            <span className={"text-red-600"}>
                                Zero Emissions
                            </span>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                            </p>
                        </div>
                        <div>
                            <span className={"text-red-600"}>
                                Quiet
                            </span>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                            </p>
                        </div>
                    </div>
                </section>
                <section className={"flex flex-col items-center py-28"}>
                    <div className={"flex flex-col items-center gap-5 mb-24"}>
                        <span className={"subtitle"}>
                            Your waterway
                        </span>
                        <h2>Buy Manta5</h2>
                    </div>
                    <div className={"flex "}>
                        <div className={"flex flex-col"}>
                            <div>
                                <img src={"/products/HYDROFOILER_SL3.png"} />
                            </div>
                            <span className={"uppercase"}>
                                Hydrofoiler sl3
                            </span>
                            <a>
                                Learn more
                            </a>
                        </div>
                        <div className={"flex flex-col"}>
                            <div>
                                <img src={"/products/HYDROFOILER_SL3_PRO.png"} />
                            </div>
                            <span className={"uppercase"}>
                                Hydrofoiler sl3
                            </span>
                            <a>
                                Learn more
                            </a>
                        </div>
                    </div>
                </section>
                <section className={"flex justify-start bg-section text-white px-36 py-40"}>
                    <div className={"max-w-2xl"}>
                        <span>
                            Test-Ride and trainings
                        </span>
                        <h3 className={""}>
                            Join our training and test-drive experience!
                        </h3>
                        <p>
                            Are you ready to dive into the future of water sports? WaterWay invites you to join our
                            exclusive training sessions and test-drive the revolutionary Manta5 hydrofoil bikes.
                            Experience the unique sensation of gliding over water with these cutting-edge machines.
                        </p>
                        <a>
                            Try it yourself!
                        </a>
                    </div>
                </section>
                <section>
                    <div>

                    </div>
                </section>
            </main>
        </Layout>
    );
};

export default Home;
