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

# Specs Serveur

https://iut-todo-server.glitch.me/ - Glitch (Disponible tout le temps)

# Modèle de donnée

```
[
    id: unique number,
    label: string,
    status: string "done" or "not done",
    owner: string
]
```

# Endpoint `GET /tasks` - Récupérer toutes les tâches

Renvoie un tableau JSON contenant toutes les tâches enregistrées.

Example de corps de réponse `application/json` 200 : 

```
[
  {
    "id": 42,
    "label": "Acheter du lait",
    "status": "not done",
    "owner": "Moi"
  },
  ...
]
```


# Endpoint `POST /tasks` - Créer une nouvelle tâche

Crée une nouvelle tâche avec les détails spécifiés dans le corps de la requête. Le corps de la requête doit contenir un objet JSON avec les propriétés suivantes : "label" (champ obligatoire), "status" (champ obligatoire) et "owner" (champ obligatoire). La réponse renvoie un objet JSON représentant la tâche nouvellement créée avec un identifiant unique généré automatiquement.

Exemple de corps de requête `application/json` :

```
{
  "label": "Acheter du lait",
  "status": "not done",
  "owner": "Moi"
}
```

Example de corps de réponse de succès `application/json` 200 :


```
{
  "id": 42,
  "label": "Acheter du lait écrémé",
  "status": "done",
  "owner": "Moi"
}
```

Example de corps de réponse d'échéc `text/plain` 400 :

```
Label is required; Status is required; Invalid status value
```


# Endpoint `PUT /tasks/:id` - Mettre à jour une tâche spécifique

Met à jour la tâche spécifiée par son identifiant unique ":id". Le corps de la requête peut contenir un ou plusieurs des champs suivants : "label", "status" et "owner". Seuls les champs spécifiés seront mis à jour. Si aucun champ n'est spécifié, la tâche ne sera pas modifiée. La réponse renvoie un objet JSON représentant la tâche mise à jour.

Exemple de corps de requête `application/json` :

```
{
  "label": "Acheter du lait écrémé",
  "status": "done",
  "owner": "Moi"
}
```

Example de corps de réponse de succès `application/json` 200 :


```
{
  "id": 42,
  "label": "Acheter du lait écrémé",
  "status": "done",
  "owner": "Moi"
}
```

Example de corps de réponse d'échéc `text/plain` 400 :

```
Label is required; Status is required; Invalid status value
```
