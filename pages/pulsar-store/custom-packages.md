---
data:
  title: custom-packages.md
---

# Custom Packages ![](https://raw.githubusercontent.com/Pulsar-Dev/documentation/main/public/server.png)

1. Create a new file in `lua/pulsar/packages/modules` called `sv_PackageName.lua `
2. Paste the following code inside the file you just created
```lua #
    Lyth_Pulsar = Lyth_Pulsar or {} -- Dont touch
    Lyth_Pulsar.Packages = Lyth_Pulsar.Packages or {} -- Dont touch

    function Lyth_Pulsar.Packages.Handleexample(ply, argument) -- The package handler
        if !examplePly == nil then
            print("Player: ", ply, , " Argument: ", argument) -- What to run ( can be changed to whatever you want )
        else
            Lyth_Pulsar.DebugLog("Ply is nil!")
        end
    end

    function Lyth_Pulsar.Packages.HandleReturnexample(ply, armor, perma)
        print("Package Returned!")
    end

    local function prePurchaseHandler(ply, package, packageargs, perma)
        return {
            canFinish = true, -- Can the purchase carry on
            mesage = "test" -- Notification to give player if not
        }
    end

    return {
        name = "Example", -- Package Name
        id = "example", -- Package ID, Should ALLWAYS be lowercase name with spaces replaced with dashes `-`
        prePurchaseHandler = prePurchaseHandler, -- Custom function to check your own things before a player can purchase a package
        packageArgsTitle = "Package ID",  -- What the title of the package arguments box is in the configurator
        packageArgsExample = "52", -- The example for the package argumnents box
        canReturn = true,   -- If a player can return this package
        canPerma = true -- Is this package allowed to be permanant? Allways NO for things like console commands or things that handle it themselves. e.g. Billys Whitelist
    }

```
3. Edit the code to make it do whatever you want it to do
4. Restart the server
---


# Pre Purchase Handlers