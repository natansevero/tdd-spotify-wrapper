/* eslint-env mocha */

// getAlbum
// getAlbumTracks

import { expect } from 'chai';
import { getAlbum, getAlbumTracks } from '../src/album';

describe('Album', () => {
    describe('smoke tests', () => {
        it('should have getAlbum method', () => {
            expect(getAlbum).to.exist;
        });

        it('should have getAlbumTracks method', () => {
            expect(getAlbumTracks).to.exist;
        });
    });

    describe('getAlbum', () => {
        // verificar se o fetch ocorre
        // verificar se o fetch ocorre com a URL desejada
        // verificar se o dado é recebido pela promise
    });
});
