import Header from './components/header/header.component'
import AddItem from './components/add-item/add-item.component'
import SearchItem from './components/search-item/search-item.component'
import Content from './components/content/content.component'
import Footer from './components/footer/footer.component'
import { useState } from 'react'

function App() {
  // Local Storage List
  const shoppingList = localStorage.getItem('shopping-list')
	// State
	const [items, setItems] = useState(
		shoppingList ? JSON.parse(shoppingList) : localStorage.setItem('shopping-list', JSON.stringify([]))
   
	)
	const [newItem, setNewItem] = useState('')
	const [search, setSearch] = useState('')

	// Methods
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
			<SearchItem
				search={search}
				setSearch={setSearch}
			/>
			<Content
				items={items.filter(item =>
					item.item.toLowerCase().includes(search.toLocaleLowerCase())
				)}
				handleChange={handleChange}
				handleDelete={handleDelete}
			/>
			<Footer length={items.length} />
		</div>
	)
}

export default App
