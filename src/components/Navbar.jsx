import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';
import { useAuthContex } from '../hooks/useAuthContex';
import React from 'react';

export default function Navbar() {
	const { user } = useAuthContex();
	const { logout } = useLogout();
	return (
		<nav className={styles.navbar}>
			<ul>
				<li className={styles.title}>
					<Link to="/">myMoney</Link>
				</li>
				{!user && (
					<React.Fragment>
						<li>
							<Link to="/login">Login</Link>
						</li>
						<li>
							<Link to="/signup">Signup</Link>
						</li>
					</React.Fragment>
				)}
				{user && (
					<React.Fragment>
						<li>hello, {user.displayName}</li>
						<li>
							<button className="btn" onClick={logout}>
								Logout
							</button>
						</li>
					</React.Fragment>
				)}
			</ul>
		</nav>
	);
}
