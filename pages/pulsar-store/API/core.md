---
data:
  title: core.md
---

# Server Core ![](https://github.com/Pulsar-Dev/documentation/blob/main/public/server.png)

##### `Lyth_Pulsar.RequestDataUpdate(ply, sendData)`
  Resends all data to the client

---
##### `Lyth_Pulsar.Notify(ply, msg)`
  Notifys a player

---
##### `Lyth_Pulsar.CanAfford(ply, steamid, amount, callback, badCallback)`
    Checks if a player can afford a certain amount of credits
    - `callback` and `badCallback` is optional
    - This function is asynchronous and will return a boolean if no callback is provided
---

# Client Core ![](https://github.com/Pulsar-Dev/documentation/blob/main/public/client.png)

##### `Lyth_Pulsar.OpenMenu()`
  Opens the menu

---
##### `Lyth_Pulsar.CloseMenu()`
  Closes the menu

---
##### `Lyth_Pulsar.OpenConfigMenu()`
  Opens the config menu

---
##### `Lyth_Pulsar.RegenerateUIPanels(panel)`
  Regenerates parts of or all of the ui
  - `panel` is optional and can be either `main` or `admin`