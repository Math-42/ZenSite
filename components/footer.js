import styles from '../styles/footer.css'

function Footer() {

  

	return (
		<div className="footer">
			<div className="row pr-5 pl-5 mr-5 ml-5">
				<div className="col row ">
					<a className="navbar-brand" href="#" >
						<img src="/images/NavigationBar/logo.png" width="195" height="104" />
					</a>
					<div className="col p-3">
						<span className="row">© 2020 Zenith Aerospace</span>
						<span className="row">Avenida Trabalhador São-Carlense, 400, São Carlos, SP</span>
						<span className="row">zenith.eesc@gmail.com</span>
					</div>
				</div>
				<div className="col-2 d-flex justify-content-between align-items-center">
					<a className={styles.socialIconContainer} href="https://www.facebook.com/zenitheesc">
						<img className="socialIcon" src="/images/Footer/facebook.png" width="28" height="28" />
					</a>
					<a className={styles.socialIconContainer} href="https://www.instagram.com/zenith_eesc/">
						<img className="socialIcon" src="/images/Footer/Instagram.png" width="28" height="28" />
					</a>

					<a className={styles.socialIconContainer} href="https://github.com/zenitheesc">
						<img className="socialIcon" src="/images/Footer/GitHub-Mark/PNG/GitHub-Mark-32px.png" width="28" height="28" />
					</a>

					<a  className={styles.socialIconContainer} href="https://www.linkedin.com/company/zenith-aerospace/">
						<img className="socialIcon" src="/images/Footer/LinkedIn.png" width="28" height="28" />
					</a>

				</div>
			</div>

		</div>
	)
}

export default Footer;