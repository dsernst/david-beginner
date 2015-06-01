class Player {
  constructor() {
    this._resting = false;
    this._health = 20; 
  }
  setHealth() {
    this._health = warrior.health();
  }
  playTurn(warrior) {

    if (warrior.feel().isCaptive()) {
     return warrior.rescue();
    }

    if (this._resting) {
      if (warrior.health() >= 14) {
        this._resting = false;
      }
      return warrior.rest();
    }

    if (warrior.health() < 6 && !warrior.feel().isEmpty()) {
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
