import { useContext } from "react";
import { NavLink } from "react-router-dom";
import PizzasContext from '../contexts/PizzaContext';

const NavBar = () => {
    const { chart } = useContext(PizzasContext)
    let precio = 0;
    let cant = 0;
    //let total=0;
    const total = chart.reduce((valorAnterior,{count,price})=>valorAnterior+price+count,0);

    // chart.forEach(element => {
    //     precio = element.price;
    //     cant = element.count;
    //     total += precio*cant;
    // });
    return (
        <nav className="navbar sticky-top navbar-expand-sm bg-dark d-flex justify-content-start text-light">
            <NavLink
                className={({ isActive }) => (isActive ? "active" : undefined) + ""}
                to="/">
                <img src="/pizza.png" width='30' alt="pikachu" />
            </NavLink>
            Pizzeria Mamma Mia
            <NavLink
                className={({ isActive }) => (isActive ? "active" : undefined) + " offset-lg-9"}
                to="/carrito">
                <i className="fa-solid fa-cart-shopping"></i>
            </NavLink>
            <div className="ms-2">{total}</div>
        </nav>


    );
};
export default NavBar;
