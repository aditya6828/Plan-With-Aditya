import { useState } from "react";
// import  Card from './components/Card'
// import data from './data';


export function Card({ id, image, info, price, name, removeTour }) {

    const [readmore, setReadmore] = useState(false);

    const description = readmore ? info : `${info.substring(0, 200)}....`
    //  `${info.substring(0,200)}....`;

    function readmoreHandler() {
        setReadmore(!readmore);
    }

    // function removeTour(id){

    // }
    return (
        <div className="card">
            <img src={image} alt="incript img" className="image"></img>
            <div className="tour-info">
                <div className="tour-details">
                    <h4 className="tour-price">{price}</h4>
                    <h4 className="tour-name">{name}</h4>
                </div>

                <div className="description">
                    {description}
                    <span className="read-more" onClick={readmoreHandler}>
                        {readmore ? `Show Less` : `Read More`}
                    </span>
                </div>
            </div>



            <button className="btn-red" onClick={() => removeTour(id)}>
                Not Intrested
            </button>
        </div>
    )


}

// export default Card;