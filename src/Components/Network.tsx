import "../css/NetWork.css"
/* import Carrousell from "./Carrousell"; */
/* import  { user1, user2, user3, user4, user5, user6 } from "./NetworkCard"; */

export default function NetWork() {
    /* const aux = [user1, user2, user3, user4, user5, user6]; */
    return (
        <section className="mt-5 bg-white rounded-3">
            <div className="text-center">
                <br />
                <h1 className="mt-3">
                    Huge Global Network of Fast VPN
                </h1>
                <p className="mt-4">
                    See <strong>LaslesVPN </strong>everywhere to make it easier for you when you move locations.
                </p>
            </div>
            <img className="img-fluid rounded mx-auto d-block border border-dark-subtle bg-dark mt-5 mb-5" src="/img/Huge Global.png" alt="image3" />
            <br />
            <img className="img-fluid rounded mx-auto d-block bg-dark mt-1 " src="/img/Sponsored.png" alt="sponsors" />
        </section>
    )
}