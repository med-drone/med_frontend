import React, { useState } from 'react';
import axios from 'axios';

function Login() {
	const [loginData, setLoginData] = useState();
	function handleChange(event) {
		setLoginData({
			...loginData,
			[event.target.id]: event.target.value.toLowerCase(),
		});
	}
	function handleSubmit(event) {
        event.preventDefault();
		axios({
			method: 'post',
			url: 'http://localhost:4000/users/login',
			data: {
				...loginData,
			},
		})
        .then(res => {
            console.log(res);
        })
        .catch(error => {
            console.log(error);
        })
        ;
	}

	return (
		<div className='login'>
			<form onSubmit={handleSubmit}>
				<input
					name='email'
					type='email'
					id='email'
					placeholder='Email Address'
					required
					onChange={handleChange}
				/>
				<input
					name='password'
					type='password'
					id='password'
					placeholder='Password'
					required
					onChange={handleChange}
				/>
				<input type='submit' />
			</form>
		</div>
	);
}

export default Login;
