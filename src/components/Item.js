const Item = ({id, title, description, price, imgUrl}) => {


    return (


                    
                            <div className="col mb-5">
                                <div className="card h-100">
                                    
                                    <img className="card-img-top" src={imgUrl} alt="..." />
                                    
                                    <div className="card-body p-4">
                                        <div className="text-center">
                                            
                                            <h5 className="fw-bolder">{title}</h5>
                                            <h6>{description}</h6>
                                            
                                            ${price}
                                        </div>
                                    </div>
                                    
                                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                        <div className="text-center"><a className="btn btn-outline-dark mt-auto m-2" href="">Ver opciones</a></div>
                                        <div className="text-center"><a className="btn btn-outline-dark mt-auto " href="">Añadir a carrito</a></div>
                                    </div>
                                </div>
                            </div>                      
                        
                    
        

    )

}

export default Item