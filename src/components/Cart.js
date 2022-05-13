import { useContext } from "react"
import CartContext from "./../context/CartContext"
import CartAnimation from "./../services/animations/cartAnimation"
import {writeBatch, collection, query, getDocs, where, documentId, addDoc} from "firebase/firestore"
import { fireStoreDB } from "../services/firebase/index"
import LoadingAnimation from "../services/animations/loader"

const Cart = () => {
    
    const {removeFromCart, getPrice, cartClear, cartSaver, load, setLoad } = useContext(CartContext)

   

    
   console.log("cart:", cartSaver)

    const createOrder = () => {
        setLoad(true)
        const orderCreate = {
            items: cartSaver,
            buyer: {

                name: "Luciano Rosende",
                phone: "+541144971105",
                email: "lucianorosende@gmail.com"

            },
            total: getPrice(),
            date: new Date()
        }

        const ids = cartSaver.map(prod => prod.id)

        const batch = writeBatch(fireStoreDB)

        const collectionRef = collection(fireStoreDB, 'productos')

        const outOfStock = []

        getDocs(query(collectionRef, where(documentId(), "in", ids)))
            .then(res => {
                res.docs.forEach(doc => {

                    const docData = doc.data()
                    const productQuant = cartSaver.find(p => p.id === doc.id)?.quantity

                    if(docData.stock >= productQuant){

                        batch.update(doc.ref, {stock: docData.stock - productQuant})
                    } 
                    else{

                        outOfStock.push({id: doc.id, ...docData})
                    }

                })


            }).then(() => {

                if(outOfStock.length === 0){
                    
                    const collectRef = collection(fireStoreDB, "orders")
                    return addDoc(collectRef, orderCreate)
                } else {
                    return Promise.reject({name: 'outOfStockError', products: outOfStock})
                }

            }).then(({id}) => {

                batch.commit()
                console.log(`id order is : ${id}`)
            }).catch(e => {
                console.log(e)
            }).finally(() => {
                setLoad(false)
            })


    }
    
    if(load) {
        return <LoadingAnimation></LoadingAnimation>
    }

    // if(cartSaver.length === 0) {
    //     return (
    //         <CartAnimation></CartAnimation>
    //     )
    // }
    
   
        return (
            <>

            



<div className="shopping-cart">
    <h1 className="d-flex justify-content-center">Mi carrito</h1>
  <div className="column-labels">
    <label className="product-image">Imagen</label>
    <label className="product-details">Producto</label>
    <label className="product-price">Precio</label>
    <label className="product-quantity">Cantidad</label>
    <label className="product-removal">Remover</label>
    <label className="product-line-price">Total</label>
  </div>

  <div className="product">
    <div className="product-image">
      <img src="https://s.cdpn.io/3/dingo-dog-bones.jpg"/>
    </div>
    <div className="product-details">
      <div className="product-title">Dingo Dog Bones</div>
      <p className="product-description">The best dog bones of all time. Holy crap. Your dog will be begging for these things! I got curious once and ate one myself. I'm a fan.</p>
    </div>
    <div className="product-price">12.99</div>
    <div className="product-quantity">
      <input type="number" value="2" min="1"/>
    </div>
    <div className="product-removal">
      <button className="remove-product">
        Remove
      </button>
    </div>
    <div className="product-line-price">25.98</div>
  </div>

  <div className="product">
    <div className="product-image">
      <img src="https://s.cdpn.io/3/large-NutroNaturalChoiceAdultLambMealandRiceDryDogFood.png"/>
    </div>
    <div className="product-details">
      <div className="product-title">Nutro™ Adult Lamb and Rice Dog Food</div>
      <p className="product-description">Who doesn't like lamb and rice? We've all hit the halal cart at 3am while quasi-blackout after a night of binge drinking in Manhattan. Now it's your dog's turn!</p>
    </div>
    <div className="product-price">45.99</div>
    <div className="product-quantity">
      <input type="number" value="1" min="1"/>
    </div>
    <div className="product-removal">
      <button className="remove-product">
        Remove
      </button>
    </div>
    <div className="product-line-price">45.99</div>
  </div>

  <div className="totals">
    <div className="totals-item">
      <label>Subtotal</label>
      <div className="totals-value" id="cart-subtotal">71.97</div>
    </div>
    <div className="totals-item">
      <label>Tax (5%)</label>
      <div className="totals-value" id="cart-tax">3.60</div>
    </div>
    <div className="totals-item">
      <label>Shipping</label>
      <div className="totals-value" id="cart-shipping">15.00</div>
    </div>
    <div className="totals-item totals-item-total">
      <label>Grand Total</label>
      <div className="totals-value" id="cart-total">90.57</div>
    </div>
  </div>
      
      <button className="checkout">Checkout</button>

</div>




            
            {/* <h1>Cart</h1>
            <ul>
                {   
                    
                    cartSaver.map(prod => <li key={prod.id}>{prod.name}  cantidad: {prod.quantity} precio uni: {prod.price}  subtotal: {prod.quantity * prod.price} <button onClick={() => removeFromCart(prod.id)}>X</button></li>)
                }  
                <h5>total:{getPrice()}</h5>
                <button onClick={() => cartClear()}>Limpiar Carrito</button>
                <button onClick={() => createOrder()}>Generar Orden</button> 
            </ul> */}
            </>
        )
    }
    


export default Cart