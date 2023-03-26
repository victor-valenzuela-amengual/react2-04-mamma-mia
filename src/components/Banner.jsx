import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";

const Banner = () => {
    return (        
        <div
            className="border border-primary banner position-relative text-light altura"            
        >            
            <h1 className="position-absolute top-25 start-50 pt-5 mt-5 ms-4 translate-middle">
                Pizzeria Mamma Mia!
            </h1>
            <h6 className="position-absolute top-50 start-50 pt-1 mt-4 ms-2 translate-middle">
                Las mejores pizzas del barrio!
            </h6>
        </div>
    );
};
export default Banner;
