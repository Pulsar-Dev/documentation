---
data:
  title: categorys.md
---

# Categorys ![](https://github.com/Pulsar-Dev/documentation/blob/main/public/server.png)

##### `Lyth_Pulsar.SendItemsToUser(ply, ret)`
  Resends the items to the user

---
##### `Lyth_Pulsar.SendMyItemsToUser(ply)`
  Resends the items that a player owns back to the player

---
##### `Lyth_Pulsar.DB.CreateNewItem(ply, name, price, perma, type, logo, category, package, packageargs)`
 Creates a new item
  - `name`: string, the name of the item
  - `price`: num, the price of the item
  - `perma`: bool, if the item is permanent
  - `logo`: string, the imgurId of the item
  - `category`: string, the category of the item
  - `package`: string, the package to give the player
  - `packageargs`: string, the arguments to give the package

---
##### `Lyth_Pulsar.DB.DeleteItem(ply, itemName)`
  Deletes a specific item

---
##### `Lyth_Pulsar.DB.UpdateItem(ply, oldName, itemName, itemPrice, itemCategory, itemType, itemLogo, itemPackage, itemPackageArgs, itemPerma)`
 Updates a new item
  - `oldName`: string, the old name of the item
  - `itemName`: string, the new name of the item
  - `itemPrice`: num, the new price of the item
  - `itemCategory`: string, the new category of the item
  - `itemType`: string, the new type of the item
  - `itemLogo`: string, the new logo of the item
  - `itemPackage`: string, the new package of the item
  - `itemPackageArgs`: string, the new package args of the item
  - `itemPerma`: bool, if the item is permanent

---
##### `Lyth_Pulsar.DB.ReturnItem(ply, itemName)`
  "Sells" an item back to the store

---