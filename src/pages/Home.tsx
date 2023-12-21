import Layout from "@/layouts/Layout.tsx";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import {Link} from "react-router-dom";
import ImageGallery from "react-image-gallery"

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

const images = [
    {
        original: "photos/Home/HOME_design_gallery_export_MAIN.jpg",
        thumbnail: "photos/Home/HOME_design_gallery_export_MAIN.jpg",
    },
    {
        original: "photos/Home/HOME_design_gallery_export_1.jpg",
        thumbnail: "photos/Home/HOME_design_gallery_export_1.jpg"
    },
    {
        original: "photos/Home/HOME_design_gallery_export_2.jpg",
        thumbnail: "photos/Home/HOME_design_gallery_export_2.jpg",
    },
    {
        original: "photos/Home/HOME_design_gallery_export_3.jpg",
        thumbnail: "photos/Home/HOME_design_gallery_export_3.jpg",
    },
    {
        original: "photos/Home/HOME_design_gallery_export_4.jpg",
        thumbnail: "photos/Home/HOME_design_gallery_export_4.jpg",
    },
    {
        original: "photos/Home/HOME_design_gallery_export_5.jpg",
        thumbnail: "photos/Home/HOME_design_gallery_export_5.jpg",
    }
]

export function Home() {

    return (
        <Layout>
            <main>
                <section className={"flex flex-col justify-end items-center bg-main bg-center bg-cover h-screen text-white pb-28"}>
                        <div className={"button shrink"}>
                            <a className={"bg-red-600 uppercase py-5 px-8"}>New sl3 features</a>
                        </div>
                </section>
                <section className={"flex flex-col items-center px-4 py-24"}>
                <div className={"content flex flex-col gap-16"}>
                        <div className={"flex flex-col items-center text-center gap-5 mb-12"}>
                            <div>
                                <img src={"/patterns/sm_pattern.svg"} alt={"background"}/>
                            </div>
                            <span className={"subtitle"}>
                            Our history
                            </span>
                            <h2>
                                What is Manta5?
                            </h2>
                        </div>
                        <div className={"flex flex-col gap-14 text-center"}>
                            <p>
                                Manta5 exists because of cycling enthusiast and water lover Guy Howard-Willis.
                                A tinkerer and entrepreneur at heart, Guy’s passion for the outdoors led him to co-found
                                New Zealand’s largest multi-sport retailer Torpedo7. After a successful sale of Torpedo7
                                Guy
                                leapt right into his next venture – to create new world sport.
                            </p>
                            <p>
                                The hydrofoiling bike concept literally came to Guy’s mind in a dream – a dream where
                                he pushed off from his holiday home jetty and rode a bicycle-type product that brought
                                him
                                the same feeling and freedom as his road bike. He cruised out into the bay before being
                                greeted by a pod of dolphins which swam alongside him as he rode.
                            </p>
                            <p>
                                He woke up but the dream stuck with him and he started the Manta5 journey.
                                The original design brief presented no easy feat. Just as a high-performance bicycle,
                                Guy envisioned a concept that was lightweight, fast, agile, easy to transport and
                                assemble.
                                On top of this, there was no settling for any bulky buoyancy or hulls.
                            </p>
                        </div>
                        <div>
                            <ImageGallery items={images} showNav={false} showFullscreenButton={false} showPlayButton={false} />
                        </div>
                    </div>
                </section>
                <section className={"flex flex-col items-center bg-gray-950 text-white px-4 py-32"}>
                    <div className={"content"}>
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
                                <p className={"text-xl leading-10 font-light"}>
                                    Explore water like never before with the Manta5 SL3, where unique technology,
                                    a powerful motor, and a robust battery come together to deliver unmatched stability
                                    and thrilling speed. Innovation meets efficiency in every ride.
                                </p>
                            </div>
                            <div>
                            <span className={"inline-block text-3xl font-semibold text-red-600 mb-2"}>
                                Fun
                            </span>
                                <p className={"text-xl leading-10 font-light"}>
                                    Manta5 SL3 introduces a new era of sport — an aquatic adventure where you seamlessly
                                    transition from intense training to a leisurely water cruise.
                                </p>
                            </div>
                            <div>
                            <span className={"inline-block text-3xl font-semibold text-red-600 mb-2"}>
                                Zero Emissions
                            </span>
                                <p className={"text-xl leading-10 font-light"}>
                                    Ride the Manta5 SL3 and be at peace with the planet. This eco-friendly transport
                                    makes
                                    no compromise on performance while ensuring you leave only ripples behind.
                                </p>
                            </div>
                            <div>
                            <span className={"inline-block text-3xl font-semibold text-red-600 mb-2"}>
                                Quiet
                            </span>
                                <p className={"text-xl leading-10 font-light"}>
                                    Experience the pure serenity of the sea with Manta5 SL3's silent electric motor and
                                    noiseless pedaling. Glide through the water and enjoy the clean maritime air without
                                    disturbing the peaceful soundscape around you
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={"flex flex-col items-center px-4 py-28"}>
                    <div className={"content"}>
                        <div className={"flex flex-col items-center text-center gap-5 mb-24"}>
                            <span className={"subtitle"}>
                                Your waterway
                            </span>
                            <h2>Buy Manta5</h2>
                        </div>
                        <div className={"flex flex-col gap-8 lg:flex-row"}>
                            <div className={"flex flex-col gap-4 items-center"}>
                                <div>
                                    <img src={"/products/HYDROFOILER_SL3.png"} alt={"HYDROFOILER SL3"}/>
                                </div>
                                <span className={"uppercase font-bold text-3xl"}>
                                    Hydrofoiler sl3
                                </span>
                                <Link to={"/buy"} className={"font-semibold bg-red-600 py-5 px-8 text-white"}>
                                    By your Manta5 in Thailand
                                </Link>
                            </div>
                            <div className={"flex flex-col gap-4 items-center"}>
                                <div>
                                    <img src={"/products/HYDROFOILER_SL3_PRO.png"} alt={"HYDROFOILER SL3 PRO"}/>
                                </div>
                                <span className={"uppercase font-bold text-3xl"}>
                                Hydrofoiler sl3 pro
                            </span>
                                <Link to={"/buy"} className={"font-semibold bg-red-600 py-5 px-8 text-white"}>
                                    By your Manta5 in Thailand
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
                <section
                    className={"flex justify-start bg-section bg-cover bg-center bg-no-repeat text-white px-4 lg:px-36 py-40"}>
                    <div className={"flex flex-col gap-5 max-w-2xl"}>
                        <span className={"subtitle"}>
                            Test-Ride and trainings
                        </span>
                        <h3 className={""}>
                            Join Our Training and <br/>Test-Drive Experience!
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
}
