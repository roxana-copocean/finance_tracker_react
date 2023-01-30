import styles from './Signup.module.css';
import { useState } from 'react';
import { useSignup } from '../../hooks/useSignup';

export default function Signup() {
	const [ name, setName ] = useState('');
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const { error, isPending, signup } = useSignup();

	const handleSignup = (e) => {
		e.preventDefault();
		signup(name, email, password);
	};
	return (
		<form className={styles['signup-form']} onSubmit={handleSignup}>
			<h2>Signup</h2>
			<label>
				<span>name:</span>
				<input type="text" value={name} onChange={(e) => setName(e.target.value)} />
			</label>

			<label>
				<span>email:</span>
				<input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
			</label>
			<label>
				<span>passwords:</span>
				<input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
			</label>
			{!isPending && <button className="btn">Signup</button>}
			{error && <p className="error">{error}</p>}
			{isPending && (
				<button className="btn" disabled>
					Loading...
				</button>
			)}
		</form>
	);
}
