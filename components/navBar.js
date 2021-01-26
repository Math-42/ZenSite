import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/navBar.module.css'

function NavBar() {
	return (
		<div className={["navbar", "navbar-expand-sm",styles.navbar].join(' ')}>
			<a className="navbar-brand ml-3 pt-0" href="./">
				<img src="/images/NavigationBar/logo.png" width="188" height="100" />
			</a>

			<div className="collapse navbar-collapse" id="navbarNav">
				<ul className="navbar-nav ml-auto">
					<li className="nav-item">
						<a className="nav-link" href="./oZenith">O ZENITH</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="./projetos">PROJETOS</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="./kurumim">KURUMIM</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="./processoSeletivo">PROCESSO SELETIVO</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="./contato">CONTATO</a>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default NavBar;