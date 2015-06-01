class Player {
  constructor() {
    this._resting = false;
  }
  playTurn(warrior) {

    if (this._resting) {
      if (warrior.health() >= 6) {
        this._resting = false;
      }
      return warrior.rest();
    }

    if (warrior.health() < 4 && !warrior.feel().isEmpty()) {
      this._resting = true;
      return warrior.walk('backward');
    }

    if (!warrior.feel().isEmpty()) {
      return warrior.attack();
    }

    return warrior.walk();
  }
}

global.Player = Player;
