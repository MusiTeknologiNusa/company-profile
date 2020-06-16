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
    }

    render() {
        return (
            <div>
                <Navigation/>
                <Highlight/>
                <Question/>
                <Jobs/>
                <Whymustus/>
                <History/>
                <ContactUs/>
                <Footer/>
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

function Navigation(){
    return (
        <nav class="flex items-center justify-between flex-wrap bg-white p-6">
          <div class="flex items-center flex-shrink-0 text ml-24">
            <img src="/Logo.png" class="w-full object-cover"></img>
          </div>
          <div class="block lg:hidden">
            <button class="flex items-center px-3 py-2 border rounded text-black border-teal-400 hover:text-white hover:border-white">
              <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
            </button>
          </div>
          <div class="mr-24 ">
            
            <div class=".inset-y-0.right-0">
            <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0  mr-4 text-muten navbar-text hover:text-black ">
                Beranda
              </a>
              <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0  mr-4 text-muten navbar-text hover:text-black">
                Layanan
              </a>
            <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0  mr-4 text-muten navbar-text hover:text-black">
                Pekerjaan
              </a>
              <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-muten navbar-text hover:text-black">
                Tentang Kami
              </a>
            
            </div>
          </div>
        </nav>

    );
}

function Highlight(){
  return(
    
    <div class="flex mb-4  mt-20 ml-24 mr-24 ">
        <div class="w-3/5 ">
          <h1 class="main-text inline">Solusi Kebutuhan<br></br> Teknologi dan Multimedia</h1>
          <p class="mt-4 third-text">Jika anda ingin meningkatkan sistem produktiftas anda dengan <br></br>teknologi terkini, mungkin jasa <span class="purple">Muten</span> lah yang anda butuhkan</p>
          <button className=" hover:bg-red-700 text-white font-bold py-2 px-4 mt-10 primarybutton">Hubungi Kami</button>
        </div>
        <div class="w-2/5  ">
          <img src="illustration1.png"></img>
        </div>
    </div>
    
  );
}

function Question(){
  return(
    <div class="flex mb-4 ml-20 mr-20">
         <div class="w-full mt-32">
          <h2 class="sm:text-center sec-text">Apa yang Kami Kerjakan</h2>
        </div>
     </div>
  );
}

function Jobs(){
  return(
    <div class="container mx-auto">
    <div class="px-2 ml-20 mr-20 mt-24">
      <div class="flex -mx-2">
        <div class="w-1/3 px-20">
          <div>
            <img src="web.png"></img>
            <p class="text-center fontjobs mt-5">Websites</p>
          </div>
        </div>
        <div class="w-1/3 px-20">
          <div>
          <img src="aplikasi.png"></img>
            <p class="text-center fontjobs mt-5">Apps</p>
          </div>
        </div>
        <div class="w-1/3 px-20">
          <div>
            <img src="mult.png"></img>
            <p class="text-center fontjobs mt-5">Multimedia</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

function Whymustus(){
  return(
    <div class="container mx-auto">
    <div class="flex mb-4  mt-30 ml-15 mt-40">
        <div class="w-3/5 px-20 ">
          <img src="describe.png" class="w-full object-cover"></img>
        </div>
        <div class="w-2/5 ">
          <h2 class="sec-text">Kenapa Anda Harus<br></br>Menggunakan Jasa Kami</h2>
          <h4 class="fourth-text mt-5">Muten sangat peduli dengan Client kami yang <br></br> menginginkan fungisonal dan kualitas produk</h4>
          <ul>
            <li class="mt-2">
              <img class="inline" src="check.png"></img><span  class="list-text ml-4">Profesional</span>
            </li>
            <li class="mt-2">
              <img class="inline" src="check.png"></img><span  class="list-text ml-4">Kompeten</span>
            </li>
            <li class="mt-2">
              <img class="inline" src="check.png"></img><span  class="list-text ml-4">Berkualitas</span>
            </li>
            <li class="mt-2">
              <img class="inline" src="check.png"></img><span  class="list-text ml-4">Terpercaya</span>
            </li>
          </ul>

        </div>
        
    </div>
    </div>
    
  );
}

function History(){
  return(
    <div class="container mx-auto">
    <div class="mt-8">
      <div class="flex mb-4 ml-20 mr-20">
          <div class="w-full mt-32">
          <h2 class="sm:text-center sec-text">Apa yang Telah Kami <br></br> Kerjakan</h2>
          <h2 class="sm:text-center fourth-text mt-8">Ini adalah sebagian dari apa yang telah kami kerjakan dengan berbagai<br></br> macam bidang</h2>
        </div>
      </div>
      <div class="px-2 ml-20 mr-20 mt-20">
        <div class="flex -mx-2">
          <div class="w-1/3 px-2">
            <div class="bg-gray-100 h-40 rounded-md"></div>
          </div>
          <div class="w-1/3 px-2">
            <div class="bg-gray-100 h-40 rounded-md"></div>
          </div>
          <div class="w-1/3 px-2">
            <div class="bg-gray-100 h-40 rounded-md"></div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

function ContactUs(){
  return(
    
    <div class="container mx-auto flex mb-4 pt-40 ">
      <div class="w-2/3 bg-white p-10 bord-10">
      <h2 class=" sec-text">Hubungi Kami Segera<br></br>Untuk Kualitas</h2>
      <h2 class="fourth-text mt-4">Hubungi kami untuk menggunakan jasa kami</h2>
      </div>
      <div class="w-1/3 bg-white p-10 bord-10">
        <button className=" hover:bg-red-700 text-white font-bold py-4 px-4 mt-10 primarybutton ">Hubungi Kami</button>
      </div>
      
    </div>
    
  );
}

function Footer(){
  return (
      <div class="container mx-auto mt-40" >
          <div class="grid grid-rows-1 ml-10 ">
              <div class="row-start-1 col-span-1 mb-20">
                  <img src="/Logo.png" alt=""/>
                  <p class="mt-6 mb-10 footer-text"><span style={{fontWeight:'bold',color:'#ab4693'}}>Muten</span> adalah tempat bagimu untuk <br/> mengembangkan usaha ke teknologi terkini</p>
                  <p class="mr-4 ml-4 footer-text" style={{display:'inline'}}>Icon</p>
                  <p class="mr-4 ml-4 footer-text" style={{display:'inline'}}>Icon</p>
                  <p class="mr-4 ml-4 footer-text" style={{display:'inline'}}>Icon</p>
                  <p class="mt-16 footer-text">©2020MusiTeknologiNusa</p>

              </div>
              <div class="row-start-1">
                  <p class="mb-5 " style={{fontWeight:'bold'}}>Layanan</p>
                  <a href="#" class="mb-5 footer-text block hover:text-black">Websites</a>
                  <a href="#" class="mb-5 footer-text block hover:text-black">Apps</a>
                  <a href="#" class="footer-text block hover:text-black">Multimedia</a>
                  
              </div>
              <div class="row-start-1">
                  <p class="mb-5" style={{fontWeight:'bold'}}>Engage</p>
                  <a href="#"  class="mb-5 footer-text block hover:text-black">Muten ?</a>
                  <a href="#"  class="mb-5 footer-text block hover:text-black" >FAQ</a>
                  <a href="#"  class="mb-5 footer-text block hover:text-black">About Us</a>
                  <a href="#"  class="mb-5 footer-text block hover:text-black">Privacy Policy</a>
                  <a href="#"  class="mb-5 footer-text block hover:text-black">Terms of Service</a>
              </div>
              <div class="row-start-1">
                  <p class="mb-5" style={{fontWeight:'bold'}}>Hubungi Kami</p>
                  <a href="a" class="mb-5 footer-text block hover:text-black">Email</a>
                  <a href="a" class="mb-5 footer-text block hover:text-black">Phone</a>
                  
              </div>
          </div>
          
      </div>
  );
}
export default connect(mapStateToProps, mapDispatchToProps)(App);