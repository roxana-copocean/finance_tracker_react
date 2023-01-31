import styles from './Home.module.css';
import TransactionForm from './TransactionForm';
import { useAuthContex } from '../../hooks/useAuthContex';

export default function Home() {
	const { user } = useAuthContex();
	return (
		<div className={styles.container}>
			<div className={styles.content}>transactions list</div>
			<div className={styles.sidebar}>
				<TransactionForm uid={user.uid} />
			</div>
		</div>
	);
}
