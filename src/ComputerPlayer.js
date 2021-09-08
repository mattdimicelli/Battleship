import Player from './Player';

class ComputerPlayer extends Player {
    constructor() {
        super();
    }

    generateRandomCoordinates() {
        const letters = ['A','B','C','D','E','F','G','H','I','J'];
        const numbers = ['1','2','3','4','5','6','7','8','9','10'];
        const randomIndex1 = Math.floor(Math.random() * 10);
        const randomIndex2 = Math.floor(Math.random() * 10);
        return letters[randomIndex1] + numbers[randomIndex2];
    }

    attack(gameBoard) {
        let coords = this.generateRandomCoordinates();
        if (!this.getCoordinatesHaveAlreadyBeenShotAtByThisPlayer(coords)) {
            const result = gameBoard.receiveAttack(coords);
            this.shotsFiredByThisPlayer.add(coords);
            if (result === 'hit ship') return 'hit';
        } else {
            this.attack(gameBoard);
            // what's going on here?  infinite loop
        }
    }

}

export default ComputerPlayer;