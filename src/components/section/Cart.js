import React, { Component } from 'react'
import {DataContext} from '../main/Context'
import '../css/Details.css'
import '../css/Cart.css'

export class Cart extends Component {
    static contextType = DataContext;

    componentDidMount(){
        this.context.getTotal();
    }
    
    render() {
        const {cart,increase,reduction,removeProduct,total} = this.context;
        if(cart.length === 0){
            return <h2 style={{textAlign:"center"}}>Nothings Product</h2>
        }else{
            return (
                <>
                    {
                        cart.map(item =>(
                            <div className="details cart" key={item._id}>
                                <div className="box">
                                <div className="row">
                                    <div className="col-10">
                                    
                                        <h2>{item.title}</h2> </div>
                                    <div className="col">
                                        <span>(₹){item.price * item.count}</span>
                                    </div></div>
                                        <div className="row">
                                    <div className="col-10">
                                    <p>{item.description}</p>
                                    <p>{item.content}</p>
                                    </div>
                                    <div className="col">
                                    <div className="">
                                        <button className="btn btn-success btnCls" onClick={() => reduction(item._id)}> - </button>
                                        <span>{item.count}</span>
                                        <button className="btn btn-danger btnDangerCls" onClick={() => increase(item._id)}> + </button>
                                    </div>
                                    </div>  </div>
                                </div>
                                <div className="delete" onClick={() => removeProduct(item._id)}>X</div>
                            </div>
                        ))
                    }
                    <div className="total">
                    <div className="row">
                      <div className="col-9"></div>
                      <div className="col">
                      <h3>Total: (₹){total}</h3>
                       </div></div>
                    </div>
                </>
                )
            }
        }
}

export default Cart
