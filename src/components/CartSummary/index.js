import CartContext from '../../context/CartContext'
import Payment from '../Payment'
import Popup from 'reactjs-popup'

import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let total = 0
      cartList.forEach(eachCartItem => {
        total += eachCartItem.price * eachCartItem.quantity
      })
      const {length} = cartList

      return (
        <>
          <h1 className="total">
            Order Total:<span className="total-span"> Rs {total}/-</span>
          </h1>
          <p className="length">{length}Items in cart</p>
          <Popup
            modal
            trigger={
              <button className="checkout-btn" type="button">
                Checkout
              </button>
            }
            position="top left"
          >
            {close => <Payment close={close} />}
          </Popup>
        </>
      )
    }}
  </CartContext.Consumer>
)
export default CartSummary
