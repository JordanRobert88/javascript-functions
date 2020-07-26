function seed(a, b, c) {
  return Array.from(arguments);
}

function same([x, y], [j, k]) {
  if (x == j && y == k) {
    return true;
  } else {
    return false;
  }
}

// The game state to search for `cell` is passed as the `this` value of the function.
function contains(cell) {
  for(i=0; i < this.length; i++) {
    if(same(this[i], cell)) {
      return true;
      break; 
    }
  }
}

const printCell = (cell, state) => {
  return contains.call(state, cell) ? "\u25A3": "\u25A2";
};

const corners = (state = []) => {

  if (state.length === 0) {
    return {
        topRight: [0,0],
        bottomLeft: [0,0]
    };
  }

  let xa = state.map(([x, _]) => x);
  let ya = state.map(([_, y]) => y);

  return {
    topRight: [Math.max(...xa), Math.max(...ya)],
    bottomLeft: [Math.min(...xa), Math.min(...ya)]
  };

};


const printCells = (state) => {
  const {bottomLeft, topRight} = corners(state);
  let accumulator = "";

  for (y = topRight[1]; y>=bottomLeft[1]; y--) {
    let row = [];
    for (x = bottomLeft; x <= topRight[0]; x++) {
      row.push(printCell([x, y], state));
    }
    accumulator += row.join(" ") + "\n";
  }
  return accumulator;
};

const getNeighborsOf = ([x, y]) => {
  [x-1, y+1,], [x, y+1], [x+1, y+1], [x=1, y], [x, y], [x+1, y], [x-1, y-1], [x, y-1], [x+1, y-1];
};

const getLivingNeighbors = (cell, state) => {};

const willBeAlive = (cell, state) => {};

const calculateNext = (state) => {};

const iterate = (state, iterations) => {};

const main = (pattern, iterations) => {};

const startPatterns = {
    rpentomino: [
      [3, 2],
      [2, 3],
      [3, 3],
      [3, 4],
      [4, 4]
    ],
    glider: [
      [-2, -2],
      [-1, -2],
      [-2, -1],
      [-1, -1],
      [1, 1],
      [2, 1],
      [3, 1],
      [3, 2],
      [2, 3]
    ],
    square: [
      [1, 1],
      [2, 1],
      [1, 2],
      [2, 2]
    ]
  };
  
  const [pattern, iterations] = process.argv.slice(2);
  const runAsScript = require.main === module;
  
  if (runAsScript) {
    if (startPatterns[pattern] && !isNaN(parseInt(iterations))) {
      main(pattern, parseInt(iterations));
    } else {
      console.log("Usage: node js/gameoflife.js rpentomino 50");
    }
  }
  
  exports.seed = seed;
  exports.same = same;
  exports.contains = contains;
  exports.getNeighborsOf = getNeighborsOf;
  exports.getLivingNeighbors = getLivingNeighbors;
  exports.willBeAlive = willBeAlive;
  exports.corners = corners;
  exports.calculateNext = calculateNext;
  exports.printCell = printCell;
  exports.printCells = printCells;
  exports.startPatterns = startPatterns;
  exports.iterate = iterate;
  exports.main = main;