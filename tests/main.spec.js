/* eslint-env mocha */
import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';
import {
    search, searchAlbums, searchArtists, searchTracks, searchPlaylists,
} from '../src/main';

chai.use(sinonChai);
sinonStubPromise(sinon);

global.fetch = require('node-fetch');

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

    describe('Generic Search', () => {
        it('should call fetch function', () => {
            // Apenas pra verificar se o metodo foi chamado
            const fetchStub = sinon.stub(global, 'fetch');
            search();
            expect(fetchStub).to.have.been.calledOnce;
            fetchStub.restore();
        });

        it('should receive the correct url to fetch', () => {
            const fetchStub = sinon.stub(global, 'fetch');

            search('Muse', 'artist');
            expect(fetchStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Muse&type=artist');

            search('Muse', 'album');
            expect(fetchStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Muse&type=album');

            fetchStub.restore();
        });
    });
});
