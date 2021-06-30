import { Link } from 'react-router-dom';

function Header(props) {

	return (
		<div className="flex justify-between px-5 md-px-l5 py-4 sticky z-50">
            
			<div>
				<Link className="underline" to="/" onClick={props.homeTransition}>
					<h3>Andersonweb.dev</h3>
				</Link>
			</div>

			<div>
				<a target="_blank" rel="noreferrer" className=" mx-2 md-mx-5 hover-underline" href="https://instagram.com/andersonwebdev/">
                    <img className="w-5" src="/images/instagram.svg" alt="" />
                </a>
				<a target="_blank" rel="noreferrer" className=" mx-2 md-mx-5 hover-underline" href="https://github.com/andersonjoseph">
                    <img className="w-5" src="/images/github.svg" alt="" />
                </a>
				<a target="_blank" rel="noreferrer" className=" ml-2 md-ml-5 hover-underline" href="mailto:andersonjoseph@mailfence.com">
                    <img className="w-5" src="/images/email.svg" alt="" />
                </a>
			</div>
		</div>

	)
}

export default Header;