import Header from './components/header/header.component'
import AddItem from './components/add-item/add-item.component'
import Content from './components/content/content.component'
import Footer from './components/footer/footer.component'
import { useState } from 'react'

function App() {
	const [items, setItems] = useState(
		JSON.parse(localStorage.getItem('shopping-list'))
	)
	const [newItem, setNewItem] = useState('')

	const setAndSaveItems = newItems => {
		setItems(newItems)
		localStorage.setItem('shopping-list', JSON.stringify(newItems))
	}

	const addItem = item => {
		const id = items.length ? items[items.length - 1].id + 1 : 1
		const myNewItem = { id, checked: false, item }
		const listItems = [...items, myNewItem]
		setAndSaveItems(listItems)
	}

	const handleChange = id => {
		const listItems = items.map(item =>
			item.id === id ? { ...item, checked: !item.checked } : item
		)
		setAndSaveItems(listItems)
	}

	const handleDelete = id => {
		const listItems = items.filter(item => item.id !== id)
		setAndSaveItems(listItems)
	}

	const handleSubmit = e => {
		e.preventDefault()
		addItem(newItem)
		setNewItem('')
	}

	return (
		<div className='App'>
			<Header title='Grocery List' />
			<AddItem
				newItem={newItem}
				setNewItem={setNewItem}
				handleSubmit={handleSubmit}
			/>
			<Content
				items={items}
				handleChange={handleChange}
				handleDelete={handleDelete}
			/>
			<Footer length={items.length} />
		</div>
	)
}

export default App
