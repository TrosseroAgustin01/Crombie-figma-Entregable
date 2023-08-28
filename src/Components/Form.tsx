import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import "../css/Form.css";
import {  useForm } from "react-hook-form";
const BASE_URL = "https://6xrb5goi1l.execute-api.us-east-1.amazonaws.com"

/* interface Form {
    nombre: string;
    email: string;
    body: string;
    phone: string;
} */
const schema = yup
    .object({
        message: yup
            .string()
            .min(10, "Please be more specific")
            .max(200, "Please be more specific").required(),
        fullname: yup.string().min(3).max(25).required(),
        phone: yup.string().min(9).max(15),
        email: yup.string().required().email("Please enter your email address"),
    })
    .required();

type Inputs = yup.InferType<typeof schema>

export default function Form() {

    const {
        register,
        handleSubmit,
        formState: {  isSubmitting },
        reset
    } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit/* : SubmitHandler<Inputs> */ = (data: Inputs) => {
        /* console.log(data);
        event.preventDefault(); */
        fetch(`${BASE_URL}/api/send-email`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((response) => {
                if (response.ok) {
                    console.log('Comentario enviado con éxito', response.json());
                } else {
                    console.error('Error al enviar el comentario');
                }
            })
            .catch((error) => {
                console.error('Error en la petición:', error);
            });
        reset();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="container bg-white rounded-3 text-center">
            <h1 className="pt-3">Contact Us!</h1>
            <div className="mb-3 mt-2">
                <br></br>
                <input placeholder="Tell us your name"   {...register("fullname")} className={/* errors.fullname?.message ? */ "form-control mx-auto mt-4 border border-2 border-success" /* : "form-control mx-auto mt-4 border border-2 border-danger" */} />
            </div>
            <div className="mb-3 mt-5">
                <input placeholder="Tell us your email adress"  {...register("email")} className={/* errors.email?.message ? */ "form-control mx-auto border border-2 border-success" /* : "form-control mx-auto border border-2 border-danger" */} />
            </div>
            <div className="mb-3 mt-5">
                <textarea placeholder="Tell us your doubts"  {...register("message")} className={/* errors.message?.message ? */ "form-control mx-auto border border-2 border-success" /* : "form-control mx-auto border border-2 border-danger" */}></textarea>
            </div>
            <div className="mb-3 mt-5">
                <input placeholder="Tell us your mobile number" {...register("phone")} className={/* errors.phone?.message ? */ "form-control mx-auto border border-2 border-success"/*  : "form-control mx-auto border border-2 border-danger body-bg-danger" */}>
                </input>
            </div>
            <button type="submit" disabled={isSubmitting} className="button-shadow2 btn  btn-lg btn-danger mt-5 mb-5">Send</button>
        </form>
    )
}
//  className={/* isSubmitting ? */ "btn btn-lg btn-primary mt-4" /* : "btn btn-lg btn-grey mt-4" */}
/* const [data, setData] = useState<Form>({
        nombre: "",
        email: "",
        body: "",
        phone: "",
    });
    const [formCharged, setFormCharged] = useState(false);
    const [isPhoneValid, setIsPhoneValid] = useState(false);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setData({ 
            ...data, 
            [name]: value 
        });
        if (name === "phone") {
            setIsPhoneValid(validatePhoneNumber(value));
        }
    }; */

/* const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    fetch(`${BASE_URL}/api/send-email`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then((response) => {
            if (response.ok) {
                console.log('Comentario enviado con éxito', response.json());
            } else {
                console.error('Error al enviar el comentario');
            }
        })
        .catch((error) => {
            console.error('Error en la petición:', error);
        });
    
    console.log(data);
}; */
/*
    const chargedInputs = () => {
        if (data.nombre.length > 0 && data.body.length > 0 && data.email.length > 0 && data.phone.length > 0) {
            setFormCharged(true)
        }
    }
 
    const validatePhoneNumber = (phone: string): boolean => {
        const phoneRegex = /^\d{10}$/; // Expresión regular para números de 10 dígitos
        return phoneRegex.test(phone);
    };
 
    useEffect(() => {
        chargedInputs()
    }, [data,isPhoneValid]) */