import LineList from './LineList'

const ItemList = ({ items, handleChange, handleDelete }) => {
	return (
		<ul>
			{items.map(item => (
				<LineList
					item={item}
					key={item.id}
					handleChange={handleChange}
					handleDelete={handleDelete}
				/>
			))}
		</ul>
	)
}
export default ItemList
