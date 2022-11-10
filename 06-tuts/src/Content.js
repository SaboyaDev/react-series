import {useState} from 'react'

const Content = () => {
	const [name, setName] = useState('SaboyaDev')
	const [count, setCount] = useState(0)

	const handleNameChange = () => {
		const names = ['Jose', 'Luis', 'Jason']
		const int = Math.floor(Math.random() * 3)
		setName(names[int])
	}

	const handleClick = () => {
		// calling setCount twice does not change anything
		// the state of count remains tha same when the
		// function was called.
		setCount(count + 1)
		setCount(count + 1)
		console.log({
			availableState: count,
		})
	}

	const handleClick2 = name => {
		console.log({
			currentState: count,
		})
	}

	return (
		<main>
			<p>Hello {name}! </p>
			<button onClick={handleNameChange}>Change Name</button>
			<button onClick={handleClick}>state</button>
			<button onClick={handleClick2}>Current State</button>
		</main>
	)
}
export default Content
