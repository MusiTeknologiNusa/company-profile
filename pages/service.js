import React from 'react';
import dynamic from 'next/dynamic';
import Router from 'next/router';

import Navigation from '~/components/Navigation';
// import ServiceCard from '~/components/ServiceCard';

const ServiceCard = dynamic(() => import('~/components/ServiceCard/ServiceCard'));

import WebImage from '~/assets/images/home/web.png';
import AppImage from '~/assets/images/home/aplikasi.png';
import MultimediaImage from '~/assets/images/home/mult.png';

class Service extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: null,
            counter: 0
        };
    }

    UNSAFE_componentWillMount() {
        console.log('WILL MOUNT');
        fetch('https://jsonplaceholder.typicode.com/todos/2')
            .then(response => response.json())
            .then(json => {
                console.log('SET STATE WILL MOUNT');
                this.setState({ data: json });
            });
    }

    // fetch API
    componentDidMount() {
        console.log('DID MOUNT');
        // console.log(document.getElementById('container'));
        // setTimeout(() => {
        //     fetch('https://jsonplaceholder.typicode.com/todos/1')
        //         .then(response => response.json())
        //         .then(json => {

        //             // trigger re-render
        //             this.setState({ data: json });
        //         });
        // }, 2000);
    }

    clickMe() {
        let count = this.state.counter;
        this.setState({ counter: count + 1 }, () => {
            fetch(`https://jsonplaceholder.typicode.com/todos/${this.state.counter}`)
                .then(response => response.json())
                .then(json => {

                    // trigger re-render
                    this.setState({ data: json });
                    Router.push('/');
                });
        });
    }

    render() {
        console.log('RENDER');
        const data = this.state.data;
        return (
            <div className="w-full h-screen bg-yellow-200 flex flex-col">
                <button onClick={() => this.clickMe()} type="button">Click me {this.state.counter}</button>
                <div>Data: {data && data.title}</div>
                <div className="flex flex-row">
                    <ServiceCard
                        label="Website"
                        width="263"
                        height="192"
                        image={WebImage}/>
                    <ServiceCard
                        label="Aplikasi"
                        width="263"
                        height="192"
                        image={AppImage}/>
                    <ServiceCard
                        label="Multimedia"
                        width="263"
                        height="192"
                        image={MultimediaImage}/>
                </div>
                <div className="flex flex-row">
                    <ServiceCard
                        label="Website"
                        width="263"
                        height="192"
                        image={WebImage}/>
                    <ServiceCard
                        label="Aplikasi"
                        width="263"
                        height="192"
                        image={AppImage}/>
                    <ServiceCard
                        label="Multimedia"
                        width="263"
                        height="192"
                        image={MultimediaImage}/>
                </div>
                <div className="flex justify-center bg-blue-500 flex-grow">
                    <ServiceCard
                        label="Multimedia"
                        width="263"
                        height="192"
                        image={MultimediaImage}/>
                </div>
                <div className="flex justify-center bg-red-500 flex-grow">
                    <ServiceCard
                        label="Multimedia"
                        width="263"
                        height="192"
                        image={MultimediaImage}/>
                </div>
                <div className="flex justify-center bg-green-500 flex-grow">
                    <ServiceCard
                        label="Multimedia"
                        width="263"
                        height="192"
                        image={MultimediaImage}/>
                </div>
            </div>
        );
    }

}

export default Service;