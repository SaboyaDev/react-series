const Content = () => {
	const handleNameChange = () => {
		const names = ['Jose', 'Luis', 'Jason']
		const int = Math.floor(Math.random() * 3)
		return names[int]
	}

	const handleClick = () => {
		console.log('You Clicked it')
	}

	const handleClick2 = name => {
		console.log(`${name} was clicked`)
	}

	const handleClick3 = e => {
		console.log(e.target)
	}

	return (
		<main>
			<p>Hello {handleNameChange()}! </p>
			<button onClick={handleClick}>Click Here</button>
			<button onClick={() => handleClick2('SaboyaDev')}>Click Here</button>
			<button onClick={e => handleClick3(e)}>Click Here</button>
		</main>
	)
}
export default Content
