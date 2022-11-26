import ItemList from '../item-list/item-list.component'
import './content.styles.css'

const Content = ({ items, handleChange, handleDelete }) => {
	return (
		<main>
			{items.length ? (
				<ItemList
					items={items}
					handleChange={handleChange}
					handleDelete={handleDelete}
				/>
			) : (
				<p style={{ marginTop: '2rem' }}>Your list is empty</p>
			)}
		</main>
	)
}
export default Content
