import express from "express";
import cors from "cors";
import { DataTypes, Sequelize } from "sequelize";

const sequelize = new Sequelize("sqlite::memory:");

const Task = sequelize.define("Task", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  label: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  owner: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM("done", "not done"),
    allowNull: false,
  },
});

const app = express();

app.use(express.static('public'))
app.use(cors())
app.use(express.json())


async function main() {
  await sequelize.sync();

  await Task.create({
    label: "Finish this project",
    owner: "Admin",
    status: "not done",
  });

  app.get("/tasks", async (req, res) => {
    /*
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
    */
    // TODO
  });

  app.post("/tasks", async (req, res) => {
    /*
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
    */
    
    // TODO
    
  });

  app.put("/tasks/:taskId", async (req, res) => {
    
    /*
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

    */
    
    // TODO
  });

  app.listen(3000, () => {
    console.log("Server is listening on port 3000 !");
  });
}

main().catch((e) => console.error(e));
