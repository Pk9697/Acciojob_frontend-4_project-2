function SignIn() {
	return (
		<div className='container'>
			<div className='sign-in-card'>
				<div className='header'>
					<p>Welcome back! 👋</p>
					<h2>Sign in to your account</h2>
				</div>

				<form>
					<fieldset>
						<label htmlFor='email'>
							Your email{' '}
							<input type='email' id='email' placeholder='Enter your email' />
						</label>

						<label htmlFor='password'>
							Password{' '}
							<input
								type='password'
								id='password'
								placeholder='Enter your password'
							/>
						</label>
					</fieldset>

					<button type='submit'>Continue</button>
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
