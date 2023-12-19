import { useState } from 'react'
import Cart from './components/cart/Cart'
import Header from './components/layout/Header'
import Meals from './components/meals/Meals'

function App() {
	const [open, setOpen] = useState(false)
	const handleOpen = () => setOpen(true)
	const handleClose = () => setOpen(false)
	return (
		<>
			<Header handleOpen={handleOpen} />
			<Cart open={open} handleClose={handleClose} />
			<main>
				<Meals />
			</main>
		</>
	)
}

export default App
