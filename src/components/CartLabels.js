const CartLabels = () => {

    return(
        <>
        <div class="d-grid gap-2 m-4 col-6 mx-auto">
            <button class="btn btn-primary" type="button">Mi Carrito</button>
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