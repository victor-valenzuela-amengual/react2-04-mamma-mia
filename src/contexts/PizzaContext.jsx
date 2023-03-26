import { createContext, useState, useEffect } from "react"
import axios from "axios"

const PizzaContext = createContext(null);

const PizzaProvider = ({ children }) => {
    const [pizzas, setPizzas] = useState([])
    const [chart, setChart] = useState([])

    const GetData = async () => {
        const endpoint = "/pizzas.json";
        //axios
        const { data } = await axios.get(endpoint);
        setPizzas(data);
        //js fetch        
        // const request = await fetch(endpoint);
        // await request
        //     .json()
        //     .then((data) => {
        //         setPizza(data);
        //     })
        //     .catch((err) => {
        //         console.log(err);
        //     })
    }
    useEffect(() => {
        GetData();
    }, []);    

    const AddToChart = ({ id, price, name, img }) => {               
        const pizzaFound = chart.findIndex(
            ({ id: pizzaId }) => pizzaId === id);
            //destructuracion

        const product = { id, price, name, img, count: 1 }
        if (pizzaFound >= 0) {            
            chart[pizzaFound].count++;
        }
        else {            
            setChart([...chart, product])
        }        
    }
    const Increment = (i)=>{
        console.log(chart);
        chart[i].count++;
        setChart([...chart])
    }

    const Decrement = (i)=>{
        console.log(chart);
        const {count}=chart[i];
        count===1?chart.splice(i,1):chart[i].count--;
        setChart([...chart]);
    }

    return(
        <PizzaContext.Provider value = {{pizzas,chart,setChart,AddToChart,Decrement,Increment}}>
            {children}
        </PizzaContext.Provider>
    );
};
export { PizzaProvider };

export default PizzaContext;