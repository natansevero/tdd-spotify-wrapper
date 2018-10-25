import spotifyoauthtoken from '../keys';
import API_URL from './config';
import toJSON from './utils';

export const search = (query, type) => global.fetch(`${API_URL}/search?q=${query}&type=${type}`, {
    headers: {
        Authorization: `Bearer ${spotifyoauthtoken}`,
    },
}).then(toJSON);

export const searchArtists = query => search(query, 'artist');

export const searchAlbums = query => search(query, 'album');

export const searchTracks = query => search(query, 'track');

export const searchPlaylists = query => search(query, 'playlist');
