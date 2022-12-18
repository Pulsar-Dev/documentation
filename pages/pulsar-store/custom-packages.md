---
data:
  title: custom-packages.md
---

# Custom Packages ![](http://localhost:3000/server.png)

1. Create a new file in `lua/pulsar/packages/modules` called `sv_PackageName.lua `
2. Paste the following code inside the file you just created
```lua #
    Lyth_Pulsar = Lyth_Pulsar or {} -- Dont touch
    Lyth_Pulsar.Packages = Lyth_Pulsar.Packages or {} -- Dont touch

    function Lyth_Pulsar.Packages.HandleHealth(ply, argument) -- The package handler
        if !examplePly == nil then
            print("Player: ", ply, , " Argument: ", argument) -- What to run ( can be changed to whatever you want )
        else
            Lyth_Pulsar.DebugLog("Ply is nil!")
        end
    end


    return { -- Return package details to the main handler to say that the package exists
        name = "Example package", -- Name of the package that will show ingame
        id = "example", -- ID of the package that is used internally
    }

```
3. Edit the code to make it do whatever you want it to do
4. Restart the server
---

