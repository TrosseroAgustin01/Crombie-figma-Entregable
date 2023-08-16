import { useEffect, useState } from "react"

/* type Planes = {
    vectorUrl: string,
    planType: string,
    imgUrl: string,
    comments: string[]
    price: string
} */

export default function PruebaCard() {
    const [data, setData] = useState<[]>()
    

    useEffect(() => {
        fetch("https://6xrb5goi1l.execute-api.us-east-1.amazonaws.com/api/subscription")
            .then((response) => response.json())
            .then((res) => setData(res))
            /* .then(() => console.log(data)) */
            .catch(() => console.log("Error while trying to catch data"))
    }, [])

    if (!data || data.length < 0){
        return <img className="" src="/img/loader.gif" alt="gif" />
    }else{
        return (
            <div className="container ">
            <div className="row d-flex justify-content-around ">
            <div className="box-hov card mx-2 my-2 d-flex rounded-3  " style={{ width: '20rem' }}>
                <img src="/img/Free.png" alt="Free" className="rounded mx-auto d-block mt-5 " />
                <div className="card-body align-self-center mt-5">
                    <h3 className="card-title text-center mb-5">
                        {data[0].title}
                    </h3>
                    {
                        data[0].benefits.map((e,i) => (
                            <div className="row mb-2 mt-3">
                                <div className="col-md-1 mx-auto me-3">
                                    <img src="/img/checked_190411.png" alt="checkbox" />
                                </div>
                                <div className="col-md-10 md-3">
                                    <p key={i}>{e}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
                {
                    typeof (data[0].price) === "string"? <h3 className="text-center"><strong>{data[0].price}</strong></h3> : <h3 className="text-center"> {data[0].price}<strong>Free</strong></h3>
                }
                <div className="d-grid gap-2 col-6 mx-auto">
                    <button className="btn rounded-5 btn-lg btn-outline-danger mt-5 mb-5">Select</button>
                </div>
            </div>
            <div className="box-hov card mx-2 my-2 d-flex rounded-3  " style={{ width: '20rem' }}>
                <img src="/img/Standard.png" alt="Standard" className="rounded mx-auto d-block mt-5 " />
                <div className="card-body align-self-center mt-5">
                    <h3 className="card-title text-center mb-5">
                        {data[1].title}
                    </h3>
                    {
                        data[1].benefits.map((e,i) => (
                            <div className="row mb-2 mt-3">
                                <div className="col-md-1 mx-auto me-3">
                                    <img src="/img/checked_190411.png" alt="checkbox" />
                                </div>
                                <div className="col-md-10 md-3">
                                    <p key={i}>{e}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
                {
                    typeof (data[1].price) === "string"? <h3 className="text-center"><strong>{data[1].price}</strong></h3> : <h3 className="text-center"> {String(data[1].price)}<strong> {(data[1].currency)}</strong></h3>
                }
                <div className="d-grid gap-2 col-6 mx-auto">
                    <button className="btn rounded-5 btn-lg btn-outline-danger mt-5 mb-5">Select</button>
                </div>
            </div>
            <div className="box-hov card mx-2 my-2 d-flex rounded-3  " style={{ width: '20rem' }}>
                <img src="/img/Premium.png" alt="Premium" className="rounded mx-auto d-block mt-5 " />
                <div className="card-body align-self-center mt-5">
                    <h3 className="card-title text-center mb-5">
                        {data[2].title}
                    </h3>
                    {
                        data[2].benefits.map((e,i) => (
                            <div className="row mb-2 mt-3">
                                <div className="col-md-1 mx-auto me-3">
                                    <img src="/img/checked_190411.png" alt="checkbox" />
                                </div>
                                <div className="col-md-10 md-3">
                                    <p key={i}>{e}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
                {
                    typeof (data[2].price) === "string"? <h3 className="text-center"><strong>{data[2].price}</strong></h3> : <h3 className="text-center"> {String(data[2].price)}<strong> {(data[2].currency)}</strong></h3>
                }
                <div className="d-grid gap-2 col-6 mx-auto">
                    <button className="btn rounded-5 btn-lg btn-outline-danger mt-5 mb-5">Select</button>
                </div>
            </div>
            </div>
            </div>
        )
    }

    
}