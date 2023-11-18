import Layout from "@/layouts/Layout.tsx";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const Home = () => {
    const sliderSettings = {
        className: "center",
        centerMode: true,
        dots: true,
        arrows: false,
        infinite: true,
        slide: 'img',
        variableWidth: true,
        centerPadding: '20px',
        slidesToShow: 1,
        speed: 500,
    }
    return (
        <Layout>
            <main>
                <section className={"flex flex-col justify-end bg-main bg-center bg-cover h-screen text-white text-center pb-16"}>
                    <div>
                        <a className={"uppercase bg-red-600 py-5 px-8"}>New sl3 features</a>
                    </div>
                </section>
                <section className={"flex flex-col items-center px-4 py-24"}>
                    <div className={"flex flex-col items-center text-center gap-5 mb-12"}>
                        <div>
                            <img src={"/patterns/sm_pattern.svg"}  alt={"background"}/>
                        </div>
                        <span className={"subtitle"}>
                            Our history
                        </span>
                        <h2>
                            What is Manta5?
                        </h2>
                    </div>
                    <div className={"flex flex-col max-w-[1376px] gap-16 text-center"}>
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
                <section className={"flex flex-col items-center bg-gray-950 text-white px-4 py-20"}>
                    <div className={"flex flex-col items-center text-center gap-5 mb-24"}>
                        <span className={"subtitle"}>
                            Our advantages
                        </span>
                        <h2>What is the uniqueness?</h2>
                    </div>
                    <div className={"grid grid-cols-1 lg:grid-cols-2 grid-rows-2 max-w-[1376px] gap-y-12 gap-x-52"}>
                        <div>
                            <span className={"inline-block text-3xl font-semibold text-red-600 mb-2"}>
                                Innovative
                            </span>
                            <p>
                                Innovation is what drives Manta5. Global innovation and developing new ways to do the
                                old things is what sets
                                Manta5 apart from the others
                            </p>
                        </div>
                        <div>
                            <span className={"inline-block text-3xl font-semibold text-red-600 mb-2"}>
                                Fun
                            </span>
                            <p>
                                Manta5 has set out to give the world something new and exciting. We offer an exciting
                                opportunity for water-lovers from all backgrounds.
                            </p>
                        </div>
                        <div>
                            <span className={"inline-block text-3xl font-semibold text-red-600 mb-2"}>
                                Zero Emissions
                            </span>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                            </p>
                        </div>
                        <div>
                            <span className={"inline-block text-3xl font-semibold text-red-600 mb-2"}>
                                Quiet
                            </span>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                            </p>
                        </div>
                    </div>
                </section>
                <section className={"flex flex-col items-center px-4 py-28"}>
                    <div className={"flex flex-col items-center text-center gap-5 mb-24"}>
                        <span className={"subtitle"}>
                            Your waterway
                        </span>
                        <h2>Buy Manta5</h2>
                    </div>
                    <div className={"flex flex-col gap-8 lg:flex-row"}>
                        <div className={"flex flex-col gap-4 items-center"}>
                            <div>
                                <img src={"/products/HYDROFOILER_SL3.png"}  alt={"HYDROFOILER SL3"}/>
                            </div>
                            <span className={"uppercase font-bold text-3xl"}>
                                Hydrofoiler sl3
                            </span>
                            <a className={"font-semibold bg-red-600 py-5 px-8 text-white"}>
                                Learn more
                            </a>
                        </div>
                        <div className={"flex flex-col items-center"}>
                            <div>
                                <img src={"/products/HYDROFOILER_SL3_PRO.png"}  alt={"HYDROFOILER SL3 PRO"}/>
                            </div>
                            <span className={"uppercase font-bold text-3xl"}>
                                Hydrofoiler sl3
                            </span>
                            <a className={"font-semibold bg-red-600 py-5 px-8 text-white"}>
                                Learn more
                            </a>
                        </div>
                    </div>
                </section>
                <section className={"flex justify-start bg-section bg-cover bg-center bg-no-repeat text-white px-4 lg:px-36 py-40"}>
                    <div className={"flex flex-col gap-5 max-w-2xl"}>
                        <span className={"subtitle"}>
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
                        <div className={"mt-8"}>
                            <a className={"font-semibold bg-red-600 py-5 px-8 text-white"}>
                                Try it yourself!
                            </a>
                        </div>
                    </div>
                </section>
                <section className={"hidden overflow-x-hidden py-40"}>
                        <Slider {...sliderSettings}>
                                <img src={"/photos/photo_1.jpg"} alt={"photo"} className={"inline-block w-[945px] h-[525px]"}/>
                                <img src={"/photos/photo_2.jpg"} alt={"photo"} className={"inline-block w-[945px] h-[525px]"}/>
                                <img src={"/photos/photo_3.jpg"} alt={"photo"} className={"inline-block w-[945px] h-[525px]"}/>
                        </Slider>
                </section>
            </main>
        </Layout>
    );
};

export default Home;
