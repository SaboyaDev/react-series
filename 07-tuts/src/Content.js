import { useState } from 'react'
import { FaTrashAlt } from 'react-icons/fa'

const Content = () => {
	const [items, setItems] = useState([
		{
			id: 1,
			checked: false,
			item: 'One half pound bag of Cocoa Almonds Unsalted',
		},
		{
			id: 2,
			checked: false,
			item: 'Item 2',
		},
		{
			id: 3,
			checked: false,
			item: 'Item 3',
		},
	])

	const handleChange = id => {
		const listItems = items.map(item =>
			item.id === id ? { ...item, checked: !item.checked } : item
		)
		setItems(listItems)
		localStorage.setItem('shopping-list', JSON.stringify(listItems))
	}

	return (
		<main>
			<ul>
				{items.map(item => (
					<li
						className='item'
						key={item.id}
					>
						<input
							type='checkbox'
							onChange={() => handleChange(item.id)}
							checked={item.checked}
						/>
						<label
							style={item.checked ? { textDecoration: 'line-through' } : null}
							onDoubleClick={() => handleChange(item.id)}
						>
							{item.item}
						</label>
						<FaTrashAlt
							role='button'
							tabIndex='0'
						/>
					</li>
				))}
			</ul>
		</main>
	)
}
export default Content
