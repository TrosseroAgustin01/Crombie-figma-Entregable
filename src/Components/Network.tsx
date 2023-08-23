import "../css/NetWork.css"
import Carrousell from "./Carrousell";

export default function NetWork() {

    /* const [comments, setComments] = useState<UsersComments[]>([])

    useEffect(() => {
        (async () => {
            const res = await axios<{ comments: Array<UsersComments> }>('https://dummyjson.com/comments');
            setComments(res.data.comments)
        })()    
    }, []) */
    
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
            {/* {comments.map((comment, index) => (
                <div>
                    {comment.}
                    {index}
                </div>
            ))} */}
            <img className="img-fluid rounded mx-auto d-block border border-dark-subtle bg-dark mt-5 mb-5" src="/img/Huge Global.png" alt="image3" />
            <br />
            <img className="img-fluid rounded mx-auto d-block bg-dark mt-1" src="/img/Sponsored.png" alt="sponsors" />
            <div className="text-center">
                <h1 className="mt-5 mb-4">Trusted by Thousands of Happy Customer</h1>
                <p className="mb-5">These are the stories of our customers who have joined us with great pleasure when using this crazy feature.</p>
                <Carrousell/>
            </div>
        </section>
    )
}