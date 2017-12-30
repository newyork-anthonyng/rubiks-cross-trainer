[![Travis build status][travis-badge]][travis-build]
[![Codecov branch][codecov-badge]][codecov]
[![npm][npm-badge]][npm-version]
[![downloads][downloads-badge]][npmcharts]
[![MIT License][license-badge]][license]

[![gzip size][gzip-badge]][unpkg]
[![size][size-badge]][unpkg]

[![Maintainability][code-climate-badge]][code-climate]
[![PRs Welcome][pull-request-badge]](http://makeapullrequest.com)

<h1 align="center">
  <img src="https://raw.githubusercontent.com/newyork-anthonyng/rubiks-cross-trainer/master/OTHER/logo.png" alt="Logo" width="50" />
  <br>
  Rubik's Cross Trainer 🏋️
  <br>
</h1>
<p align="center">A JavaScript library that gives you Rubiks cube scrambles to practice forming your cross.</p>

# Getting started
```shell
npm install --save rubiks-cross-trainer
```

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

[codecov]: https://codecov.io/gh/newyork-anthonyng/rubiks-cross-trainer/branch/master
[codecov-badge]: https://img.shields.io/codecov/c/github/newyork-anthonyng/rubiks-cross-trainer/master.svg
[code-climate]: https://codeclimate.com/github/newyork-anthonyng/rubiks-cross-trainer/maintainability
[code-climate-badge]: https://api.codeclimate.com/v1/badges/3cfb50c8fd78d593ddba/maintainability
[downloads-badge]: https://img.shields.io/npm/dm/rubiks-cross-trainer.svg?style=flat-square
[license]: https://github.com/newyork-anthonyng/rubiks-cross-trainer/blob/master/LICENSE
[license-badge]: https://img.shields.io/npm/l/rubiks-cross-trainer.svg?style=flat-square
[npmcharts]: https://npmcharts.com/compare/rubiks-cross-trainer
[pull-request-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square
[npm-version]:https://www.npmjs.com/package/rubiks-cross-trainer
[npm-badge]: https://img.shields.io/npm/v/rubiks-cross-trainer.svg?style=flat-square
[travis-badge]:https://travis-ci.org/newyork-anthonyng/rubiks-cross-trainer.svg?branch=master
[travis-build]: https://travis-ci.org/newyork-anthonyng/rubiks-cross-trainer
[gzip-badge]: http://img.badgesize.io/https://unpkg.com/rubiks-cross-trainer?compression=gzip&label=gzip%20size&style=flat-square
[size-badge]: http://img.badgesize.io/https://unpkg.com/rubiks-cross-trainer?label=size&style=flat-square
[unpkg]: https://unpkg.com/rubiks-cross-trainer
