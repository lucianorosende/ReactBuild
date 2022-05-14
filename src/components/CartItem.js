import CartItemSingular from "./CartItemSingular"

const CartItem  = ({cartInfo}) => {
    
    return(
        
        <>
        {cartInfo.map(p => <CartItemSingular key={p.id} {...p}/>)}
        </>
        

    )
}

export default CartItem