import { useContext, useState } from "react"
import CartContext from "../context/CartContext"
import {writeBatch, collection, query, getDocs, where, documentId, addDoc} from "firebase/firestore"
import { fireStoreDB } from "../services/firebase/index"
import { useForm } from "react-hook-form";
import LoadingAnimation from "../services/animations/loader";

const Checkout = () => {
    const [dataSave, setDataSave] = useState([])
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = data => {
        setDataSave(data)
    }

    const { getPrice, cartSaver, setLoad, getQuant, getPriceTax, getShipping, load } = useContext(CartContext)

    

    const CreateOrder = () => {
        setLoad(true)

        
            const orderCreate = {
                items: cartSaver,
                buyer: {
                    FirstName: dataSave.FirstName,
                    email: dataSave.email,
                    Street: dataSave.Street,
                    City: dataSave.City,
                    State: dataSave.State,
                    Zipcode: dataSave.Zipcode,
                    NameOnCard: dataSave.NameOnCard,
                    CreditCard: dataSave.CreditCard,
                    ExpMonth: dataSave.ExpMonth,
                    ExpYear: dataSave.ExpYear,
                    CVV: dataSave.cvv
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
                    console.log(id)
                }).catch(e => {
                    console.log(e)
                }).finally(() => {
                    setLoad(false)
                })
    
    
        
        

    }  
        

    if(load){
        return(
            <LoadingAnimation></LoadingAnimation>
        )
    }

    return  (
        
        
        <div className="row-checkout">
        <div className="col-75">
          <div className="container-checkout">
            <form onSubmit={handleSubmit(onSubmit)}>
      
              <div className="row-checkout">
                <div className="col-50">
                  <h3>Datos de Direccion</h3>
                  <label ><i className="fa fa-user"></i> Nombre Completo</label>
                  <input type="text" id="fname" name="firstname" placeholder="Luciano Martin Rosende" {...register("FirstName")}/>
                  <label ><i className="fa fa-envelope"></i> Email</label>
                  <input type="text" id="email" name="email" placeholder="lucianorosende@gmail.com" {...register("email")}/>
                  <label ><i className="fa fa-address-card-o"></i> Calle</label>
                  <input type="text" id="adr" name="address" placeholder="Avenida Elcano 3029" {...register("Street")}/>
                  <label ><i className="fa fa-institution"></i> Ciudad</label>
                  <input type="text" id="city" name="city" placeholder="Capital Federal" {...register("City")}/>
      
                  <div className="row-checkout">
                    <div className="col-50">
                      <label >Estado</label>
                      <input type="text" id="state" name="state" placeholder="CABA" {...register("State")}/>
                    </div>
                    <div className="col-50">
                      <label >Codigo zip</label>
                      <input type="text" id="zip" name="zip" placeholder="1430" {...register("Zipcode")}/>
                    </div>
                  </div>
                </div>
      
                <div className="col-50">
                  <h3>Pago</h3>
                  <label >Tarjetas Aceptadas</label>
                  <div className="icon-container-checkout">
                    <i className="bi bi-credit-card m-1"></i>
                    <i className="bi bi-credit-card-2-back-fill m-1"></i>
                    <i className="bi bi-credit-card-2-front m-1"></i>
                    <i className="bi bi-credit-card-fill m-1"></i>
                  </div>
                  <label>Nombre en la Tarjeta</label>
                  <input type="text" id="cname" name="cardname" placeholder="Alejandro Wilcke" {...register("NameOnCard")}/>
                  <label>Tarjeta de Credito</label>
                  <input type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444" {...register("CreditCard")}/>
                  <label>Mes de Expiracion</label>
                  <input type="text" id="expmonth" name="expmonth" placeholder="Septiembre" {...register("ExpMonth")}/>
      
                  <div className="row-checkout">
                    <div className="col-50">
                      <label >Año de Expiracion</label>
                      <input type="text" id="expyear" name="expyear" placeholder="2018" {...register("ExpYear")}/>
                    </div>
                    <div className="col-50">
                      <label>CVV</label>
                      <input type="text" id="cvv" name="cvv" placeholder="352" {...register("cvv")}/>
                    </div>
                  </div>
                </div>
      
              </div>
              <label>
                <input type="checkbox" name="sameadr"/> Informacion de datos igual para utilizar en envio
              </label>
              {dataSave.length === 0 ? 
              <button type="submit" className="btn-checkout">Agregar Los Datos</button> :
              <button type="submit" className="btn-checkout" onClick={() => {CreateOrder()}}>Continuar al Checkout</button>}
            </form>
          </div>
        </div>
      
        <div className="col-25">
          <div className="container-checkout-two">
            <h4>Carrito
              <span className="price">
                <i className="fa fa-shopping-cart"></i>
                <b>{getQuant()}</b>
              </span>
            </h4>
            {cartSaver.map(p => <p><button type="button" className="btn btn-outline-primary">{p.title}</button> <span className="price">${p.price}</span></p>)}
            <hr/>
            <p>Total y envio <span className="price"><b>${getPriceTax() + getShipping()}</b></span></p>
          </div>
        </div>
      </div> 



    // <button onClick={() => {createOrder()}}>Generar orden</button>
    // <form onSubmit={handleSubmit(onSubmit)}>
    // <input  {...register("example", { required: true })} />
    // <input {...register("exampleRequired", { required: true })} />
    // {errors.exampleRequired && <span>This field is required</span>}
    // <input type="submit" onClick={() => {createOrder()}}/>
    // </form>
    )
}

export default Checkout