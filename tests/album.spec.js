/* eslint-env mocha */

// getAlbum
// getAlbums
// getAlbumTracks

import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';
import SpotifyWrapper from '../src/index';

chai.use(sinonChai);
sinonStubPromise(sinon);

global.fetch = require('node-fetch');

describe('Album', () => {
    let spotify;
    let stubedFetch;
    let promise;

    beforeEach(() => {
        spotify = new SpotifyWrapper({
            token: 'foo',
        });

        stubedFetch = sinon.stub(global, 'fetch');
        promise = stubedFetch.returnsPromise();
    });

    afterEach(() => {
        stubedFetch.restore();
    });

    describe('smoke tests', () => {
        it('should have getAlbum method', () => {
            expect(spotify.album.getAlbum).to.exist;
        });

        it('should have getAlbums method', () => {
            expect(spotify.album.getAlbums).to.exist;
        });

        it('should have getTracks method', () => {
            expect(spotify.album.getTracks).to.exist;
        });
    });

    describe('getAlbum', () => {
        // verificar se o fetch ocorre
        it('should call fetch method', () => {
            spotify.album.getAlbum();
            expect(stubedFetch).to.have.been.calledOnce;
        });

        // verificar se o fetch ocorre com a URL desejada
        it('should call fetch with correct URL', () => {
            spotify.album.getAlbum('0sNOF9WDwhWunNAHPD3Baj');
            expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/albums/0sNOF9WDwhWunNAHPD3Baj');

            spotify.album.getAlbum('0sNOF9WDwhWunNAHPD3Bak');
            expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/albums/0sNOF9WDwhWunNAHPD3Bak');
        });

        // verificar se o dado é recebido pela promise
        it('should return the correct data from Promise', () => {
            promise.resolves({ album: 'name' });
            const album = spotify.album.getAlbum('0sNOF9WDwhWunNAHPD3Baj');
            expect(album.resolveValue).to.be.eql({ album: 'name' });
        });
    });

    describe('getAlbums', () => {
        it('should call fetch method', () => {
            spotify.album.getAlbums();
            expect(stubedFetch).to.have.been.calledOnce;
        });

        it('should call fecth method with correct URL', () => {
            spotify.album.getAlbums(['0sNOF9WDwhWunNAHPD3Baj', '5sNOF9JDwhWunNAHPD3Bak']);
            expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/albums/?ids=0sNOF9WDwhWunNAHPD3Baj,5sNOF9JDwhWunNAHPD3Bak');
        });

        it('should return the correct data from Promise', () => {
            promise.resolves({ albums: ['al1', 'al2'] });
            const albums = spotify.album.getAlbums(['0sNOF9WDwhWunNAHPD3Baj', '5sNOF9JDwhWunNAHPD3Bak']);
            expect(albums.resolveValue).to.be.eql({ albums: ['al1', 'al2'] });
        });
    });

    describe('getTracks', () => {
        it('should call fetch method', () => {
            spotify.album.getTracks();
            expect(stubedFetch).to.have.been.calledOnce;
        });

        it('should call fetch method with correct URL', () => {
            spotify.album.getTracks('0sNOF9WDwhWunNAHPD3Baj');
            expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/albums/0sNOF9WDwhWunNAHPD3Baj/tracks');
        });

        it('should return the correct data from Promise', () => {
            promise.resolves({ albumTracks: ['Ballads1', 'Trench'] });
            const albumTracks = spotify.album.getTracks('0sNOF9WDwhWunNAHPD3Baj');
            expect(albumTracks.resolveValue).to.be.eql({ albumTracks: ['Ballads1', 'Trench'] });
        });
    });
});
