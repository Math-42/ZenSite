import '../styles/footer.css'

function Footer() {



	return (
		<div className="footer">
			<div className="footer--leftSide">
				<a className="" href="#" >
					<img src="/images/NavigationBar/logo.png" width="195" height="104" />
				</a>

				<div className="footer--data">
					<span >© 2020 Zenith Aerospace</span>
					<span >Avenida Trabalhador São-Carlense, 400, São Carlos, SP</span>
					<span >zenith.eesc@gmail.com</span>
				</div>
			</div>

			<div>
				<button className="socialIconContainer" href="https://www.facebook.com/zenitheesc">
					<img className="socialIcon" src="/images/Footer/facebook.png" />
				</button>
				<button className="socialIconContainer" href="https://www.instagram.com/zenith_eesc/">
					<img className="socialIcon" src="/images/Footer/Instagram.png" />
				</button>

				<button className="socialIconContainer" href="https://github.com/zenitheesc">
					<img className="socialIcon" src="/images/Footer/GitHub-Mark/PNG/GitHub-Mark-32px.png" />
				</button>

				<button className="socialIconContainer" href="https://www.linkedin.com/company/zenith-aerospace/">
					<img className="socialIcon" src="/images/Footer/LinkedIn.png" />
				</button>
			</div>

		</div>
	)
}

export default Footer;