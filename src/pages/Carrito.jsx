import Button from 'react-bootstrap/Button';
import PizzasContext from '../contexts/PizzaContext';
import { useContext } from "react";

const Carrito = () => {
    const { AddToChart, chart,Decrement,Increment } = useContext(PizzasContext)

    let precio = 0;
    let cant = 0;
    let total=0;
    chart.forEach(element => {
        precio = element.price;
        cant = element.count;
        total += precio*cant;
    });
    console.log(total);
    return (
        <div >
            <h5>Detalle del pedido</h5>
            {chart.map((chart, idx) => {
                return (
                    
                        <div key={idx} className='container row d-flex border border-danger gap-2 text-light'>
                            <div className='col-2'> <img className='imgpizza' src={chart.img} alt="" /></div>
                            <div className='col-2 text-capitalize'> {chart.name}</div>
                            <div className='col-2 offset-lg-4'>{`$${new Intl.NumberFormat().format(chart.price)}`}</div>
                            <Button type='submit' variant="primary" size='sm'
                                className='col-auto bg-danger'
                                onClick={(e) => Increment(chart.count-1)}>
                                +
                            </Button>
                            {chart.count}
                            <Button type='submit' variant="primary" size='sm'
                                className='col-auto bg-danger'
                                onClick={(e) => Decrement(chart.count-1)}>
                                -
                            </Button>
                        </div>
                    
                )
            }
            )}
            <div className='col offset-lg-7 text-light'>
            {`Total: $${new Intl.NumberFormat().format(total)}`}
            </div>
        </div>
    )
}
export default Carrito;