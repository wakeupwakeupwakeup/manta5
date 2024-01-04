import {useForm, Controller, FieldValues, Control} from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

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
    console.log(fields)
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
    const { control} = useForm({
        resolver: yupResolver(schema),
    })

    return (
        <form
            // onSubmit={handleSubmit(onSubmit)}
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
            </div>
        </form>
    );
}