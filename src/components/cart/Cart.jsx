/* eslint-disable react/prop-types */
import Modal from '@mui/material/Modal'
import classes from './Cart.module.css'

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
	return (
		<Modal sx={modalStyle} open={open} onClose={handleClose}>
			<div className={classes['cart']}>Cart</div>
		</Modal>
	)
}

export default Cart
