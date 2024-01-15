import React, {useEffect, useState} from "react";
import Layout from "@/layouts/Layout.tsx";
// import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import {Link} from "react-router-dom";
import ImageGallery from "react-image-gallery"
import { Slide, Fade } from "react-awesome-reveal";
import {Title} from "@/components/Title/Title.tsx";
import axios from "axios";
import qs from "qs"

const galleryQuery = qs.stringify(
    {
        populate: ['bottomGallery, topGallery']
    },
    {
        encodeValuesOnly: true
    }
)

interface IFormatedPhoto {
    original: string,
    thumbnail: string
}

interface IPhotoAttributes {
    attributes: {
        url: string
    }
}

interface IGalleryData {
    topGallery: {
        data: IPhotoAttributes[]
    };
    bottomGallery: {
        data: IPhotoAttributes[]
    };
}

export const Home = React.memo(() => {
    const [data, setData] = useState<IGalleryData>(null)
    const [products, setProducts] = useState(null)
    const [topGallery, setTopGallery] = useState<IFormatedPhoto[]>([])
    const [bottomGallery, setBottomGallery] = useState<IFormatedPhoto[]>([])


    useEffect(() => {
        async function fetchData() {
            try {
                const res = await axios.get(import.meta.env.VITE_API_URL+`/main-gallery?${galleryQuery}`, {
                    headers: {
                        Authorization: "bearer" + import.meta.env.VITE_API_TOKEN,
                    }
                })
                setData(res.data.data.attributes)
            } catch (e) {
                console.log(e)
            }
        }
        fetchData()
    }, []);

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await axios.get(import.meta.env.VITE_API_URL+`/products?populate=*`, {
                    headers: {
                        Authorization: "bearer" + import.meta.env.VITE_API_TOKEN,
                    }
                })
                console.log(res)
                setProducts(res.data.data)
            } catch (e) {
                console.log(e)
            }
        }
        fetchData()
    }, []);

    useEffect(() => {
        if (data) {
            const formattedTopGallery = data.topGallery.data.map((photo) => ({
                original: photo.attributes.url,
                thumbnail: photo.attributes.url,
            }));

            const formattedBottomGallery = data.bottomGallery.data.map((photo) => ({
                original: photo.attributes.url,
                thumbnail: photo.attributes.url,
            }));

            // Используйте formattedData[0] для первого элемента и formattedData[1] для второго
            setTopGallery(formattedTopGallery);
            setBottomGallery(formattedBottomGallery); // Замените "AnotherGallery" на имя вашего второго массива, если это необходимо
        }
    }, [data]);

    return (
        <Layout>
            <main>
                <section className={"flex flex-col justify-end items-center bg-main bg-cover bg-center lg:bg-150% lg:bg-[0%_25%] h-[calc(100vh-78px)] bg-no-repeat text-white pb-28"}>
                    <div className={"hidden xl:flex items-center h-full w-full text-center"}>
                        <Fade triggerOnce={true} >
                            <h1>
                                <span
                                    className={"text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[128px] 2xl: uppercase"}>WaterWay</span>
                                <br/>
                                <span
                                    className={"text-[12px] sm:text-2xl md:text-3xl lg:text-2xl xl:text-3xl font-medium text-red-500 uppercase"}>official dealer Manta5 in Thailand</span>
                            </h1>
                        </Fade>
                    </div>
                    <div className={"button shrink self"}>
                        <a href={"#testdrive"} className={"bg-red-600 uppercase py-5 px-8"}>Try your Manta5</a>
                    </div>
                </section>
                <section className={"flex flex-col items-center"}>
                    <div className={"content flex flex-col"}>
                        <Title title={"What is Manta5?"} subtitle={"Our history"} />
                        <div className={"flex flex-col gap-9 mb-12 lg:mb-20 lg:gap-14 text-center"}>
                            <Slide triggerOnce={true}>
                                <p>
                                    Manta5 exists because of cycling enthusiast and water lover Guy Howard-Willis.
                                    A tinkerer and entrepreneur at heart, Guy’s passion for the outdoors led him to
                                    co-found
                                    New Zealand’s largest multi-sport retailer Torpedo7. After a successful sale of
                                    Torpedo7
                                    Guy
                                    leapt right into his next venture – to create new world sport.
                                </p>
                                <p>
                                    The hydrofoiling bike concept literally came to Guy’s mind in a dream – a dream
                                    where
                                    he pushed off from his holiday home jetty and rode a bicycle-type product that
                                    brought
                                    him
                                    the same feeling and freedom as his road bike. He cruised out into the bay before
                                    being
                                    greeted by a pod of dolphins which swam alongside him as he rode.
                                </p>
                                <p>
                                    He woke up but the dream stuck with him and he started the Manta5 journey.
                                    The original design brief presented no easy feat. Just as a high-performance
                                    bicycle,
                                    Guy envisioned a concept that was lightweight, fast, agile, easy to transport and
                                    assemble.
                                    On top of this, there was no settling for any bulky buoyancy or hulls.
                                </p>
                            </Slide>
                        </div>
                    </div>
                    <div>
                        <ImageGallery
                            items={topGallery}
                            autoPlay={true}
                            showNav={false}
                            showFullscreenButton={false}
                            showPlayButton={false}
                            lazyLoad={true}
                        />
                    </div>
                </section>
                <section className={"flex flex-col items-center bg-[#212121] text-white"}>
                    <div className={"content"}>
                        <Title title={"What is the uniqueness?"} subtitle={"Our advantages"} unmark={true}/>
                        <div className={"grid grid-cols-1 grid-rows-2 gap-10 lg:grid-cols-2"}>
                            <div>
                                <Slide triggerOnce={true}>
                                    <Fade triggerOnce={true}>
                                        <h3>
                                            Innovative
                                        </h3>
                                    </Fade>
                                </Slide>
                                <Slide triggerOnce={true}>
                                    <p className={"font-light"}>
                                        Explore water like never before with the Manta5 SL3, where unique
                                        technology,
                                        a powerful motor, and a robust battery come together to deliver unmatched
                                        stability
                                        and thrilling speed. Innovation meets efficiency in every ride.
                                    </p>
                                </Slide>
                            </div>
                            <div>
                                <Slide triggerOnce={true}>
                                    <Fade triggerOnce={true}>
                                        <h3>
                                            Fun
                                        </h3>
                                    </Fade>
                                </Slide>
                                <Slide triggerOnce={true}>
                                    <p className={"font-light"}>
                                        Manta5 SL3 introduces a new era of sport — an aquatic adventure where you
                                        seamlessly
                                        transition from intense training to a leisurely water cruise.
                                    </p>
                                </Slide>
                            </div>
                            <div>
                                <Slide triggerOnce={true}>
                                    <Fade triggerOnce={true}>
                                        <h3>
                                            Zero Emissions
                                        </h3>
                                    </Fade>
                                </Slide>
                                <Slide triggerOnce={true}>
                                    <p className={"font-light"}>
                                        Ride the Manta5 SL3 and be at peace with the planet. This eco-friendly transport
                                        makes
                                        no compromise on performance while ensuring you leave only ripples behind.
                                    </p>
                                </Slide>
                            </div>
                            <div>
                                <Slide triggerOnce={true}>
                                    <Fade triggerOnce={true}>
                                        <h3>
                                            Quiet
                                        </h3>
                                    </Fade>
                                </Slide>
                                <Slide triggerOnce={true}>
                                    <p className={"font-light"}>
                                        Experience the pure serenity of the sea with Manta5 SL3's silent electric motor
                                        and
                                        noiseless pedaling. Glide through the water and enjoy the clean maritime air
                                        without
                                        disturbing the peaceful soundscape around you
                                    </p>
                                </Slide>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={"flex flex-col items-center"}>
                    <div className={"content"}>
                        <Title title={"Buy manta5"} subtitle={"Your waterway"} unmark={true} />
                        <div className={"flex flex-col gap-16 lg:flex-row"}>
                            {
                                products && products.map((item, index) => (
                                    <Slide key={index} triggerOnce={true} direction={index === 1 ? "right" : "left"}>
                                        <div className={"flex flex-col gap-4 items-center"}>
                                            <div>
                                                <img src={item.attributes.photo.data.attributes.url} alt={item.attributes.name}/>
                                            </div>
                                            <span className={"uppercase font-bold text-[15px] lg:text-3xl"}>
                                                {item.attributes.name}
                                            </span>
                                            <Link to={"/buy"} className={"text-[12px] lg:text-lg font-semibold bg-red-600 py-5 px-8 text-white"}>
                                                Buy your Manta5 in Thailand
                                            </Link>
                                        </div>
                                    </Slide>
                                ))
                            }
                        </div>
                    </div>
                </section>
                <section className={"flex justify-start bg-section bg-cover bg-center bg-no-repeat text-white py-32"} id={"testdrive"}>
                        <div className={"flex flex-col gap-1 lg:gap-5 max-w-2xl"}>
                            <Slide triggerOnce={true}>
                                <span className={"subtitle tracking-[4px]"}>
                                    Test-Ride and trainings
                                </span>
                                <h2 className={"mb-0"}>
                                    Join Our Training and <br/>Test-Drive Experience!
                                </h2>
                                <p className={"font-normal"}>
                                    Are you ready to dive into the future of water sports? WaterWay invites you to join our
                                    exclusive training sessions and test-drive the revolutionary Manta5 hydrofoil bikes.
                                    Experience the unique sensation of gliding over water with these cutting-edge machines.
                                </p>
                                <div className={"mt-8"}>
                                    <Link to={"/testdrive"} className={"text-[9px] lg:text-base font-semibold bg-red-600 py-3 px-8 text-white"}>
                                        Try it yourself!
                                    </Link>
                                </div>
                            </Slide>
                        </div>
                </section>
                <section className={"overflow-x-hidden px-0 py-8 lg:py-40 "}>
                    <div>
                        <ImageGallery
                            items={bottomGallery}
                            autoPlay={true}
                            showNav={false}
                            showFullscreenButton={false}
                            showPlayButton={false}
                            lazyLoad={true}
                        />
                    </div>
                </section>
            </main>
        </Layout>
    );
})
