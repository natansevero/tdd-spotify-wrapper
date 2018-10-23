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
    let fetchStub;
    let promise;

    beforeEach(() => {
        // Apenas pra verificar se o metodo foi chamado
        fetchStub = sinon.stub(global, 'fetch');
        promise = fetchStub.returnsPromise();
    });

    afterEach(() => {
        fetchStub.restore();
    });

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
            search();
            expect(fetchStub).to.have.been.calledOnce;
        });

        it('should receive the correct url to fetch', () => {
            context('passing one type', () => {
                search('Muse', 'artist');
                expect(fetchStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Muse&type=artist');

                search('Muse', 'album');
                expect(fetchStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Muse&type=album');
            });

            context('passing more than one type', () => {
                search('Muse', ['album', 'artist']);
                expect(fetchStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Muse&type=album,artist');
            });
        });

        it('should return the JSON Data from the Promise', () => {
            promise.resolves({ body: 'json' });
            const artists = search('Muse', 'artist');
            expect(artists.resolveValue).to.be.eql({ body: 'json' });
        });
    });

    describe('searchArtists', () => {
        it('should call fetch function', () => {
            searchArtists('Muse');
            expect(fetchStub).to.have.been.calledOnce;
        });

        it('should call fetc with the correct URL', () => {
            searchArtists('Muse');
            expect(fetchStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Muse&type=artist');

            searchArtists('Mutemath');
            expect(fetchStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Mutemath&type=artist');
        });
    });
});
