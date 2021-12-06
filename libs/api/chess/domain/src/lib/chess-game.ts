export class ChessGame {
  private player1: string;
  private gameState: string;

  constructor(playerName: string) {
    this.player1 = playerName;
    this.gameState = 'CREATED';
  }

  public getState(): string {
    return this.gameState;
  }

  public getPlayers(): Array<string> {
    return [this.player1];
  }
}
