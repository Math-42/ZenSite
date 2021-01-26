
import '../styles/navBar.css'
import React, { useState, useEffect } from 'react';

function NavBar() {
	const [openMenu, setClick] = useState(true);
	const [showMenu, setMenu] = useState(true);

	const setMenuVisible = () => setMenu(!showMenu);
	const handleClick = () => setClick(!openMenu);


	useEffect(function onFirstMount() {
		const showMenu = () => {
			if (window.innerWidth <= 1100) {
				setMenu(false);
				setClick(false);
			} else {
				setMenu(true);
				setClick(true);
			}
		};

		showMenu();

		window.addEventListener("resize", showMenu);
	}, []);


	return (
		<div className="navbar--container">
			<a href="./">
				<img className="navbar--icon" src="/images/NavigationBar/logo.png" />
			</a>

			<div>
				<ul className={["itensContainer",
								 showMenu ? "itensContainer--list" : "itensContainer--menu",
								 (showMenu || openMenu) ? "itensContainer--active" : "itensContainer--deactive"
								 ].join(" ")}>
					<li className="navbar--item">
						<a href="./oZenith">O ZENITH</a>
					</li>
					<li className="navbar--item">
						<a href="./projetos">PROJETOS</a>
					</li>
					<li className="navbar--item">
						<a href="./kurumim">KURUMIM</a>
					</li>
					<li className="navbar--item">
						<a href="./processoSeletivo">PROCESSO SELETIVO</a>
					</li>
					<li className="navbar--item">
						<a href="./contato">CONTATO</a>
					</li>
				</ul>
			</div>

			<div className={showMenu ? 'menu-icon-deactive':'menu-icon-active'} onClick={handleClick}>
				<a onClick={handleClick}>{openMenu? "CL":"OP"}</a>
			</div>
		</div>
	)
}

export default NavBar;