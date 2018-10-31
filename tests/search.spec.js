/* eslint-env mocha */
import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';
import SpotifyWrapper from '../src/index';

chai.use(sinonChai);
sinonStubPromise(sinon);

global.fetch = require('node-fetch');

describe('Search', () => {
    let spotify;
    let fetchStub;
    let promise;

    beforeEach(() => {
        spotify = new SpotifyWrapper({
            token: 'foo',
        });
        // Apenas pra verificar se o metodo foi chamado
        fetchStub = sinon.stub(global, 'fetch');
        promise = fetchStub.returnsPromise();
    });

    afterEach(() => {
        fetchStub.restore();
    });

    describe('smoke tests', () => {
        // searchAlbums
        // searchArtists
        // searchTracks
        // searchPlaylists

        it('should exists the spotify.search.albums method', () => {
            expect(spotify.search.albums).to.exist;
        });

        it('should exists the spotify.search.artists method', () => {
            expect(spotify.search.artists).to.exist;
        });

        it('should exists the spotify.search.tracks method', () => {
            expect(spotify.search.tracks).to.exist;
        });

        it('should exists the spotify.search.playlists method', () => {
            expect(spotify.search.playlists).to.exist;
        });
    });

    describe('spotify.search.artists', () => {
        it('should call fetch function', () => {
            spotify.search.artists('Muse');
            expect(fetchStub).to.have.been.calledOnce;
        });

        it('should call fetc with the correct URL', () => {
            spotify.search.artists('Muse');
            expect(fetchStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Muse&type=artist');

            spotify.search.artists('Mutemath');
            expect(fetchStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Mutemath&type=artist');
        });
    });

    describe('spotify.search.albums', () => {
        it('should call fetch function', () => {
            spotify.search.albums('Muse');
            expect(fetchStub).to.have.been.calledOnce;
        });

        it('should call fetc with the correct URL', () => {
            spotify.search.albums('Muse');
            expect(fetchStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Muse&type=album');

            spotify.search.albums('Mutemath');
            expect(fetchStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Mutemath&type=album');
        });
    });

    describe('spotify.search.tracks', () => {
        it('should call fetch function', () => {
            spotify.search.tracks('Muse');
            expect(fetchStub).to.have.been.calledOnce;
        });

        it('should call fetc with the correct URL', () => {
            spotify.search.tracks('Muse');
            expect(fetchStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Muse&type=track');

            spotify.search.tracks('Mutemath');
            expect(fetchStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Mutemath&type=track');
        });
    });

    describe('spotify.search.playlists', () => {
        it('should call fetch function', () => {
            spotify.search.playlists('Muse');
            expect(fetchStub).to.have.been.calledOnce;
        });

        it('should call fetc with the correct URL', () => {
            spotify.search.playlists('Muse');
            expect(fetchStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Muse&type=playlist');

            spotify.search.playlists('Mutemath');
            expect(fetchStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Mutemath&type=playlist');
        });
    });
});
