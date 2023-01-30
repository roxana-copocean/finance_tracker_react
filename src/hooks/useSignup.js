// SIGNUP HOOK

import { useState, useEffect } from 'react';
import { projectAuth } from '../firebase/config';
import { useAuthContex } from './useAuthContex';

export const useSignup = () => {
	const [ isCancelled, setIsCancelled ] = useState(false);
	const [ error, setError ] = useState(null);
	const [ isPending, setIsPending ] = useState(false);
	const { dispatch } = useAuthContex();

	const signup = async (name, email, password) => {
		setError(null);
		setIsPending(true);
		try {
			// signup the user
			const res = await projectAuth.createUserWithEmailAndPassword(email, password);

			if (!res) {
				throw new Error('Could not complete signup!');
			}
			// add display name to user
			await res.user.updateProfile({ displayName: name });

			// dispatch login action
			dispatch({ type: 'LOGIN', payload: res.user });
			if (!isCancelled) {
				setIsPending(false);
				setError(null);
			}
		} catch (err) {
			if (!isCancelled) {
				console.log(err.message);
				setError(err.message);
				setIsPending(false);
			}
		}
	};

	useEffect(() => {
		return () => setIsCancelled(true);
	}, []);
	return {
		error,
		isPending,
		signup
	};
};
