import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/global.module.css'
import NavBar from '../components/navBar';
import Footer from '../components/footer';

function Home() {
	return (
		<div className={styles.body}>
			<NavBar />
			<div>
				<img src="/images/HomePage/(1) Header.png" width="100%" />
			</div>
			<Footer>
				footer
			</Footer>
		</div>
	)
}

export default Home;