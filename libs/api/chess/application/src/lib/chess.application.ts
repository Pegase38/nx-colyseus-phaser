import { ChessGame } from '@nx-colyseus-phaser/api/chess/domain';

export class ChessApplication {
  createChessGame(playerName: string): ChessGame
  {
    if(true) {

    }
    return new ChessGame(playerName);
  }
}
