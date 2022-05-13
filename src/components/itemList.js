import Item from "./Item";

const ItemList = ({products, category}) => {

    return (
        <section className="py-5 imgSect">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {products.map(prod => <Item key={prod.id} {...prod} category={category} />)}
            </div>
            </div> 
            </section> 
    )

}

export default ItemList