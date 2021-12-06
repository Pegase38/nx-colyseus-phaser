import { ChessGame } from '@nx-colyseus-phaser/api/chess/domain';

import { ChessApplication } from './chess.application';

describe('ChessApplication', () => {
  describe('Game creation', () => {
    let chessApplication;
    let chessGame: ChessGame;
    const player = 'toto';

    beforeAll(() => {
      chessApplication = new ChessApplication();

      chessGame = chessApplication.createChessGame(player);
    });

    test('should create a chess game in status CREATED', () => {

      expect(chessGame.getState()).toEqual('CREATED');
    });
    test('should create a chess game with the player', () => {
      expect(chessGame.getPlayers()).toContain(player);
    });
  });
});
