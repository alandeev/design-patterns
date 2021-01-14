#  Prototype Pattern

> Specify the types of objects to be created using a prototype instance and create new objects by copying that prototype.


### Difficulty level to learn ( `Me` )

[ ] - learning..
___
## When i use? 🤔
- É tipicamente usado para evitar a recriação de objetos "caros"
- Ajuda a evitar a explosão de subclasses

## Good :)
- Oculta classes concretas do código cliente
- Ajuda na criação de objetos caros ou complexos
- Evita a explosão de subclasses

## Bad :(
- Clonar objetos que tem referências para outros objetos pode ser super complexo
