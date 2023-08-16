import { useEffect, useState } from "react";
import "../css/Form.css";

interface Form {
    nombre: string;
    email: string;
    body: string;
    phone: string;
}

export default function Form() {
    const [data, setData] = useState<Form>({
        nombre: "",
        email: "",
        body: "",
        phone: "",
    });
    const [formCharged, setFormCharged] = useState(false);
    const [isPhoneValid, setIsPhoneValid] = useState(false);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setData({ ...data, [name]: value });
        if (name === "phone") {
            setIsPhoneValid(validatePhoneNumber(value));
        }
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // Aquí puedes hacer algo con los datos del formulario, como enviarlos a un servidor
        console.log(data);
    };

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
    }, [data,isPhoneValid])

    return (
            <form onSubmit={handleSubmit} className="container bg-white rounded-3 text-center">
                <h1>Contact Us!</h1>
                <div className="mb-3 mt-2">
                    <br></br>
                    <input required placeholder="Name" type="text" id="nombre" name="nombre" value={data.nombre} onChange={handleInputChange} className={data.nombre.length !== 0 && data.nombre ? "form-control mx-auto mt-4 border border-2 border-success" : "form-control mx-auto mt-4 border border-2 border-danger"} />
                </div>
                <div className="mb-3 mt-5">
                    <input required placeholder="Mail" type="email" id="email" name="email" value={data.email} onChange={handleInputChange} className={data.email.length !== 0 && data.email ? "form-control mx-auto border border-2 border-success" : "form-control mx-auto border border-2 border-danger"} />
                </div>
                <div className="mb-3 mt-5">
                    <textarea required placeholder="Write your Doubts" id="body" name="body" value={data.body} onChange={handleInputChange} className={data.body.length !== 0 && data.body ? "form-control mx-auto border border-2 border-success" : "form-control mx-auto border border-2 border-danger"}></textarea>
                </div>
                <div className="mb-3 mt-5">
                    <input required placeholder={data.phone.length === 0 && !data.phone  && !isPhoneValid ? "Plese write a right number": "let us know your phone number"} id="phone" name="phone" value={data.phone} onChange={handleInputChange} className={data.phone.length !== 0 && data.phone  && isPhoneValid ? "form-control mx-auto border border-2 border-success" : "form-control mx-auto border border-2 border-danger body-bg-danger"}>
                    </input>
                </div>
                <input id="submitButton" type="submit" value="Submit" className={formCharged ? "btn btn-lg btn-primary mt-4" : "btn btn-lg btn-grey mt-4"} disabled={formCharged ? false : true} />

            </form>
    )
}