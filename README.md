[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
![Travis build status](https://travis-ci.org/newyork-anthonyng/rubiks-cross-trainer.svg?branch=master)
[![Codecov branch](https://img.shields.io/codecov/c/github/newyork-anthonyng/rubiks-cross-trainer/master.svg)]()

<h1 align="center">
  <img src="https://raw.githubusercontent.com/newyork-anthonyng/rubiks-cross-trainer/master/OTHER/logo.png" alt="Logo" width="50" />
  <br>
  Rubik's Cross Trainer 🏋️
  <br>
</h1>
<p align="center">A JavaScript library that gives you Rubiks cube scrambles to practice forming your cross.</p>

# Why?
Forming the cross on your Rubik's Cube is the first step in [CFOP](https://ruwix.com/the-rubiks-cube/advanced-cfop-fridrich/). It should never take more than [8 moves](https://ruwix.com/the-rubiks-cube/advanced-cfop-fridrich/white-cross/) to form your cross, and this library gives you a chance to practice at your own comfort.

# API
``` js
import getRandomSolve from "rubiks-cross-trainer";

const scramble = getRandomSolve(1);
console.log(scramble);
// "F2 D' F2 U2 L' U' R2 F' R2 D' B' R2 U2 B U2 B' L2 D2 B U2 B"
// Returns a scramble that requires 1 move to form the cross

const anotherScramble = getRandomSolve(8);
console.log(anotherScramble);
// "B D2 U2 F' D2 F2 D2 R2 D2 B' F' D B L' D F R B U' R2"
// Returns a scramble that requires 8 moves to form the cross

const moreThanEightMoves = getRandomSolve(100);
console.log(moreThanEightMoves);
// undefined
// Returns undefined for ranges outside of 1-8
```

# Inspiration
This JavaScript library was inspired by this [Reddit thread](https://www.reddit.com/r/Cubers/comments/30ld5k/cfop_a_tool_ive_made_for_beginners_to_perfect/).
