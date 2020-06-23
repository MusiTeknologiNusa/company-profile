import React from 'react';
import dynamic from 'next/dynamic';
import { connect } from 'react-redux';
import { decrementCounter, incrementCounter } from '~/modules/redux/actions/counterActions';
import { fetchUsers } from '~/modules/redux/actions/usersActions';
import WebImage from '~/assets/images/home/web.png';
import AppImage from '~/assets/images/home/aplikasi.png';
import MultimediaImage from '~/assets/images/home/mult.png';
import DescImage from '~/assets/images/home/describe.png';
import HLPic from '~/assets/images/home/highlightpic.png';
import logo from '~/assets/images/Header/Logo.png';
const Highlight = dynamic(() => import('~/components/Highlight/Highlight'));
const ServiceCard = dynamic(() => import('~/components/ServiceCard/ServiceCard'));
const Question = dynamic(() => import('~/components/Question/Question'));
const WhyMustUs = dynamic(() => import('~/components/WhyMustUs/WhyMustUs'));
const History = dynamic(() => import('~/components/History/History'));
const ContactUs = dynamic(() => import('~/components/ContactUs/ContactUs'));
const Footer = dynamic(() => import('~/components/Footer/Footer'));
const API_URL = process.env.API_URL;

class App extends React.Component {

	static getInitialProps() {
		return { API_URL };
	}

	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.dispatch(fetchUsers(1));
		// test PR
	}

	render() {
		return (
			<div>
				<Navigation  />
				<Highlight image={HLPic} />
				<Question />
				<div className="flex flex-col sm:flex-row">
                    <ServiceCard
                        label="Websites"
                        width="263"
                        height="192"
                        image={WebImage}/>
                    <ServiceCard
                        label="Apps"
                        width="263"
                        height="192"
                        image={AppImage}/>
                    <ServiceCard
                        label="Multimedia"
                        width="263"
                        height="192"
                        image={MultimediaImage}/>
                </div>
				<WhyMustUs image={DescImage}/>
				<History />
				<ContactUs />
				<Footer />
			</div>
		);
	}
}

const mapStateToProps = state => ({
	counter: state.counter.value,
	users_request_status: state.users.request_status,
	users_data: state.users.data
});

const mapDispatchToProps = dispatch => {
	return { dispatch };
};



function Navigation() {
	return (
		<nav className="flex items-center justify-between flex-wrap  p-6">
			<div className="md:ml-24 flex items-center flex-shrink-0 text-white mr-6">
				<img src={logo} />
			</div>
			<div className="block lg:hidden">
				<button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
					<svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
				</button>
			</div>
			<div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto lg:text-right lg:mr-16">
				<div className="text-sm lg:flex-grow">
					<a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 navbar-text text-muten hover:text-black mr-4">
						Beranda
                </a>
					<a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 navbar-text text-muten hover:text-black mr-4 lg:ml-4">
						Layanan
                </a>
					<a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 navbar-text text-muten hover:text-black lg:ml-4">
						Proyek
                </a>
					<a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 navbar-text text-muten hover:text-black lg:ml-4">
						Tentang Kami
                </a>
				</div>

			</div>
		</nav>

	);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);