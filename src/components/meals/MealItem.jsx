/* eslint-disable react/prop-types */
import { TextField } from '@mui/material'
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined'
import classes from './MealItem.module.css'
import { useContext, useState } from 'react'
import { CartContext } from '../../context/cartContext'

function MealItem({ meal }) {
	const { addItem } = useContext(CartContext)
	const [quantity, setQuantity] = useState(1)
	const { price, name, description } = meal
	const formattedPrice = '$' + price.toFixed(2)

	const handleChange = (e) => {
		const { value } = e.target
		if (value > 0 && value < 6) {
			setQuantity(parseInt(e.target.value))
		} else {
			alert('Quantity only valid between 1 to 5')
		}
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		addItem({ ...meal, quantity })
	}

	return (
		<li className={classes['meal-list']}>
			<div className={classes['meal']}>
				<h3 className={classes['name']}>{name}</h3>
				<div className={classes['description']}>{description}</div>
				<div className={classes['price']}>{formattedPrice}</div>
			</div>
			<form onSubmit={handleSubmit} className={classes['form']}>
				<TextField
					label='Quantity'
					id='filled-hidden-label-small'
					type='number'
					variant='filled'
					size='small'
					value={quantity}
					onChange={handleChange}
				/>
				<button type='submit' className={classes['icon']}>
					<AddCircleOutlineOutlinedIcon />
				</button>
			</form>
		</li>
	)
}

export default MealItem
