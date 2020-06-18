import React from 'react';
import { connect } from 'react-redux';
import { decrementCounter, incrementCounter } from '~/modules/redux/actions/counterActions';
import { fetchUsers } from '~/modules/redux/actions/usersActions';

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
				<Navigation />
				<Highlight />
				<Question />
				<Jobs />
				<Whymustus />
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
				<img src="Logo.png" />
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
						Pekerjaan
                </a>
					<a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 navbar-text text-muten hover:text-black lg:ml-4">
						Tentang Kami
                </a>
				</div>

			</div>
		</nav>

	);
}


function Highlight() {
	return (
		<div className="flex md:flex-row-reverse flex-wrap mt-8 ">
			<div className="w-full sm:w-2/5  p-4  text-gray-200">
				<img src="illustration1.png" className="w-auto lg:w-11/12 "></img>
			</div>
			<div className="w-full text-center sm:w-3/5  p-4 sm:text-left  text-gray-700">
				<h1 className="main-text inline ml-0 md:ml-20">Solusi Kebutuhan<br></br> <span className="ml-0 md:ml-20">Teknologi dan <span className="md:ml-20 lg:ml-0">Multimedia</span></span></h1>
				<p className="mt-4 third-text md:ml-20">Jika anda ingin meningkatkan sistem produktiftas anda dengan <br></br>teknologi terkini, mungkin jasa <span className="purple">Muten</span> lah yang anda butuhkan</p>
				<button className=" hover:bg-red-700 text-white font-bold py-2 px-4 mt-10 primarybutton md:ml-20">Hubungi Kami</button>
			</div>
		</div>
	);
}
function Question() {
	return (
		<div className="flex mb-4 ml-20 mr-20 md:ml-40">
			<div className="w-full mt-32 ">
				<h2 className="text-center sec-text">Apa yang Kami Kerjakan</h2>
			</div>
		</div>
	);
}

function Jobs() {
	return (
		<div className="flex  flex-wrap lg:ml-40 lg:mr-40">
			<div className="w-full  sm:w-1/3 bg-grey-100 p-4 ">
				<center><img src="web.png" className="w-auto mt-10 lg:mt-0 "></img></center>
				<p className="text-center fontjobs mt-5">Websites</p>
			</div>
			<div className="w-full sm:w-1/3 bg-grey-100 p-4 text-gray-200">
				<center><img src="aplikasi.png" className="ml-8 mt-10 sm:ml-12 lg:mt-0"></img></center>
				<p className="text-center fontjobs mt-5 md:mt-1 md:ml-24 lg:mt-10 lg:ml-0 ">Apps</p>
			</div>
			<div className="w-full sm:w-1/3 bg-grey-100 p-4 text-gray-200">
				<center><img src="mult.png" className="ml-4 mt-10 sm:ml-12 lg:mt-0"></img></center>
				<p className="text-center fontjobs ml-4 mt-5  md:ml-16 lg:mt-10 lg:ml-4">Multimedia</p>
			</div>
		</div>
	);
}



function Whymustus() {
	return (
		<div className="flex  flex-wrap mt-8">
			<div className="w-full sm:w-3/5  p-4  text-gray-200">
				<img src="describe.png" className="lg:ml-40 md:ml-0 sm:mt-12"></img>
			</div>
			<div className="w-full text-center sm:w-2/5  p-4 sm:text-left  sm:mt-12 text-gray-700">
				<h2 className="sec-text">Kenapa Anda Harus<br></br>Menggunakan Jasa Kami</h2>
				<h4 className="fourth-text mt-5">Muten sangat peduli dengan Client kami yang <br></br> menginginkan fungisonal dan kualitas produk</h4>
				<ul className="ml-12 mt-8 sm:ml-0 text-left">
					<li className="mt-2">
						<img className="inline" src="check.png"></img><span className="list-text ml-4">Profesional</span>
					</li>
					<li className="mt-2">
						<img className="inline" src="check.png"></img><span className="list-text ml-4">Kompeten</span>
					</li>
					<li className="mt-2">
						<img className="inline" src="check.png"></img><span className="list-text ml-4">Berkualitas</span>
					</li>
					<li className="mt-2">
						<img className="inline" src="check.png"></img><span className="list-text ml-4">Terpercaya</span>
					</li>
				</ul>

			</div>
		</div>
	);
}

function History() {
	return (
		<div className="container mx-auto">
			<div className="mt-8">
				<div className="flex mb-4 ml-20 mr-20">
					<div className="w-full mt-16">
						<h2 className="text-center sm:text-center sec-text text-muten">Apa yang Telah Kami <br></br> Kerjakan</h2>
						<h2 className="text-center sm:text-center fourth-text mt-8">Ini adalah sebagian dari apa yang telah kami kerjakan dengan berbagai<br></br> macam bidang</h2>
					</div>
				</div>
				<div className="px-2 ml-20 mr-20 mt-20">
					<div className="flex -mx-2">
						<div className="w-full sm:w-1/3 px-2">
							<div className="bg-gray-100 h-40 rounded-md"></div>
						</div>
						<div className="sm:w-1/3 px-2">
							<div className="bg-gray-100 h-40 rounded-md"></div>
						</div>
						<div className="sm:w-1/3 px-2">
							<div className="bg-gray-100 h-40 rounded-md"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}


function ContactUs() {
	return (
		<div className="flex  flex-wrap mt-8 lg:ml-40 lg:mr-40 lg:mt-40 md:ml-8 md:mr-8">
			<div className="w-full md:w-3/5  p-4  bg-white text-gray-200 md:rounded-lg">
				<h2 className=" sec-text text-center md:text-left">Hubungi Kami Segera<br></br>Untuk Kualitas</h2>
				<h2 className="fourth-text mt-4 text-center md:text-left">Hubungi kami untuk menggunakan jasa kami</h2>
			</div>
			<div className="w-full text-center md:w-2/5 bg-white p-4 md:rounded-lg">
				<button className=" hover:bg-red-700 text-white font-bold py-4 px-4 mt-10 primarybutton ">Hubungi Kami</button>

			</div>

		</div>

	);
}

function Footer() {
	return (
		<div className="flex  flex-wrap mt-8  lg:mt-40 md:ml-8 md:mr-8">
			<div className="w-full text-justify md:w-2/5 md:text-left p-4 text-gray-200">
				<img src="/Logo.png" alt="" />
				<p className="mt-6 mb-10 footer-text"><span style={{ fontWeight: 'bold', color: '#ab4693' }}>Muten</span> adalah tempat bagimu untuk <br /> mengembangkan usaha ke teknologi terkini</p>
				<p className="mr-4 ml-2 footer-text" style={{ display: 'inline' }}>Icon</p>
				<p className="mr-4 ml-2 footer-text" style={{ display: 'inline' }}>Icon</p>
				<p className="mr-4 ml-2 footer-text" style={{ display: 'inline' }}>Icon</p>
				<p className="mt-16 footer-text text-center sm:text-left">©2020MusiTeknologiNusa</p>

			</div>
			<div className="w-1/3 text-left md:w-1/5 p-4 ">
				<p className="mb-5 " style={{ fontWeight: 'bold' }}>Layanan</p>
				<a href="#" className="mb-5 footer-text block hover:text-black">Websites</a>
				<a href="#" className="mb-5 footer-text block hover:text-black">Apps</a>
				<a href="#" className="footer-text block hover:text-black">Multimedia</a>
			</div>
			<div className="w-1/3 text-left md:w-1/5  p-4 ">
				<p className="mb-5" style={{ fontWeight: 'bold' }}>Engage</p>
				<a href="#" className="mb-5 footer-text block hover:text-black">Muten ?</a>
				<a href="#" className="mb-5 footer-text block hover:text-black" >FAQ</a>
				<a href="#" className="mb-5 footer-text block hover:text-black">About Us</a>
				<a href="#" className="mb-5 footer-text block hover:text-black">Privacy Policy</a>
				<a href="#" className="mb-5 footer-text block hover:text-black">Terms of Service</a>
			</div>
			<div className="w-1/3 text-left md:w-1/5  p-4 ">
				<p className="mb-5" style={{ fontWeight: 'bold' }}>Hubungi Kami</p>
				<a href="a" className="mb-5 footer-text block hover:text-black">Email</a>
				<a href="a" className="mb-5 footer-text block hover:text-black">Phone</a>
			</div>
		</div>
	);
}


export default connect(mapStateToProps, mapDispatchToProps)(App);