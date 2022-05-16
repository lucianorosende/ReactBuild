import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import {useState, useEffect} from "react"
import { fireStoreDB } from "../services/firebase"
import {getDocs, collection} from "firebase/firestore"



const Nav = () => {

    const [categories, setCategories] = useState([])

    useEffect(() => {

        // catFetch().then(r => {

        //     setCategories(r);

        // })

        getDocs(collection(fireStoreDB, "categories")).then(r => {

            const categorieFetch = r.docs.map(doc => {

                return {id: doc.id , ...doc.data()}
            })

            setCategories(categorieFetch)
            
        })
        
    }, [])


    return (

            <>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container px-4 px-lg-5">
                        <Link to="/" className="navbar-brand">Crisol</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                                <li className="nav-item"><Link to="/" className="nav-link active">Inicio</Link></li>
                                <li className="nav-item"><Link to="/about" className="nav-link">Nosotros</Link></li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" id="navbarDropdown" href="$" role="button" data-bs-toggle="dropdown" aria-expanded="false">Shop</a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        {categories.map(cat => <Link key={cat.id} className="dropdown-item" to={`/categories/${cat.id}`}>{cat.description}</Link>)}
                                    </ul>
                                </li>
                            </ul>
                            <CartWidget/>    
                        </div>
                    </div>
                </nav>

            </>
        
        
    )

}

export default Nav