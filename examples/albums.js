import { searchAlbums } from '../src';

global.fetch = require('node-fetch');

const albums = searchAlbums('Muse', 'YOUR_TOKEN_HERE');

albums.then(data => data.albums.items.map(item => console.log(item.name)));
