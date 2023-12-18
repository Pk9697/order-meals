import IconButton from '@mui/material/IconButton'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import Badge from '@mui/material/Badge'
import classes from './HeaderCartButton.module.css'

function HeaderCartButton() {
	return (
		<div className={classes['headercartbtn']}>
			<span>Your cart</span>
			<IconButton aria-label='cart' sx={{ color: 'white' }}>
				<Badge badgeContent={4} color='success'>
					<ShoppingCartIcon />
				</Badge>
			</IconButton>
		</div>
	)
}

export default HeaderCartButton
