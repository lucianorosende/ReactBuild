import Counter from "./itemCount"

const ItemDetail = ({imgUrl, descriptionLarge, title, price}) => {


    const addHandler = (quant) => {

        if(quant === 0){
          console.log(`no es posible agregar ${quant} items al carrito`)
        }
        else{console.log(`se agregaron ${quant} items al carrito`)} 
        
        
      }

    return(

        <section className="py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-md-6"><img className="card-img-top mb-5 mb-md-0" src={imgUrl} alt={title}/></div>
                    <div className="col-md-6">
                        <h1 className="display-5 fw-bolder">{title}</h1>
                        <div className="fs-5 mb-5">
                            <span className="text-decoration-line-through">${parseInt(price * 1.2)}ARS</span>
                            <span className="m-2">${price}ARS</span>
                        </div>
                        <p className="lead">{descriptionLarge}</p>
                        <div className="d-flex">
        
                        <Counter initial={0} stock={5} onAdd={addHandler}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )

}

export default ItemDetail;