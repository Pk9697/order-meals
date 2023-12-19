/* eslint-disable react/prop-types */
import { TextField } from '@mui/material'
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined'
import classes from './MealItem.module.css'

function MealItem({ price, name, description }) {
	const formattedPrice = '$' + price.toFixed(2)
	return (
		<li className={classes['meal-list']}>
			<div className={classes['meal']}>
				<h3 className={classes['name']}>{name}</h3>
				<div className={classes['description']}>{description}</div>
				<div className={classes['price']}>{formattedPrice}</div>
			</div>
			<form className={classes['form']}>
				<TextField
					label='Quantity'
					id='filled-hidden-label-small'
					type='number'
					defaultValue='1'
					variant='filled'
					size='small'
				/>
				<button type='submit' className={classes['icon']}>
					<AddCircleOutlineOutlinedIcon />
				</button>
			</form>
		</li>
	)
}

export default MealItem
