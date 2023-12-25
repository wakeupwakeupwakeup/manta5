import {useForm, Controller, FieldValues, Control} from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const schema = yup.object().shape({
    firstName: yup.string().required('First name is required'),
    lastName: yup.string().required('Last name is required'),
    phoneNumber: yup.string().required('Phone number is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
    date: yup.date().required('Date is required'),
    time: yup.string().required('Time is required'),
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
    date: {
        label: "Date",
        index: "date",
        type: "date"
    },
    time: {
        label: "Time",
        index: "time",
        type: "time"
    }
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
        <div className={"grid grid-cols-2 gap-5 mb-8"}>
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
                                    className={"p-4 border w-full text-lg"}
                                    type={fields[fieldName].type}
                                />}
                        />
                    </div>
                ))
            }
        </div>
    )
}

export function Form() {
    const { control} = useForm({
        resolver: yupResolver(schema),
    })

    // const onSubmit = (data) => {
    //     console.log(data);
    //     // Добавьте здесь логику для отправки данных
    // }

    return (
        <form
            // onSubmit={handleSubmit(onSubmit)}
        >
            <div>
                <Inputs fields={inputs} control={control} />
                <button
                    type={"submit"}
                    className={"w-full text-white bg-red-600 py-6"}
                >
                    Let’s try Manta5
                </button>
            </div>
        </form>
    )
}