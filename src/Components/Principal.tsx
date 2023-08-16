import "../css/Principal.css"
import "../../public/img/checked_190411.png"
/* import Plans from "./Plans" */
import PlanType from "./PlanType";
import 'bootstrap/dist/css/bootstrap.min.css';
import NetWork from "./Network";
import Form from "./Form";
import Subscription from "./Subcription";
import Net2 from "./Net2";
import Navbar from "./Navbar";

export default function Principal() {
    return (
        <div>
            <Navbar />
            <main className="container mt-5">
                <div className="row bg-white rounded-3 mb-4 ">
                    {/* Contenedor para el contenido */}
                    <div className="col-md-6">
                        <h1 className="mt-5">Want anything to be easy with LaslesVPN.</h1>
                        <p className="mt-5">Provide a network for all your needs with ease and fun using LaslesVPN discover interesting features from us.</p>
                        <div className="d-grid gap-2 col-6 mx-auto ms-5">
                            <button className="button-shadow btn btn-danger mt-5 mb-5">Get Started</button>
                        </div>
                    </div>
                    {/* Contenedor para la imagen */}
                    <div className="col-md-6 d-flex justify-content-center pb-5">
                        {/* <Image1/> */}
                        <img src="https://img.freepik.com/free-vector/hand-drawn-flat-design-vpn-illustration_23-2149255391.jpg?w=740&t=st=1691149178~exp=1691149778~hmac=a84fa1a3eaa31b855140844d419d242c22664757c5e555f6570bcaff3d81bc20" alt="Imagen" className="img1" />
                    </div>
                </div>
                <br />
                <div className="mt-5 container text-center rounded-4 bg-white mb-4">
                    <div className="row align-items-center">
                        <div className="col  border-end d-flex align-items-center justify-content-center">
                            <img src="/img/user_9606048.png" alt="users" className="me-2 mb-2" />
                            <div>
                                <p><strong className="me-2" >+90</strong></p>
                                <p>users</p>
                            </div>
                        </div>
                        <div className="col d-flex align-items-center justify-content-center">
                            <img src="/img/location.png" alt="location" className="me-2 mb-2" />
                            <div>
                                <p><strong className="me-2" >+30</strong></p>
                                <p>locations</p>
                            </div>
                        </div>
                        <div className="col border-start  d-flex align-items-center justify-content-center">
                            <img src="/img/storage.png" alt="server" className="me-2 mb-2" />
                            <div>
                                <p><strong className="me-2">+50</strong></p>
                                <p>servers</p>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <div className="row mt-5 bg-white rounded-3 mb-5">
                    {/* Contenedor para la imagen */}
                    <div className="col-md-6 mt-5">
                        <img
                            src="https://img.freepik.com/free-vector/hand-drawn-vpn-illustration_23-2149223768.jpg?t=st=1691149456~exp=1691150056~hmac=42b8235e04a49d4881707ddab0aef339a78dbed1df24424d0bdedaa97ceba5e2"
                            alt="Imagen2"
                            className="img2"
                        />
                    </div>
                    {/* Contenedor para el contenido */}
                    <div className="col-md-6">
                        <h1 className="mt-5">We Provide Many Features You Can Use</h1>
                        <p className="mt-5 mb-5">You can explore the features that we provide with fun and have their own functions each feature.</p>
                        <div className="row mb-4 mt-3">
                            <div className="col-md-1">
                                <img src="../../public/img/checked_190411.png" alt="checkbox" />
                            </div>
                            <div className="col-md-10">
                                <p>Powerful online protection.</p>
                            </div>
                        </div>
                        <div className="row mb-4">
                            <div className="col-md-1">
                                <img src="../../public/img/checked_190411.png" alt="checkbox" />
                            </div>
                            <div className="col-md-10">
                                <p>Internet without borders.</p>
                            </div>
                        </div>
                        <div className="row mb-4">
                            <div className="col-md-1">
                                <img src="../../public/img/checked_190411.png" alt="checkbox" />
                            </div>
                            <div className="col-md-10">
                                <p>Supercharged VPN</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-1">
                                <img src="../../public/img/checked_190411.png" alt="checkbox" />
                            </div>
                            <div className="col-md-10">
                                <p>No specific time limits.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <PlanType />
                <br />
                <NetWork />
                <br />
                <Net2 />
                <br />
                <Subscription />
                <br />
                <Form />
            </main>
        </div>
    )
}