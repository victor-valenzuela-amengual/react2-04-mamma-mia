import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import PizzasContext from '../contexts/PizzaContext';
import { useNavigate } from 'react-router-dom';
import { useState, useContext } from "react";

const Tarjeta = () => {
    const { pizzas,AddToChart } = useContext(PizzasContext)  
    const navigate = useNavigate();  

    return (
        // 
        <div className='container row align-items-center border border-danger gap-2'>
            {pizzas.map((pizza, idx) => {
                return (
                    <Card key={idx} style={{ width: '18rem' }} className="mx-auto p-0 m-0">
                        <Card.Img variant="top" src={pizza.img} />
                        <Card.Body className='bg-color'>
                            <Card.Title className='text-capitalize'>{pizza.name}</Card.Title>
                            
                                <ul>
                                    {pizza.ingredients.map((element, i) => (
                                        <li key={i}>{element}</li>
                                    ))}
                                </ul>                                                           
                            <h5 className='text-center'>{`$${new Intl.NumberFormat().format(pizza.price)}`}</h5>
                            <div className='d-flex'>
                                <Button type='submit' id={pizza.id} variant="primary" className='col-5 ms-3 btn-sm bg-primary'
                                onClick={()=>navigate(`/detalle/${pizza.id}`)}>
                                    <i className="fa-solid fa-pizza-slice"></i> Ver más
                                </Button>
                                <Button type='submit' variant="primary" 
                                className='col-5 ms-2 btn-sm bg-danger'
                                onClick={(e)=>AddToChart(pizza)}>
                                <i className="fa-solid fa-cart-shopping"></i> Añadir
                                </Button>
                            </div>
                            
                        </Card.Body>
                    </Card>
                )
            }
            )}

        </div>
    );
}

export default Tarjeta;