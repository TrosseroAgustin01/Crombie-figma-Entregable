import { useEffect, useState } from "react";
import NetCard, { UsersComments } from "./NetworkCard";
/* import { user1, user2, user3, user4, user5, user6 } from "./NetworkCard"; */
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
/* import axios from "axios"; */


export default function Carrousell() {
    /* const aux = [user1, user2, user3, user4, user5, user6] ; */

    const [comments, setComments] = useState<UsersComments[]>()

    useEffect(() => {
        fetch("https://6xrb5goi1l.execute-api.us-east-1.amazonaws.com/api/testimonial")
            .then((response) => response.json())
            .then((res) => setComments(res))
    }, [])

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };

    if (!comments || comments.length === 0) {
        return <img className="" src="/img/loader.gif" alt="gif" />
    } else {

        return (
            <div className=" justify-content-center">
                <Carousel
                    additionalTransfrom={0}
                    arrows
                    autoPlay
                    autoPlaySpeed={3000}
                    centerMode={false}
                    className="sliderContainer"
                    containerClass="container-whit-dots"
                    dotListClass=""
                    focusOnSelect={false}
                    infinite
                    itemClass=""
                    keyBoardControl
                    minimumTouchDrag={80}
                    renderButtonGroupOutside={false}
                    renderDotsOutside={false}
                    responsive={responsive}
                    showDots={true}
                    sliderClass=""
                    slidesToSlide={1}
                    swipeable
                >
                    {
                        comments.map((element, index) => (
                            <div className="">
                                <NetCard key={index} {...element} />
                            </div>
                        ))
                    }
                </Carousel>
            </div>

        )
    }
}
{/* <Carousel
        additionalTransfrom={0}
        arrows
        autoPlay
        autoPlaySpeed={3000}
        centerMode={false}
        className="sliderContainer"
        containerClass="container-whit-dots"
        dotListClass=""
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={responsive}
        showDots={true}
        sliderClass=""
        slidesToSlide={1}
        swipeable
>
        {
            comments.map((element,index) => (
                <div>
                    <NetCard key={index} {...element}/>
                </div>
            ))
        }
</Carousel> */}