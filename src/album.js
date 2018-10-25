import spotifyoauthtoken from '../keys';
import API_URL from './config';
import toJSON from './utils';

export const getAlbum = id => global.fetch(`${API_URL}/albums/${id}`, {
    headers: {
        Authorization: `Bearer ${spotifyoauthtoken}`,
    },
}).then(toJSON);

export const getAlbums = ids => global.fetch(`${API_URL}/albums/?ids=${ids}`, {
    headers: {
        Authorization: `Bearer ${spotifyoauthtoken}`,
    },
}).then(toJSON);

export const getAlbumTracks = id => global.fetch(`${API_URL}/albums/${id}/tracks`, {
    headers: {
        Authorization: `Bearer ${spotifyoauthtoken}`,
    },
}).then(toJSON);
