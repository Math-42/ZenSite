import '../styles/global.css'
import NavBar from '../components/navBar';
import Footer from '../components/footer';

function Home() {
	return (
		<div>
			<NavBar />
			<div>
				<img src="/images/HomePage/(1) Header.png" width="100%" style={{display: "flex"}}/>
			</div>
			<Footer/>
		</div>
	)
}

export default Home;