/* eslint-disable react/prop-types */
import classes from './Header.module.css'
import mealsImg from '../../assets/meals.jpg'
import HeaderCartButton from './HeaderCartButton'

function Header({ handleOpen }) {
	return (
		<>
			<header className={classes['header']}>
				<h1>React Meals</h1>
				<HeaderCartButton handleOpen={handleOpen} />
			</header>
			<div className={classes['main-image']}>
				<img src={mealsImg} alt='Meals Image' />
			</div>
		</>
	)
}

export default Header
