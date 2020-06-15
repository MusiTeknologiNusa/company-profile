import App from 'next/app';
import { Provider } from 'react-redux';
import React from 'react';
import withRedux from 'next-redux-wrapper';
import store from '~/modules/redux/store';
import { metricEvent } from '~/utils/firebase/analytics/webVitals';

import '~/assets/styles/index.css';

export function reportWebVitals(metric) {

    const eventName = `${metric.name}_${window.location.pathname}`;

    switch (metric.name) {
        case 'FCP': // First Contentful Paint
            metricEvent(eventName, metric.value);
            console.log(`First Contentful Paint: ${metric.value}`);
            break;
        case 'LCP': // Largest Contentful Paint
            metricEvent(eventName, metric.value);
            console.log(`Largest Contentful Paint: ${metric.value}`);
            break;
        case 'CLS': // Cumulative Layout Shift
            metricEvent(eventName, metric.value);
            console.log(`Cumulative Layout Shift: ${metric.value}`);
            break;
        case 'FID': // First Input Delay
            metricEvent(eventName, metric.value);
            console.log(`First Input Delay: ${metric.value}`);
            break;
        case 'TTFB': // Time to First Byte
            metricEvent(eventName, metric.value);
            console.log(`Time to First Byte: ${metric.value}`);
            break;
        case 'Next.js-render':
            console.log(metric);
            break;
    }
}

class MyApp extends App {

    static async getInitialProps({ Component, ctx }) {
        const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

        //Anything returned here can be accessed by the client
        return { pageProps: pageProps };
    }

    render() {
        //pageProps that were returned  from 'getInitialProps' are stored in the props i.e. pageprops
        const { Component, pageProps, store } = this.props;

        return (
            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
        );
    }
}

//makeStore function that returns a new store for every request
const makeStore = () => store;

//withRedux wrapper that passes the store to the App Component
export default withRedux(makeStore)(MyApp);