import { useEffect, useState } from 'react'

function Profile() {
	const user = localStorage.getItem('user')
		? JSON.parse(localStorage.getItem('user'))
		: null

	const [userDetails, setUserDetails] = useState(null)
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		if (user?.id) {
			setIsLoading(true)
			fetch(`https://dummyjson.com/users/${user.id}`)
				.then((res) => res.json())
				.then((data) => setUserDetails(data))
				.catch((err) => console.error(err))
				.finally(() => setIsLoading(false))
        } else {
            setIsLoading(false)
        }
	}, [])

	if (!userDetails)
		return isLoading ? (
			<p>Loading...</p>
		) : (
			<p className='error'>!No User Found</p>
		)

	return (
		<div className='container'>
			<div className='profile-card'>
				<img
					src={userDetails.image}
					alt='profile-image'
					className='profile-image'
				/>
				<h2>{`${userDetails.firstName} ${userDetails.maidanName || ''} ${
					userDetails.lastName
				}`}</h2>
				<p className='title'>
					{userDetails.company.title} at {userDetails.company.name}
				</p>
				<p>
					<strong>Email:</strong> {userDetails.email}
				</p>
				<p>
					<strong>Phone:</strong> {userDetails.phone}
				</p>
				<p>
					<strong>Username:</strong> {userDetails.username}
				</p>
				<p>
					<strong>Birth Date:</strong> {userDetails.birthDate}
				</p>
				<p>
					<strong>Age:</strong> {userDetails.age}
				</p>
				<p>
					<strong>Gender:</strong>{' '}
					{userDetails.gender[0].toUpperCase() + userDetails.gender.slice(1)}
				</p>
				<p>
					<strong>Blood Group:</strong> {userDetails.bloodGroup}
				</p>
				<p>
					<strong>Height:</strong> {userDetails.height} cm
				</p>
				<p>
					<strong>Weight:</strong> {userDetails.weight} kg
				</p>
				<p>
					<strong>Eye Color:</strong> {userDetails.eyeColor}
				</p>
				<p>
					<strong>Hair Color:</strong> {userDetails.hair.color}
				</p>
				<p>
					<strong>Hair Type:</strong> {userDetails.hair.type}
				</p>
				<p>
					<strong>Address:</strong>{' '}
					{`${userDetails.address.address}, ${userDetails.address.city}, ${userDetails.address.state}, ${userDetails.address.stateCode}, ${userDetails.address.postalCode}, ${userDetails.address.country}`}
				</p>
				<p>
					<strong>University:</strong> {userDetails.university}
				</p>
				<p>
					<strong>Company:</strong> {userDetails.company.name}
				</p>
				<p>
					<strong>Department:</strong> {userDetails.company.department}
				</p>
				<p>
					<strong>Bank Card Number:</strong> {userDetails.bank.cardNumber}
				</p>
				<p>
					<strong>Card Expire:</strong> {userDetails.bank.cardExpire}
				</p>
				<p>
					<strong>Card Type:</strong> {userDetails.bank.cardType}
				</p>
				<p>
					<strong>Card Currency:</strong> {userDetails.bank.currency}
				</p>
				<p>
					<strong>IBAN:</strong> {userDetails.bank.iban}
				</p>
				<p>
					<strong>Crypto Coin:</strong> {userDetails.crypto.coin}
				</p>
				<p>
					<strong>Crypto Wallet:</strong> {userDetails.crypto.wallet}
				</p>
				<p>
					<strong>Crypto Network:</strong> {userDetails.crypto.network}
				</p>
				<p>
					<strong>Role:</strong> {userDetails.role}
				</p>
			</div>
		</div>
	)
}

export default Profile
