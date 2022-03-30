import CartWidget from "./CartWidget";

let nav = () => {

    return (

            <>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container px-4 px-lg-5">
                        <a className="navbar-brand" href="#!">Crisol</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                                <li className="nav-item"><a className="nav-link active" aria-current="page" href="#!">Inicio</a></li>
                                <li className="nav-item"><a className="nav-link" href="#!">Nosotros</a></li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" id="navbarDropdown" href="" role="button" data-bs-toggle="dropdown" aria-expanded="false">Shop</a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a className="dropdown-item" href="">Todos los Productos</a></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><a className="dropdown-item" href="">Productos Populares</a></li>
                                        <li><a className="dropdown-item" href="">Nuevos Productos</a></li>
                                    </ul>
                                </li>
                            </ul>
                            <CartWidget/>    
                        </div>
                    </div>
                </nav>

                <header className="bg-dark py-5">
                    <div className="container px-4 px-lg-5 my-5">
                        <div className="text-center text-white">
                            <h1 className="display-4 fw-bolder">Tu brunch Favorito!</h1>
                            <p className="lead fw-normal text-white-50 mb-0">Con Crisol, todos los mediodias</p>
                        </div>
                    </div>
                </header>

         

            </>
        
        
    )

}

export default nav