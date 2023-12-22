/* eslint-disable react/prop-types */
import { useContext } from 'react'
import IconButton from '@mui/material/IconButton'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import Badge from '@mui/material/Badge'
import classes from './HeaderCartButton.module.css'
import { CartContext } from '../../context/cartContext'

function HeaderCartButton({ handleOpen }) {
	const { items } = useContext(CartContext)

	const totalQuantity = items.reduce((acc, curr) => {
		return acc + curr.quantity
	}, 0)


	return (
		<div className={classes['headercartbtn']} onClick={handleOpen}>
			<span>Your cart</span>
			<IconButton aria-label='cart' sx={{ color: 'white' }}>
				<Badge badgeContent={totalQuantity} color='success'>
					<ShoppingCartIcon />
				</Badge>
			</IconButton>
		</div>
	)
}

export default HeaderCartButton
