import Layout from "@/layouts/Layout.tsx";
import {Title} from "@/components/Title/Title.tsx";
import {TestDriveForm} from "@/components/Form/TestDriveForm.tsx";
import Slider from "react-slick";
import {Slide} from "react-awesome-reveal";
import {useState} from "react";

const sliderSettings = {
    className: "center",
    centerMode: true,
    dots: true,
    arrows: false,
    infinite: true,
    slide: 'img',
    autoplay: true,
    variableWidth: true,
    centerPadding: '20px',
    slidesToShow: 1,
    adaptiveHeight: true,
    speed: 1000,
    cssEase: "linear",
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                dots: false
            }
        }
    ]
}

export function TestDrive() {
    return (
        <Layout>
            <>
                <section className={"bg-testDrive bg-cover bg-[15%_0%] py-48 px-16 text-white text-center"}>
                    <h1 className={"leading-6"}>
                        Join Our Training and Test-Drive
                    </h1>
                </section>
                <section>
                    <div className={"px-5"}>
                        <Title title={"Embark on an Unforgettable Adventure with Manta5!"} subtitle={"Experience"}/>
                        <Slide triggerOnce={true}>
                            <div className={"text-center mb-12"}>
                                <p>
                                    Are you ready to dive into the future of water sports? WaterWay invites you to join
                                    our
                                    exclusive training sessions and test-drive the revolutionary Manta5 hydrofoil
                                    e-bikes.
                                    Experience the unique sensation of gliding over water with these cutting-edge
                                    machines.
                                </p>
                            </div>
                        </Slide>
                        <video muted={true} autoPlay={true} loop>
                            <source
                                src={"videos/Y2meta.app-Birdwatching on a Hydrofoil SL3 _  Manta5 Hydrofoil Bikes-(1080p50).mp4"}/>
                        </video>
                    </div>
                </section>
                <section className={"bg-testDriveSection bg-cover text-white py-8 lg:py-40"}>
                    <div className={"flex flex-col items-center text-center gap-16"}>
                        <h2 className={"mb-0 lg:mb-9"}>
                            Why Join Us?
                        </h2>
                        <div className={"grid grid-cols-1 lg:grid-cols-3 gap-14"}>
                            <div className={"flex flex-col items-center gap-3 grow"}>
                                <div className={"flex gap-2 items-center"}>
                                    <div>
                                        <img className={"w-[14px] lg:w-[31px]"} src={"/patterns/sm_pattern.svg"}
                                             alt={"background"}/>
                                    </div>
                                    <h3 className={"text-white w-fit whitespace-nowrap mb-0"}>
                                        Expert Guidance
                                    </h3>
                                </div>
                                <p>
                                    Our professional instructors will guide you through the basics of hydrofoil
                                    biking, ensuring a safe and enjoyable experience.
                                </p>
                            </div>
                            <div className={"flex flex-col items-center gap-3 grow"}>
                                <div className={"flex gap-2 items-center"}>
                                    <div>
                                        <img className={"w-[14px] lg:w-[31px]"} src={"/patterns/sm_pattern.svg"}
                                             alt={"background"}/>
                                    </div>
                                    <h3 className={"text-white w-fit whitespace-nowrap mb-0"}>
                                        Hands-On Experience
                                    </h3>
                                </div>
                                <p>
                                    Get a real feel of Manta5's capabilities with our hands-on test-drive sessions.
                                </p>
                            </div>
                            <div className={"flex flex-col items-center gap-3 grow"}>
                                <div className={"flex gap-2 items-center"}>
                                    <div>
                                        <img className={"w-[14px] lg:w-[31px]"} src={"/patterns/sm_pattern.svg"}
                                             alt={"background"}/>
                                    </div>
                                    <h3 className={"text-white w-fit whitespace-nowrap mb-0"}>
                                        Fun and Learning Combined
                                    </h3>
                                </div>
                                <p>
                                    Fun and Learning Combined: Whether you're a beginner or an experienced rider, our
                                    program offers a perfect blend of fun and skill enhancement.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                {/*<section>*/}
                {/*    <CGoogleMap />*/}
                {/*</section>*/}
                <section className={"flex justify-between items-center gap-16 bg-[#F8F9FA]"}>
                    <div className={"max-w-[544px]"}>
                        <p className={"mb-10 font-medium"}>
                            <span className={"text-red-500 font-medium"}>Book Your Spot Today! </span>
                            Limited slots available! Sign up now to reserve your place in this
                            extraordinary adventure. Just fill out our simple registration form, and we’ll get you set
                            up for an experience like no other!
                        </p>
                        <TestDriveForm />
                    </div>
                    <div className={"flex flex-col gap-4"}>
                        <div>
                            <h3>Submit Your Inquiry and Embark on a Unique Water Adventure!</h3>
                            <p>
                                Upon receiving your inquiry, our friendly and experienced manager will contact you to
                                finalize all details and schedule a convenient time for you. We are committed to
                                ensuring
                                a memorable and comfortable experience with Manta5 - the electric hydrofoil bikes.
                            </p>
                        </div>
                        <div>
                            <h4>Rental Rates:</h4>
                            <ul className={"list-disc"}>
                                <li>15 minutes: 2000 THB</li>
                                <li>30 minutes: 2500 THB</li>
                                <li>1 hour: 3000 THB</li>
                                <li>Full-day rental with an instructor: Price upon request.</li>
                            </ul>
                        </div>
                        <div>
                            <h4>Included in Your Rental:</h4>
                            <ul className={"list-disc"}>
                                <li>Choose between Manta5 SL3 or SL3 Pro models</li>
                                <li>Safety life jackets</li>
                                <li>Insurance for worry-free enjoyment</li>
                                <li>A professional instructor for optimal safety and experience</li>
                            </ul>
                        </div>
                        <p>Start your Manta5 adventure now!</p>
                    </div>
                </section>
                <section className={"px-0"}>
                    <Title title={"Photos from our trainings"} subtitle={""}/>
                    <Slider {...sliderSettings}>
                        <img src={"/photos/photo_1.jpg"} alt={"photo"} className={"inline-block px-0 lg:px-2"}/>
                        <img src={"/photos/photo_2.jpg"} alt={"photo"} className={"inline-block px-0 lg:px-2"}/>
                        <img src={"/photos/photo_3.jpg"} alt={"photo"} className={"inline-block px-0 lg:px-2"}/>
                    </Slider>
                </section>
            </>
        </Layout>
    );
}