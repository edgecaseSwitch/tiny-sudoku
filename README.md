# Tiny Sudoku ✿

A small, cute Sudoku game that runs entirely in the browser. No installs, no build step: plain HTML, CSS and JavaScript.

**Play it:** `https://edgecaseSwitch.github.io/tiny-sudoku/`

## How it works

- makes a new puzzle every time, and each one has only one solution
- easy, medium and hard
- you get 3 hearts and lose one for each wrong number
- pencil mode for notes, plus hints and a timer
- works on phone and laptop, and you can play with the keyboard

## How the puzzles are made

The game fills a full grid using backtracking, then removes numbers one at a time. After each removal it checks that the puzzle still has exactly one answer. If it doesn't, the number goes back.

## Files

- index.html
- style.css
- script.js
