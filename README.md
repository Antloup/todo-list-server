# Setup

Installer les dépendances via `npm install`

Lancer le serveur via `node server.js`

Vous pouvez installer `nodemon` pour relancer le serveur à chaque mis à jour des fichiers

> `npm install nodemon --save-dev`

> `npx nodemon server.js`

## Consignes

Implémenter un backend pour la todo list en utilisant Express et Sequelize.

Le serveur sert une page pour tester vos endpoints à la racine `/`

## Aide

```
import { Op } from "sequelize"

// Create
await User.create({ username: "john", age: 42 }) // instance

// Read
const userById = await User.findByPk("de262606-070c-42e1-a43d-75c9696e919a") // instance | null

const userByName = await User.findOne({ where: { username: "alice" }) // instance | null

const users = await User.findAll({ where: { age: { [Op.gt]: 18 } } }) // array<instance>

// Update
await userByName.update({ age: 43 }) // instance

// Delete
await User.destroy({ where: { id: "de262606-070c-42e1-a43d-75c9696e919a" } }) // number

userById.destroy() // void
```
