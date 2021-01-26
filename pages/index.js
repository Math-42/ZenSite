import styles from '../styles/global.css'
import NavBar from '../components/navBar';
import Footer from '../components/footer';

function Home() {
	return (
		<div className={styles.body}>
			<NavBar />
			<div>
				<img src="/images/HomePage/(1) Header.png" width="100%" />
			</div>
		</div>
	)
}

export default Home;