import {useForm, Controller, FieldValues, Control} from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import React, {useCallback, useEffect, useState} from "react";
import axios from "axios";
import {useGoogleReCaptcha} from 'react-google-recaptcha-v3'

const schema = yup.object().shape({
    firstName: yup.string().required('First name is required'),
    lastName: yup.string().required('Last name is required'),
    phoneNumber: yup.string().required('Phone number is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
})

const inputs = {
    firstName: {
        label: "First Name",
        index: "firstName",
        type: "string"
    },
    LastName: {
        label: "Last Name",
        index: "lastName",
        type: "string"
    },
    phoneNumber: {
        label: "Phone Number",
        index: "phoneNumber",
        type: "tel"
    },
    email: {
        label: "E-mail",
        index: "email",
        type: "email"
    },
}

interface IInputsProps {
    fields: {
        [key: string]: {
            label: string,
            index: string,
            type: string
        }
    },
    control: Control<FieldValues>,
}

function Inputs({fields, control}: IInputsProps) {
    return (
        <div className={"grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-5 mb-2 lg:mb-8"}>
            {
                Object.keys(fields).map((fieldName) => (
                    <div key={fieldName}>
                        <Controller
                            name={fields[fieldName].index}
                            control={control}
                            render={({field}) =>
                                <input
                                    placeholder={fields[fieldName].label}
                                    {...field}
                                    className={"text-[12px] p-2 lg:p-4 border w-full lg:text-lg"}
                                    type={fields[fieldName].type}
                                />}
                        />
                    </div>
                ))
            }
        </div>
    )
}

export function ContactForm() {
    const { control, handleSubmit} = useForm({
        resolver: yupResolver(schema),
    })

    // reCAPTCHA
    const { executeRecaptcha } = useGoogleReCaptcha()
    const [captchaToken, setCaptchaToken] = useState<string | null>(null)
    const handleReCaptchaVerify = useCallback(async () => {
        if (!executeRecaptcha) {
            console.log('Execute recaptcha not yet available')
            return null
        }

        const token = await executeRecaptcha('submit')
        setCaptchaToken(token)
    }, [executeRecaptcha]);

    useEffect(() => {
        handleReCaptchaVerify()
    }, [handleReCaptchaVerify]);

    const onSubmit = useCallback(async (data: FieldValues) => {
            try {
                if (captchaToken !== null) {
                    console.log(data)
                    const html = `
                        <body>
                            <h3>Контакты:</h3>
                            <ul>
                                <li>Телефон: ${data.phoneNumber}</li>
                                <li>Почта: ${data.email}</li>
                            </ul>
                        </body>
                    `
                    const res = await axios.post(import.meta.env.VITE_API_URL+`/email/send`, {
                        html: html,
                        subject: "Buy Manta5",
                        text: `${data.firstName} ${data.lastName} оставил заявку на аренду Manta5`,
                    }, {
                        headers: {
                            'Content-Type': 'application/json',
                            Authorization: "bearer" + import.meta.env.VITE_API_TOKEN
                        }
                    })
                } else {
                    console.log("NO TOKEN")
                }
            } catch (error) {
                console.log(error)
            }
    }, [captchaToken])

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault()
                handleSubmit(onSubmit)(e)
            }}
            className={"max-w-[544px] mx-auto"}
        >
            <div>
                <Inputs fields={inputs} control={control}/>
                <button
                    type={"submit"}
                    className={"text-[12px] w-full text-white bg-red-600 py-2 lg:text-xl lg:py-6"}
                >
                    Send
                </button>
                {/*<ReCAPTCHA*/}
                {/*    sitekey={import.meta.env.VITE_SITE_KEY}*/}
                {/*    // ref={captchaRef}*/}
                {/*    onChange={handleCaptcha}*/}
                {/*/>*/}
            </div>
        </form>
    );
}