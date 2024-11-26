export const L3x3 = {
  width: 3,
  height: 3,
  finishingStep: [2, 0],
  steps: [
    [
      {
        key: [0, 0],
        reached: false,
        walls: ["north", "south"],
      },
      {
        key: [0, 1],
        reached: false,
        walls: ["north", "south"],
      },
      {
        key: [0, 2],
        reached: false,
        walls: ["north", "east"],
      },
    ],
    [
      {
        key: [1, 0],
        reached: false,
        walls: ["north", "east", "west"],
      },
      {
        key: [1, 1],
        reached: false,
        walls: ["north", "west"],
      },
      {
        key: [1, 2],
        reached: false,
        walls: ["east", "south"],
      },
    ],
    [
      {
        key: [2, 0],
        reached: false,
        walls: ["west"],
      },
      {
        key: [2, 1],
        reached: false,
        walls: ["south"],
      },
      {
        key: [2, 2],
        reached: false,
        walls: ["north", "east", "south"],
      },
    ],
  ],
};

export const L5x5 = {
  width: 5,
  height: 5,
  finishingStep: [4, 2],
  steps: [
    [
      { key: [0, 0], reached: false, walls: ["north", "east"] },
      { key: [0, 1], reached: false, walls: ["north", "west"] },
      { key: [0, 2], reached: false, walls: ["north", "south"] },
      { key: [0, 3], reached: false, walls: ["north", "south"] },
      { key: [0, 4], reached: false, walls: ["north", "east"] },
    ],
    [
      { key: [1, 0], reached: false, walls: ["west", "south"] },
      { key: [1, 1], reached: false, walls: ["south", "east"] },
      { key: [1, 2], reached: false, walls: ["north", "west"] },
      { key: [1, 3], reached: false, walls: ["north"] },
      { key: [1, 4], reached: false, walls: ["south", "east"] },
    ],
    [
      { key: [2, 0], reached: false, walls: ["north", "west", "south"] },
      { key: [2, 1], reached: false, walls: ["north", "south"] },
      { key: [2, 2], reached: false, walls: ["east"] },
      { key: [2, 3], reached: false, walls: ["south", "west"] },
      { key: [2, 4], reached: false, walls: ["north", "east"] },
    ],
    [
      { key: [3, 0], reached: false, walls: ["north", "west"] },
      { key: [3, 1], reached: false, walls: ["north", "south"] },
      { key: [3, 2], reached: false, walls: ["south", "east"] },
      { key: [3, 3], reached: false, walls: ["north", "east", "west"] },
      { key: [3, 4], reached: false, walls: ["west", "east"] },
    ],
    [
      { key: [4, 0], reached: false, walls: ["west", "south"] },
      { key: [4, 1], reached: false, walls: ["south", "north"] },
      { key: [4, 2], reached: false, walls: ["north", "east"] },
      { key: [4, 3], reached: false, walls: ["south", "west"] },
      { key: [4, 4], reached: false, walls: ["south", "east"] },
    ],
  ],
};
