#  Singleton Pattern

> Singleton guarantees the existence of only one instance of a class, maintaining a global point of access to its object.


### Difficulty level to learn ( `Me` )

[🟦] - basic
___

## When i use? 🤔

> Use the Singleton when class needs to have only one instance avaliable in it's entire program.

> Use the singleton when you realize you are using global variables to maintain important parts of the program, such as configuration variables that are used throughout the application


## Good :)
- Controlled access to the single instance
- It is easy to allow more instances if you change your mind
- Uses lazy instantion, Singleton is only created at the time of use
- Replaces global variables

## Bad :(
- It is more difficult to bear
- Violates the 'solid' RSP principle
- Requires special treatment in competition cases
- Erich Gamma (author) described that this would be the only standard that he would remove if he were to refactor the book
