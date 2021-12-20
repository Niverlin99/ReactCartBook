import React, { Component } from 'react'

export const DataContext = React.createContext();

export class DataProvider extends Component {

    state = {
        products: [
            {
                "_id": "1",
                "title": " A Monster Calls ",
                "description": "- Patrick Ness",
                "content": "This is a powerhouse of a book. It is a story in which, as the reader, you know what the inevitable outcome will be for the main character, but the journey that he goes on is so beautifully unravelled that you cannot help but be moved by it",
                "price": 230,
                "count": 1
            },
            {
                "_id": "2",
                "title": "Skulduggery Pleasant",
                "description": "- Derek Landy",
                "content": "This book follows a girl called Stephanie who meets a stranger called Skulduggery Pleasant at her Uncle's funeral, and soon finds herself dragged into an adventure involving trolls, vampires, wizards and a walking, talking skeleton detective. ",
                "price": 190,
                "count": 1
            },
            {
                "_id": "3",
                "title": "How I Live Now ",
                "description": "- Meg Rosoff",
                "content": "I read this a few years ago now by listening to the audio book and it is one of those books that lingers in your memory. The story follows a teenage girl from America, visiting her cousins and Aunt in the UK when war breaks out, and she and her cousins are left to look after themselves and each other.",
                "price": 500,
                "count": 1
            },
            {
                "_id": "4",
                "title": " Refugee Boy",
                "description": "- Benjamin Zephaniah",
                "content": "Refugee Boy tells the story of Alem, brought to England by his Father fleeing the war in Ethiopia. This book convincingly conveys what it must feel like to be a young refugee, alone in a strange country and the struggle Alem must go through to find care and stability in the face of hostility and bureaucracy.",
                "price": 150,
                "count": 1
            },
            {
                "_id": "5",
                "title": "New Town Soul ",
                "description": "- Dermot Bolger",
                "content": "New Town Soul is a supernatural thriller for older readers situated in the real world of the contemporary teenage experience in Ireland. Friendship and love are central to this story. Shane is Joey's new best friend. Joey pines for Geraldine, but his love is unrequited. ",
                "price": 100,
                "count": 1
            },
            {
                "_id": "6",
                "title": "The One and Only Ivan ",
                "description": "Katherine Applegate",
                "content": "The One and Only Ivan is a beautifully written tale of how a mighty gorilla wins his freedom, and a deserving winner of the Newbery Medal 2013. There is just the right amount of humour and pathos. Ivan is an easy-going gorilla who has spent his life performing for the crowds at the Exit 8 shopping mall.",
                "price": 170,
                "count": 1
            }
        ],
        cart: [],
        total: 0
        
    };

    addCart = (id) =>{
        const {products, cart} = this.state;
        const check = cart.every(item =>{
            return item._id !== id
        })
        if(check){
            const data = products.filter(product =>{
                return product._id === id
            })
            this.setState({cart: [...cart,...data]})
        }else{
            alert("The book has been added to cart.")
        }
    };

    reduction = id =>{
        const { cart } = this.state;
        cart.forEach(item =>{
            if(item._id === id){
                item.count === 1 ? item.count = 1 : item.count -=1;
            }
        })
        this.setState({cart: cart});
        this.getTotal();
    };

    increase = id =>{
        const { cart } = this.state;
        cart.forEach(item =>{
            if(item._id === id){
                item.count += 1;
            }
        })
        this.setState({cart: cart});
        this.getTotal();
    };

    removeProduct = id =>{
        if(window.confirm("Do you want to delete this book?")){
            const {cart} = this.state;
            cart.forEach((item, index) =>{
                if(item._id === id){
                    cart.splice(index, 1)
                }
            })
            this.setState({cart: cart});
            this.getTotal();
        }
       
    };

    getTotal = ()=>{
        const{cart} = this.state;
        const res = cart.reduce((prev, item) => {
            return prev + (item.price * item.count);
        },0)
        this.setState({total: res})
    };
    
    componentDidUpdate(){
        localStorage.setItem('dataCart', JSON.stringify(this.state.cart))
        localStorage.setItem('dataTotal', JSON.stringify(this.state.total))
    };

    componentDidMount(){
        const dataCart = JSON.parse(localStorage.getItem('dataCart'));
        if(dataCart !== null){
            this.setState({cart: dataCart});
        }
        const dataTotal = JSON.parse(localStorage.getItem('dataTotal'));
        if(dataTotal !== null){
            this.setState({total: dataTotal});
        }
    }
   

    render() {
        const {products, cart,total} = this.state;
        const {addCart,reduction,increase,removeProduct,getTotal} = this;
        return (
            <DataContext.Provider 
            value={{products, addCart, cart, reduction,increase,removeProduct,total,getTotal}}>
                {this.props.children}
            </DataContext.Provider>
        )
    }
}


