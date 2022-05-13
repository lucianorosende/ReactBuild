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

            <div className="cart_area section_padding_100 clearfix">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="cart-table clearfix">
                            <table className="table table-responsive">
                                <thead>
                                    <tr>
                                        <th>Product</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th>Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="cart_product_img d-flex align-items-center">
                                            <a href="#"><img src="" alt="Product"/></a>
                                            <h6>Yellow Cocktail Dress</h6>
                                        </td>
                                        <td className="price"><span>$49.88</span></td>
                                        <td className="qty">
                                            <div className="quantity">
                                                <span className="qty-minus"><i className="fa fa-minus" aria-hidden="true"></i></span>
                                                <input type="number" className="qty-text" id="qty" step="1" min="1" max="99" name="quantity" value="1"/>
                                                <span className="qty-plus"><i className="fa fa-plus" aria-hidden="true"></i></span>
                                            </div>
                                        </td>
                                        <td className="total_price"><span>$49.88</span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="cart-footer d-flex mt-30">
                            <div className="back-to-shop w-50">
                                <a href="shop-grid-left-sidebar.html">Continue shooping</a>
                            </div>
                            <div className="update-checkout w-50 text-right">
                                <a href="#">clear cart</a>
                                <a href="#">Update cart</a>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="row">
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="coupon-code-area mt-70">
                            <div className="cart-page-heading">
                                <h5>Cupon code</h5>
                                <p>Enter your cupone code</p>
                            </div>
                            <form action="#">
                                <input type="search" name="search" placeholder="#569ab15"/>
                                <button type="submit">Apply</button>
                            </form>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="shipping-method-area mt-70">
                            <div className="cart-page-heading">
                                <h5>Shipping method</h5>
                                <p>Select the one you want</p>
                            </div>

                            <div className="custom-control custom-radio mb-30">
                                <input type="radio" id="customRadio1" name="customRadio" className="custom-control-input"/>
                                <label className="custom-control-label d-flex align-items-center justify-content-between" htmlFor="customRadio1"><span>Next day delivery</span><span>$4.99</span></label>
                            </div>

                            <div className="custom-control custom-radio mb-30">
                                <input type="radio" id="customRadio2" name="customRadio" className="custom-control-input"/>
                                <label className="custom-control-label d-flex align-items-center justify-content-between" htmlFor="customRadio2"><span>Standard delivery</span><span>$1.99</span></label>
                            </div>

                            <div className="custom-control custom-radio">
                                <input type="radio" id="customRadio3" name="customRadio" className="custom-control-input"/>
                                <label className="custom-control-label d-flex align-items-center justify-content-between" for="customRadio3"><span>Personal Pickup</span><span>Free</span></label>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4">
                        <div className="cart-total-area mt-70">
                            <div className="cart-page-heading">
                                <h5>Cart total</h5>
                                <p>Final info</p>
                            </div>

                            <ul className="cart-total-chart">
                                <li><span>Subtotal</span> <span>$59.90</span></li>
                                <li><span>Shipping</span> <span>Free</span></li>
                                <li><span><strong>Total</strong></span> <span><strong>$59.90</strong></span></li>
                            </ul>
                            <a href="checkout.html" className="btn karl-checkout-btn">Proceed to checkout</a>
                        </div>
                    </div>
                </div>
            </div>
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