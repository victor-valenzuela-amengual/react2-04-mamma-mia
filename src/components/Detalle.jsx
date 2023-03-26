import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import PizzasContext from '../contexts/PizzaContext';
import Button from 'react-bootstrap/Button';

const Detalle = () => {
    const { pizzas,AddToChart } = useContext(PizzasContext)
    const { id } = useParams();

    const pizzaDetail = pizzas.find((pizza) => pizza.id === id);
    return (
        <div className='container row align-items-center border border-danger gap-2 mt-2'>

            <div className='col'>
                {<img src={pizzaDetail.img} alt={pizzaDetail.name} />}
            </div>
            <div className='col'>
                <h1 className='text-capitalize'>{pizzaDetail.name}</h1>
                <p>{pizzaDetail.desc}</p>
                <h5>Ingredientes</h5>
                <ul>
                    {pizzaDetail.ingredients.map((element, i) => (
                        <li key={i}>{element}</li>
                    ))}
                </ul>
                <div>
                    <h2>Precio: ${new Intl.NumberFormat().format(pizzaDetail.price)}
                        <span className='ms-3'>  <Button type='submit' variant="primary" 
                        className='btn-sm bg-danger'  onClick={(e)=>AddToChart(pizzaDetail)}>
                            <i className="fa-solid fa-cart-shopping"></i> Añadir
                        </Button>
                        </span>
                    </h2>
                </div>
            </div>
        </div>
    )
}
export default Detalle