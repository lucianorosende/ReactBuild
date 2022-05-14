const CartLabels = () => {

    return(
        <>
        <div className="d-grid gap-2 m-4 col-3 mx-auto">
            <button className="btn btn-primary" type="button">Mi Carrito</button>
            </div>
            <div className="column-labels">
                <label className="product-image">Imagen</label>
                <label className="product-details">Producto</label>
                <label className="product-price">Precio</label>
                <label className="product-quantity">Cantidad</label>
                <label className="product-removal">Remover</label>
                <label className="product-line-price">Total</label>
            </div>
        </>
    )
}

export default CartLabels