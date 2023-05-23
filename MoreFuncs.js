function PluginMain() {
	let Plugin_Name = "MoreFuncs"
	let Plugin_Description = `(Most) of the commands in functions for the datapack maker!`
	let MoreFuncs = new DatapackMakerPlugin(Plugin_Name,Plugin_Description)
	let ControlCenter = (code, [plr]) => {
		if (plr == "CONSOLE") {
			player = 'execute run '
		} else {
			player = `execute ${plr} `
		}
	}
	player = 'execute run '
	MoreFuncs.AddButton("MoreFuncs Control Center - Execute string (use 'CONSOLE' if no execute string:) <plr>", ControlCenter)
	let Advancement = (code, [grant, advancement, targets]) => {
		code.AddLine(`${player}advancement ${grant} ${targets} only ${advancement}`)
		return code
	}
	MoreFuncs.AddButton("Grant/revoke <grant> advancement <adv> to target(s) <targets>", Advancement)
	let Attribute = (code, [attribute, changeTo, targets]) => {
		code.AddLine(`${player}attribute ${targets} ${attribute} base set ${changeTo}`)
		return code
	}
	MoreFuncs.AddButton("Change attribute <attr> to <ch> for the target <target>", Attribute)
	let Ban = (code, [target]) => {
		code.AddLine(`${player}ban ${target}`)
		return code
	}
	MoreFuncs.AddButton("Ban the player <player>", Ban)
	let Clear = (code, [target]) => {
		code.AddLine(`${player}clear ${target}`)
		return code
	}
	MoreFuncs.AddButton("Clear <player>'s inventory", Clear)
	let ClearItems = (code, [target, items]) => {
		code.AddLine(`${player}clear ${target} ${items}`)
		return code
	}
	MoreFuncs.AddButton("Clear <player>'s <item>s", ClearItems)
	let Clone = (code, [x, y, z, a, b, c, d, e, f]) => {
		code.AddLine(`${player}clone ${x} ${y} ${z} ${a} ${b} ${c} ${d} ${e} ${f}`)
		return code
	}
	MoreFuncs.AddButton("Clone from source <x1> <y1> <z1> <x2> <y2> <z2> to <x3> <y3> <z3> with everything cloning in the +X +Y +Z direction", Clone)
	let Damage = (code, [target, amt]) => {
		code.AddLine(`${player}damage ${target} ${amt}`)
		return code
	}
	MoreFuncs.AddButton("Damage <target> by <amt> half hearts", Damage)
	let Data = (code, [type, target, nbt]) => {
		code.AddLine(`${player}data merge ${type} ${target} ${nbt}`)
		return code
	}
	MoreFuncs.AddButton("Merge <type>data of <target> using NBT <nbt>", Data)
	let Difficulty = (code, [diff]) => {
		code.AddLine(`${player}difficulty ${diff}`)
		return code
	}
	MoreFuncs.AddButton("Set world difficulty to <diff>")
	let Enchant = (code, [targ, ench, lvl]) => {
		code.AddLine(`${player}enchant ${targ} ${ench} ${lvl}`)
		return code
	}
	MoreFuncs.AddButton("Enchant <targ>'s item with <ench> level <lvl>")
	let Eval = (code, [cod]) => {
		code.AddLine(`${player}${cod}`)
		return code
	}
	MoreFuncs.AddButton("Eval code <code>")
	let EvalRaw = (code, [cod]) => {
		code.AddLine(`${cod}`)
		return code
	}
	MoreFuncs.AddButton("Raw Eval code <code>")
	let Fill = (code, [x, y, z, block]) => {
		code.AddLine(`${player}fill ${x} ${y} ${z} ${block}`)
		return code
	}
	MoreFuncs.AddButton("Fill from <x> and <y> to <z> with <block>")
	let FillBiome = (code, [x, y, z, block]) => {
		code.AddLine(`${player}fillbiome ${x} ${y} ${z} ${block}`)
		return code
	}
	MoreFuncs.AddButton("Fill biome from <x> and <y> to <z> with <biome>")
	let Forceload = (code, [x, z]) => {
		code.AddLine(`${player}forceload add ${x} ${z} ${x} ${z}`)
		return code
	}
	MoreFuncs.AddButton("Forceload the chunk at <x> <z>")
	let Func = (code, [fuc]) => {
		code.AddLine(`${player}function ${fuc}`)
		return code
	}
	MoreFuncs.AddButton("Run function <fuc>")
	let Gamemode = (code, [target, gamemode]) => {
		code.AddLine(`${player}gamemode ${gamemode} ${target}`)
		return code
	}
	MoreFuncs.AddButton("Set <target>'s gamemode to <gm>")
	let Gamerule = (code, [gr, val]) => {
		code.AddLine(`${player}gamerule <gr> <val>`)
		return code
	}
	MoreFuncs.AddButton("Change gamerule <gr> to <val>")
	let Give = (code, [target, count, item]) => {
		code.AddLine(`${player}give ${target} ${item} ${count}`)
		return code
	}
	MoreFuncs.AddButton("Give <target> <count>x <item>")
	let ReplaceItem = (code, [target, slot, item]) => {
		code.AddLine(`${player}fill ${x} ${y} ${z} ${block}`)
		return code
	}
	MoreFuncs.AddButton("In <target>'s inventory at slot <slot>, replace the item with <item>")
	let Return = (code, [val]) => {
		code.AddLine(`${player}return ${val}`)
		return code
	}
	MoreFuncs.AddButton("Return <value> (1.20+)")
	console.log("MoreFuncs by binbinuser added!")
}
