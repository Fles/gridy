import React from 'react';

import './Grid.css';

function randomNumber() {
  return + (Math.random() * 256).toFixed()
}

function makeRandomColor() {
  return `rgba(${randomNumber()},${randomNumber()},${randomNumber()},1)`
}

function makeRow(n) {
  let row = []
  for (let i = 0; i < n; i++) {
    row.push(
      <div className="cell" style={{
        background: makeRandomColor()
      }}></div>
    )
  }
  return row
}

function makeGrid(n) {
  let grid = []

  for (let i = 0; i < n; i++) {
    grid.push(
      <div className="row">{makeRow(n)}</div>
    )
  }
  return grid
}

const grid = makeGrid(150)

export function Grid() {
  return (
    <div className="Grid">
      {grid}
    </div>
  );
}
