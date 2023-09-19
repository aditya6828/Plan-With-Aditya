// import  Card from './components/Card'

import { Card } from "./Card";

// import data from './data';

function Tours({tours , removeTour}){
    return (
        <div className="container">
            <div>
                <h1 className="title">Plan with Aditya</h1>
            </div>
            <div className="cards">
                {
                    tours.map((tour) =>{
                        return <Card {...tour} removeTour = {removeTour}></Card>
                    })
                }
            </div>
           
        </div>
        
        
    );
}

export default Tours;