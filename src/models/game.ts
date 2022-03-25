export class Game {
    board: Array<Array<number>>;

    constructor(size: number) {
        this.board = new Array(size);
        for (let i = 0; i < size; i++) {
            this.board[i] = new Array<number>(size).fill(0);
        }
    }
}