import NetCard from "./NetworkCard";
import { user1, user2, user3, user4, user5, user6 } from "./NetworkCard";

export default function Carrousell() {
    return (
        <div className="container mt-4">
            <div id="cardCarousel" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 mb-4">
                                <div className="card">
                                    <NetCard {...user1} />
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mb-4">
                                <div className="card">
                                    <NetCard {...user2} />
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mb-4">
                                <div className="card">
                                    <NetCard {...user3} />
                                </div>
                            </div>
                            {/* <!-- Repite este bloque de col- para cada card --> */}
                        </div>
                    </div>
                    {/* <!-- Repite este bloque de .carousel-item para mostrar más cards --> */}
                    <div className="carousel-item active">
                        <div className="carousel-item active">

                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#cardCarousel" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#cardCarousel" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    )
}
<div className="carousel-item active">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 mb-4">
                                <div className="card">
                                    <NetCard {...user2} />
                                </div>
                            </div>
                            {/* <!-- Repite este bloque de col- para cada card --> */}
                        </div>
                    </div>
                    {/* <!-- Repite este bloque de .carousel-item para mostrar más cards --> */}
                    <div className="carousel-item active">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 mb-4">
                                <div className="card">
                                    <NetCard {...user3} />
                                </div>
                            </div>
                            {/* <!-- Repite este bloque de col- para cada card --> */}
                        </div>
                    </div>
                    {/* <!-- Repite este bloque de .carousel-item para mostrar más cards --> */}