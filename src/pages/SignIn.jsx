import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function SignIn() {
	const navigate = useNavigate()
	const [formData, setFormData] = useState({
		username: '',
		password: '',
	})
	const [error, setError] = useState(null)
	const [isLoading, setIsLoading] = useState(false)

	const { username, password } = formData

	const handleOnChange = (e) => {
		setError(null)
		const { name, value } = e.target
		setFormData((prev) => ({ ...prev, [name]: value }))
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		setFormData({ username: '', password: '' })
		setIsLoading(true)
		const url = 'https://dummyjson.com/auth/login'

		fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ ...formData }),
		})
			.then((res) => res.json())
			.then((data) => {
				if (!data || data.message === 'Invalid credentials' || !data.token) {
					setError(data.message)
					localStorage.removeItem('user')
				} else {
					setError(null)
					localStorage.setItem('user', JSON.stringify(data))
					navigate('/profile')
				}
			})
			.catch((err) => {
				console.error(err)
			})
			.finally(() => setIsLoading(false))
	}

	return (
		<div className='container'>
			<div className='sign-in-card'>
				<div className='header'>
					<p>Welcome back! 👋</p>
					<h2>Sign in to your account</h2>
				</div>

				<form onSubmit={handleSubmit}>
					<fieldset>
						<label htmlFor='username'>
							Your username
							<input
								name='username'
								value={username}
								onChange={handleOnChange}
								type='text'
								id='username'
								placeholder='Enter your username'
								required
							/>
						</label>

						<label htmlFor='password'>
							Password
							<input
								name='password'
								value={password}
								onChange={handleOnChange}
								type='password'
								id='password'
								placeholder='Enter your password'
								required
							/>
						</label>
					</fieldset>
					{error && <p className='error'>{error}</p>}
					<button disabled={isLoading} type='submit'>
						Continue
					</button>
				</form>

				<p>
					<a href='#'>Forgot your password?</a>
				</p>
			</div>
			<p>
				Don&apos;t have an account? <a href='#'>Sign up</a>
			</p>
		</div>
	)
}

export default SignIn
