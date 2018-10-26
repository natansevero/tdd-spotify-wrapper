import API_URL from './config';
import toJSON from './utils';

export const getAlbum = (id, spotifyoauthtoken) => global.fetch(`${API_URL}/albums/${id}`, {
    headers: {
        Authorization: `Bearer ${spotifyoauthtoken}`,
    },
}).then(toJSON);

export const getAlbums = (ids, spotifyoauthtoken) => global.fetch(`${API_URL}/albums/?ids=${ids}`, {
    headers: {
        Authorization: `Bearer ${spotifyoauthtoken}`,
    },
}).then(toJSON);

export const getAlbumTracks = (id, spotifyoauthtoken) => global.fetch(`${API_URL}/albums/${id}/tracks`, {
    headers: {
        Authorization: `Bearer ${spotifyoauthtoken}`,
    },
}).then(toJSON);
