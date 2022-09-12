# Virtual Meow
**by Angela Sun, 2022**  
[LinkedIn](https://linkedin.com/in/angela-sun-flores)  
[GitHub](https://github.com/valanex)
## Overview
This app was created to be my Solo Project submission to join [Chingu](https://www.chingu.io/) Voyage 41 and demonstrate my skills at Tier 2 level.  

I selected this project from a list, and this one seemed the most fun. The idea and features were provided in [Chingu's specifications](https://github.com/chingu-voyages/soloproject-tier2-virtualpet). The cat sprites were created by me. 

This is my first non-tutorial project! I welcome any constructive criticisms and suggestions. 

## Features

The goal of the game is to keep your pet alive for as long as possible. Your pet will die when its health reaches 0. 

### For each in-game day
- Health decreases
- Hunger increases
- Happiness decreases by a random amount within a set range
- A random event may trigger (timeframe is dependent on the previous event)

### Interactions
- Clean the pet (to improve health)
- Feed the pet (to decrease hunger)
- Play with the pet (to increase happiness)
- If the pet is hungry or unhappy, their stats worsen faster and your interactions are less effective

### Settings
- Change the pet's name
- Adjust the game speed (ms per in-game day)
- Restart the game

### Graphics
- Cat sprite will change between happy and sad, depending on its stats.
- At death, the sprite will change to a dead cat 😟

### Endgame
- The timer will stop and show how old your pet was
- An end of game event will display in the event dialog window

## Running the project

1. Clone this project locally
2. Run `npm install` in your bash / command line
3. Run `npm start` in your bash / command line
4. Play the game!

## Dependencies
- [React](https://reactjs.org/)
- React-DOM
- [React-Bootstrap](https://react-bootstrap.github.io/)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
