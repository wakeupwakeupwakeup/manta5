import Layout from "@/layouts/Layout.tsx";
import {Title} from "@/components/Title/Title.tsx";
import {TestDriveForm} from "@/components/Form/TestDriveForm.tsx";
import {Slide} from "react-awesome-reveal";
import {useEffect, useState} from "react";
import axios from "axios";

interface IPricing {
    title: string,
    text: string,
    tagline: string,
    rentalRates: [
        {
            children: [
                {
                    children: [
                        {
                            text: string
                        }
                    ]
                }
            ]
        }
    ],
    includings: [
        {
            children: [
                {
                    children: [
                        {
                            text: string
                        }
                    ]
                }
            ]
        }
    ]

}
export function TestDrive() {
    const [pricing, setPricing] = useState<IPricing>()

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await axios.get(import.meta.env.VITE_API_URL+"/test-drive-information?populate=*", {
                    headers: {
                        Authorization: "bearer" + import.meta.env.VITE_API_TOKEN,
                    }
                })
                console.log(res.data.data.attributes)
                setPricing(res.data.data.attributes)
            } catch (e) {
                console.log(e)
            }
        }
        fetchData()
    }, []);

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
                <section className={"flex flex-col md:flex-row justify-between items-center gap-16 bg-[#F8F9FA]"}>
                    <div className={"max-w-[544px]"}>
                        <p className={"mb-10 font-medium"}>
                            <span className={"text-red-500 font-medium"}>Book Your Spot Today! </span>
                            Limited slots available! Sign up now to reserve your place in this
                            extraordinary adventure. Just fill out our simple registration form, and we’ll get you set
                            up for an experience like no other!
                        </p>
                        <TestDriveForm />
                    </div>
                    {
                        pricing? (
                            <div className={"flex flex-col gap-4"}>
                                <div>
                                    <h3>{pricing && pricing.title}</h3>
                                    <p>{pricing && pricing.text}</p>
                                </div>
                                <div>
                                    <h4>Rental Rates:</h4>
                                    <ul className={"list-disc"}>
                                        {
                                            pricing.rentalRates && pricing.rentalRates[0].children.map((item) => (
                                                <li>{item.children[0].text}</li>
                                            ))
                                        }
                                    </ul>
                                </div>
                                <div>
                                    <h4>Included in Your Rental:</h4>
                                    <ul className={"list-disc"}>
                                        {
                                            pricing.includings && pricing.includings[0].children.map((item) => (
                                                <li>{item.children[0].text}</li>
                                            ))
                                        }
                                    </ul>
                                </div>
                                <p>{pricing.tagline && pricing.tagline}</p>
                            </div>
                        ) : null
                    }
                </section>
                <section className={"px-0"}>
                    <Title title={"Photos from our trainings"} subtitle={""}/>
                </section>
            </>
        </Layout>
    );
}