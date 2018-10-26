import API_URL from './config';
import toJSON from './utils';

export const search = (query, type, spotifyoauthtoken) => global.fetch(`${API_URL}/search?q=${query}&type=${type}`, {
    headers: {
        Authorization: `Bearer ${spotifyoauthtoken}`,
    },
}).then(toJSON);

export const searchArtists = (query, spotifyoauthtoken) => search(query, 'artist', spotifyoauthtoken);

export const searchAlbums = (query, spotifyoauthtoken) => search(query, 'album', spotifyoauthtoken);

export const searchTracks = (query, spotifyoauthtoken) => search(query, 'track', spotifyoauthtoken);

export const searchPlaylists = (query, spotifyoauthtoken) => search(query, 'playlist', spotifyoauthtoken);
