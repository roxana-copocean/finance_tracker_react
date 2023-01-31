import userEvent from '@testing-library/user-event';
import React, { useState } from 'react';
import { useFirestore } from '../../hooks/useFirestore';

export default function TransactionForm({ uid }) {
	const [ name, setName ] = useState('');
	const [ amount, setAmount ] = useState('');
	const { addDocument, response } = useFirestore('transactions');

	const handleFormSubmit = (e) => {
		e.preventDefault();
		addDocument({
			uid,
			name,
			amount
		});
	};
	return (
		<React.Fragment>
			<h3>Add a Transaction</h3>
			<form onSubmit={handleFormSubmit}>
				<label>
					<span>Transaction name: </span>
					<input type="text" value={name} required onChange={(e) => setName(e.target.value)} />
				</label>
				<label>
					<span>Amount ($): </span>
					<input type="number" value={amount} required onChange={(e) => setAmount(e.target.value)} />
				</label>
				<button>Add Transaction</button>
			</form>
		</React.Fragment>
	);
}
