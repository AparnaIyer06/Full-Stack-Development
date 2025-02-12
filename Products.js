import FormattedDate from "./FormattedDate"
import FormattedMoney from "./FormattedMoney"

const products = [
    {name: 'T-shirts',id:1,price:300,
    purchase_date: new Date('2020-01-01')
    },

    {name: 'Shirts',id:2,price:350,
    purchase_date: new Date('2022-06-04')
    },
    {name: 'Jeans',id:3,price:750,
    purchase_date: new Date('2021-03-23')
    },
    {name: 'Blazer',id:4,price:1500,
    purchase_date: new Date('2023-07-31')
    },
    {name: 'Shoes',id:5,price:2000,
    purchase_date: new Date('2024-02-17')
    }
]
/*Functional Component*/
export default function ProductList(){
    /*Using map*/
    const listItems = products.map(product=><li key={product.id} 
        style={{color:'magenta'}}>
            Name: {product.name}
            <br/> 
            Price: <FormattedMoney value={product.price}/>
            <br/>
            Purchase Date: <FormattedDate value= {product.purchase_date}/>

            <hr color='red'/>
            <br/>


        </li>  /*Map is like a loop-iterates over each element*/
    )
    return (<ul>{listItems}</ul>)
}