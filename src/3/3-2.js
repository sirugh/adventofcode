'use strict'
const fs = require('fs');
const path = require('path');

fs.readFile(path.join(__dirname, 'input.txt'), 'utf8', (err, contents) => {
  console.log(abracadabra(contents));
});

function abracadabra(input) {
  let houses = new Set();
  // for #2, two santas!
  let santas = [new Santa(), new Santa()];

  // create starting position.
  houses.add(new House(0,0).getCoordinatesString());

  let asArray = Array.from(input);
  for (let i = 0; i <= asArray.length; i++) {
    let santa = santas[i%santas.length];

    santa.move(asArray[i]);

    houses.add(new House(santa.x, santa.y).getCoordinatesString());
  }
  return houses.size;
}

class House {
  constructor (x, y) {
    this.x = x;
    this.y = y;
  }
  getCoordinatesString() {
    return this.x + ',' + this.y;
  }
}

class Santa {
  constructor() {
    this.x = 0;
    this.y = 0;
  }
  move(direction) {
     switch (direction) {
      case '^': //up
        this.y++;
        break;
      case 'v': //down
        this.y--;
        break;
      case '<': // left
        this.x--;
        break;
      case '>': // right
        this.x++;
        break;
    }
  }
}