import { Route, Routes, Navigate } from 'react-router-dom';

import Home from './pages/home/Home';
import Signup from './pages/signup/Signup';
import Login from './pages/login/Login';
import Navbar from './components/Navbar';
import { useAuthContex } from './hooks/useAuthContex';
import React from 'react';

export default function App() {
	const { authIsReady, user } = useAuthContex();
	return (
		<div className="App">
			{authIsReady && (
				<React.Fragment>
					<Navbar />
					<Routes>
						<Route path="/" element={user ? <Home /> : <Navigate replace to="/login" />} />
						<Route path="/login" element={!user ? <Login /> : <Navigate replace to="/" />} />
						<Route path="/signup" element={<Signup />} />
					</Routes>
				</React.Fragment>
			)}
		</div>
	);
}
