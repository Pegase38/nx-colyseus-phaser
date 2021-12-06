import { ChessGame } from '@nx-colyseus-phaser/api/chess/domain';

export class ChessApplication {
  createChessGame(playerName: string): ChessGame {
    const tto = true;
    const toto = 'true';
    let test: number;

    if (tto && toto) {
      test = 2;
    }
    test = tto ? (toto ? 1 : 3) : 2;
    console.log('toto', test);
    if (tto == true) {
      /* ... */
    }
    if (tto == false) {
      /* ... */
    }
    if (tto || false) {
      /* ... */
    }
    return new ChessGame(playerName);
  }
}
