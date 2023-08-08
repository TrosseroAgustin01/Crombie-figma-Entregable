/* import axios from "axios"; */

type UsersComments = {
    body: string,
    usernames: string,
    rating: number,
    img: string
}

/* const users = await axios.get('https://dummyjson.com/comments');

export let usuarios:UsersComments[];

await users.data.map((data:any) => {
    let usuario :UsersComments ={
        body: data.body,
        usernames:data.user.username,
        rating:(Math.floor(Math.random() * 5)),
        img:""
    } 
    usuarios.push(usuario);
}); */

export const user1: UsersComments = {
    body: "“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.",
    usernames: "Viezh Robert",
    rating: 4.5,
    img: "/img/faces/Ellipse 175.png"
}

export const user2: UsersComments = {
    body: "“I like it because I like to travel far and still can connect with high speed.”.",
    usernames: "Yessica Christy",
    rating: 4.5,
    img: "/img/faces/Ellipse 175(1).png"
};

export const user3: UsersComments = {
    body: "“This is very unusual for my business that currently requires a virtual private network that has high security.”.",
    usernames: "Kim Young Jou",
    rating: 4.5,
    img: "/img/faces/Ellipse 175(2).png"
};

export const user4: UsersComments = {
    body: "alternative text only for testing aplication",
    usernames: "mati-gol",
    rating: (Math.floor(Math.random() * 5)),
    img: "/img/faces/personal-profile_9366236.png"
};

export const user5: UsersComments = {
    body: "alternative text only for testing aplication",
    usernames: "fede-try",
    rating: (Math.floor(Math.random() * 5)),
    img: "/img/faces/professional_9722579(1).png"
};

export const user6: UsersComments = {
    body: "alternative text only for testing aplication",
    usernames: "gise-crack",
    rating: (Math.floor(Math.random() * 5)),
    img: "/img/faces/afro-hair_8734542.png"
};

export default function NetCard(props: UsersComments) {
    return (
        <div className="card-body rounded-3">
            <div className="d-flex align-items-center mb-2 mt-3">
                <img className="rounded me-2" src={props.img} alt="carita" />
                <h4>{props.usernames}</h4>
                <img className="ms-auto" src="/img/icons/ant-design_star-filled.png" alt="estrellita" />
                <p className="mb-0">{props.rating}</p>
            </div>
            <p className="mx-auto"><strong>{props.body}</strong></p>
        </div>
    )
}
 /* <div className="card-body rounded-3">
            <div className="row mb-2 mt-3">
                <div className="col-md-1 mx-auto md-3">
                    <img className=" rounded mx-auto d-block" src={props.img} alt="carita" />
                </div>
                <div className="col-md-10 md-3">
                    <h4 className="mx-auto">{props.usernames}</h4>
                </div>
            </div>
            <p className="mx-auto"><strong>{props.body}</strong></p>
            <div className="row mb-2 mt-3">
                <div className="col-md-1 mx-auto me-3">
                    <img src="/img/icons/ant-design_star-filled.png" alt="estrellita" />
                </div>
                <div className="col-md-10 md-3">
                    <p>{props.rating}</p>
                </div>
            </div>
            
        </div> */