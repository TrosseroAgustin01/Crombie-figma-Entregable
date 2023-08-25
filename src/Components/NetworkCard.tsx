export type UsersComments = {
    testimonial: string,
    fullName: string,
    rating?: number,
    avatar: string
}

export default function NetCard(props: UsersComments) {
    
    return (
        <div className="card mb-5 bg-dark text-light me-3 ms-3" style={{ height: "170px" }}>
            <div className="card-body px-auto" style={{ height: "100%" }}>
                <div className="d-flex justify-content-between" style={{ height: "20%" }}>
                    <div className="d-flex flex-row align-items-center">
                        <img className="rounded" src={props.avatar} alt="carita" width="35" height="35" />
                        <h5 className="small mb-0 ms-2">{props.fullName}</h5>
                    </div>

                    <div className="d-flex flex-row align-items-center">
                        <p className="mb-0">{props.rating ? props.rating : (Math.floor(Math.random() * 3) + 2)}</p>
                        <img className="ms-auto" src="/img/icons/ant-design_star-filled.png" alt="estrellita" />
                    </div>
                </div>
                <p className="mx-auto mt-4" style={{ height: "80%" }}><strong>{props.testimonial}</strong></p>
            </div>
        </div>


    )
    {/* <div className="card mb-5 bg-dark text-light me-3 ms-3 d-flex align-items-center " style={{ height: "180px" }}  >
            <div className="card-body px-auto " >
                <div className="d-flex justify-content-between">
                    <div className="d-flex flex-row align-items-center">
                        <img className="rounded" src={props.avatar} alt="carita" width="35" height="35" />
                        <h5 className="small mb-0 ms-2">{props.fullName}</h5>
                    </div>

                    <div className="d-flex flex-row align-items-center">
                        <p className="mb-0">{props.rating ? props.rating : (Math.floor(Math.random() * 3) + 2)}</p>
                        <img className="ms-auto" src="/img/icons/ant-design_star-filled.png" alt="estrellita" />
                    </div>
                </div>
                <p className="mx-auto mt-4"><strong>{props.testimonial.length > 109 ? props.testimonial.substring(0,109).concat("...") : props.testimonial}</strong></p>
            </div>
        </div> */}
}