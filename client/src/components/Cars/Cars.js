import React, { useEffect } from "react";
import axios from "axios";
import carImage  from '../../assets/images/car-1.jpg';

function Cars() {
    let cars = [];
    useEffect(() => {
        axios.get('http://localhost:8080/cars')
        .then(response => {cars = response.data });
    }, []);
//     const cars = [{
//         id: 1,
//         name: 'Mercedez',
//         description: 'Best car you should think of',
//         price: '2,000/- rs/hour'
//     },
//     {
//         id: 2,
//         name: 'Maruti',
//         description: 'Best car you should think of',
//         price: '500/- rs/hour'
//     },
//     {
//         id: 3,
//         name: 'Hundai',
//         description: 'Best car you should think of',
//         price: '800/- rs/hour'
//     }
// ];
    return (
        <div className="row cars-container">
            {
                cars.map((car) => {
                    return (
                        <div key={car.id} className="card col-md-3 me-2">
                            <img src={carImage} className="card-img-top" alt="car" />
                            <div className="card-body">
                                <h5 className="card-title">{car.name}</h5>
                                <p className="card-text">{car.description}</p>
                                <p className="card-text">{`Price: ${car.price}`}</p>
                                <a href="#" className="btn btn-primary">Book Now</a>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Cars;