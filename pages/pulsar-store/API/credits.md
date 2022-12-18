---
data:
  title: credits.md
---

# Credits ![](https://raw.githubusercontent.com/Pulsar-Dev/documentation/main/public/server.png)

##### `Lyth_Pulsar.DB.GetCredits(userid, callback)`
  Gets the amount of credits that a steamid64 has

---
##### `Lyth_Pulsar.DB.GiveCredits(callingPly, player, amount, shouldNotify)`
  Gives the specificed player the specified amount of credits
  - callingPly is optional and is only used for logging / hooks
  - shouldNotify is also optional

---
##### `Lyth_Pulsar.SetCredits(callingPly, player, amount)`
  Sets the players credits to the specified amount
  - This WILL overwrite the amount of credits a player had before

---
##### `Lyth_Pulsar.DB.ImportUser(steamid64, credits)`
  Imports a user into the database

---
##### `Lyth_Pulsar.DB.RemoveCredits(callingPly, player, amount)`
  Removes the specified amount of credits from the player
  - callingPly is optional and is only used for logging / hooks

---
##### `Lyth_Pulsar.SendCreditsToUser(ply, ret)`
  Sends the amount of credits a player has to the player
---
##### `Lyth_Pulsar.Convert(ply, type, amount)`
  Converts an amount of money to credits or the other way around
  - `type` can be either `credits` or `money`
---