/* eslint-env mocha */
import { expect } from 'chai';
import {
    search, searchAlbums, searchArtists, searchTracks, searchPlaylists,
} from '../src/main';
// import spotifyoauthtoken from '../keys';

describe('Spotify Wrapper', () => {
    describe('smoke tests', () => {
        // search (generic) more taht one type
        // searchAlbums
        // searchArtists
        // searchTracks
        // searchPlaylists

        it('should exists the search method', () => {
            expect(search).to.exist;
        });

        it('should exists the searchAlbums method', () => {
            expect(searchAlbums).to.exist;
        });

        it('should exists the searchArtists method', () => {
            expect(searchArtists).to.exist;
        });

        it('should exists the searchTracks method', () => {
            expect(searchTracks).to.exist;
        });

        it('should exists the searchPlaylists method', () => {
            expect(searchPlaylists).to.exist;
        });
    });
});
