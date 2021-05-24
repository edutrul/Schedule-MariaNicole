const fetch = require('node-fetch');
const base_url = 'https://api.siteimprove.com/';


// editor; https://simplejsoncms.com/editor/rnxdkwh5oin
fetch('https://simplejsoncms.com/api/rnxdkwh5oin').then(res => res.json()).then(data => {console.log(data) });

