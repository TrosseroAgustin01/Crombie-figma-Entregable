type Comments = {
    comments: string[]
}

const freeComments: Comments = { comments: ["Unlimited Bandwitch", "Encrypted Connection", "No Traffic Logs", "Works on All Devices"] };
const standardComments: Comments = { comments: ["Unlimited Bandwitch", "Encrypted Connection", "yes Traffic Logs", "Works on All Devices", "Connect Anyware"] };
const premiunCommnets: Comments = { comments: ["Unlimited Bandwitch", "Encrypted Connection", "yes Traffic Logs", "Works on All Devices", "Connect Anyware", "Get New Features"] };

type Planes = {
    vectorUrl: string,
    planType: string,
    imgUrl: string,
    comments: string[]
    price: string
}

export const free: Planes = {
    vectorUrl: "/img/Free.png",
    planType: "Free",
    imgUrl: "/img/checked_190411.png",
    comments: freeComments.comments,
    price: "free"
}

export const standard: Planes = {
    vectorUrl: "/img/Standard.png",
    planType: "Standard",
    imgUrl: "/img/checked_190411.png",
    comments: standardComments.comments,
    price: "$9 / mo"
}

export const premiun: Planes = {
    vectorUrl: "/img/Premium.png",
    planType: "Premiun",
    imgUrl: "/img/checked_190411.png",
    comments: premiunCommnets.comments,
    price: "$12 / mo"
}

import "../css/CardsPlan.css"

export default function CardPlan(props: Planes) {
    return (
        <div className="box-hov card mx-2 my-2 d-flex rounded-3  " style={{ width: '20rem' }}>
            {/* <div> */}
            <img src={props.vectorUrl} alt={props.planType} className="rounded mx-auto d-block mt-5 " />
            {/* </div> */}
            <div className="card-body align-self-center mt-5">
                <h3 className="card-title text-center mb-5">{props.planType} Plan</h3>
                {props.comments.map((comment, index) => (
                    <div className="row mb-2 mt-3">
                        <div className="col-md-1 mx-auto me-3">
                            <img src="../../public/img/checked_190411.png" alt="checkbox" />
                        </div>
                        <div className="col-md-10 md-3">
                            <p key={index}>{comment}</p>
                        </div>
                    </div>

                ))}
            </div>
            {
                props.price.includes("$") ? <h3 className="text-center"><strong>{props.price.split("/")[0]}</strong> / {props.price.split("/")[1]}</h3> : <h3 className="text-center"><strong>Free</strong></h3>
            }
            <div className="d-grid gap-2 col-6 mx-auto">
                <button className="btn rounded-5 btn-lg btn-outline-danger mt-5 mb-5">Select</button>
            </div>
        </div>

    )
}