/* eslint-disable react/prop-types */
import Modal from '@mui/material/Modal'
import classes from './Cart.module.css'
import { Button } from '@mui/material'
import CartItem from './CartItem'
import { useContext } from 'react'
import { CartContext } from '../../context/cartContext'

const modalStyle = {
	width: '100%',
	height: '100%',
	position: 'fixed',
	left: 0,
	top: 0,
	overflow: 'auto',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
}

function Cart({ open, handleClose }) {
	const { items, totalAmount, reset } = useContext(CartContext)

	const handleOrder = () => {
		alert(`Your total bill is :$${totalAmount.toFixed(2)}`)
		reset()
		handleClose()
	}

	return (
		<Modal sx={modalStyle} open={open} onClose={handleClose}>
			<div className={classes['cart']}>
				{items.map((item, index) => (
					<CartItem key={index + item.id} item={item} />
				))}
				<div className={classes['cart-total']}>
					<h2>Total Amount</h2>
					<h2>${totalAmount.toFixed(2)}</h2>
				</div>
				<div className={classes['cart-btns']}>
					<Button variant='outlined' onClick={handleClose}>
						Close
					</Button>
					<Button
						variant='contained'
						disabled={items.length == 0}
						onClick={handleOrder}
					>
						Order
					</Button>
				</div>
			</div>
		</Modal>
	)
}

export default Cart
