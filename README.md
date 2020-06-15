# nextjs-starter
This is NextJS framework starter code with SSR enabled, Tailwind CSS with PurgeCSS preconfigured, and react-redux installed.
Before using this starter code, you must install Yarnpkg

`
npm install -g yarn
`

## Running the code
Development mode<br/>
`
yarn dev
`

Built version in development mode<br/>
`
yarn deploy:dev
`

Built version in production mode<br/>
`
yarn deploy:prod
`

## Integrate with Firebase Analytics
This starter code also has Firebase Analytics installed for you, with web vital metrics being logged to firebase on `pages/_app.js`.
You must provide your firebase configurations on `.env.development` or `.env.production` file like this

<pre>
NEXT_PUBLIC_FIREBASE_API_KEY=&lt;Your firebase API KEY&gt;
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=&lt;Your firebase AUTH DOMAIN&gt;
NEXT_PUBLIC_FIREBASE_DATABASE_URL=&lt;Your firebase DATABASE URL&gt;
NEXT_PUBLIC_FIREBASE_PROJECT_ID=&lt;Your firebase PROJECT ID&gt;
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=&lt;Your firebase STORAGE BUCKET&gt;
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=&lt;Your firebase MESSAGING SENDER ID&gt;
NEXT_PUBLIC_FIREBASE_APP_ID=&lt;Your firebase APP ID&gt;
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=&lt;Your firebase MEASUREMENT ID&gt;
</pre>

The default metrics being logged are FCP, LCP, CLS, FID, and TTFD on every page (See: [Web Vitals](https://web.dev/vitals/#core-web-vitals)). For example, if you access `http://localhost:3000`, you can see on your analytics dashboard on StreamView an event named `FCP_/`. 

![alt text](https://github.com/azhry/nextjs-starter/blob/master/assets/images/firebase.JPG?raw=true)

These logs will be useful if you want to track and monitor your website performance.


<hr/>
&copy; Azhary Arliansyah
