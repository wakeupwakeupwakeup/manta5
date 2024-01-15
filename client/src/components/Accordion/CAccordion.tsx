import React, {useState} from "react";
import {
    Accordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemHeading,
    AccordionItemPanel
} from "react-accessible-accordion";
import {ID} from "react-accessible-accordion/dist/types/components/ItemContext";
import {Fade} from "react-awesome-reveal";


interface IQuestion {
    id: number;
    question: string;
    answer: string;
}

export interface IAccordion {
    id: string;
    attributes: {
        title: string;
        question: IQuestion[];
    };
}

interface IComponentProps {
    data: IAccordion[]
}



export function CAccordion({ data }: IComponentProps) {
    const [expandedItems, setExpandedItems] = useState<ID[]>([])
    return (
        <div className={"flex flex-col gap-16"}>
            {
                data && data.map((accordion) => (
                    <div key={accordion.id}>
                        <h2 className={"text-red-600"}>{accordion.attributes.title}</h2>
                        <Accordion
                            allowZeroExpanded={true}
                            allowMultipleExpanded={true}
                            onChange={(expandedItems) => setExpandedItems(expandedItems)}
                        >
                            {
                                accordion.attributes.question.map((item) => (
                                    <AccordionItem
                                        key={item.id}
                                        uuid={item.id}
                                        className={"p-4 border-b "}
                                    >
                                        <AccordionItemHeading>
                                            <AccordionItemButton className={"flex gap-7 items-center mb-7"}>
                                                <div>
                                                    {
                                                        expandedItems.includes(item.id) ?
                                                            <img src={"patterns/list_minus.svg"} alt={"minus"}
                                                                 role="presentation"/> :
                                                            <img src={"patterns/list_plus.svg"} alt={"plus"}
                                                                 role="presentation"/>
                                                    }
                                                </div>
                                                <h4 className={"mb-0"}>
                                                    {item.question}
                                                </h4>
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel className={"ml-12"}>
                                            <Fade triggerOnce={true}>
                                                <p className={"text-base text-gray-500"}>{item.answer}</p>
                                            </Fade>
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                ))
                            }
                        </Accordion>
                    </div>
                ))
            }
        </div>
    )
}