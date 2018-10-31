import SpotifyWrapper from '../src/index';

global.fetch = require('node-fetch');

const spotify = new SpotifyWrapper({
    token: 'YOUR_TOKEN_HERE',
});

const albums = spotify.search.albums('Muse');

albums.then(data => data.albums.items.map(item => console.log(item.name)));
