import styles from './Login.module.css';
import { useState } from 'react';
export default function Login() {
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');

	const handleFormSubmit = (e) => {
		e.preventDefault();
		console.log(email, password);
	};
	return (
		<form className={styles['login-form']} onSubmit={handleFormSubmit}>
			<h2>Login</h2>
			<label>
				<span>email:</span>
				<input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
			</label>
			<label>
				<span>passwords:</span>
				<input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
			</label>
			<button className="btn">Login</button>
		</form>
	);
}
