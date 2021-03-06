'use strict';

/**@type {{[k: string]: TemplateData}} */
froxbite: {
		num: -14,
		species: "Froxbite",
		types: ["Ice", "Fire"],
		baseStats: {hp: 70, atk: 135, def: 63, spa: 120, spd: 55, spe: 112},
		abilities: {0: "Flash Fire", 1: "Cute Charm", H: "Snow Warning"},
		heightm: 3.6,
		weightkg: 80,
		eggGroups: ["Fairy"],
	},
cnidali: {
		num: -14,
		species: "Cnidali",
		types: ["Poison", "Fighting"],
		baseStats: {hp: 109, atk: 100, def: 85, spa: 40, spd: 90, spe: 66},
		abilities: {0: "Regenerator", 1: "Stench", H: "Poison Heal"},
    otherFormes: ["cnidalimega"],
	},
cnidalimega: {
		num: -14,
		species: "Cnidali-Mega",
		baseSpecies: "Cnidali",
		forme: "Mega",
		formeLetter: "M",
		types: ["Poison", "Fighting"],
		baseStats: {hp: 109, atk: 130, def: 95, spa: 60, spd: 120, spe: 76},
		abilities: {0: "Contrary"},
	},
chamereon: {
		num: -23,
		species: "Chamereon",
		types: ["Normal"],
		baseStats: {hp: 119, atk: 71, def: 111, spa: 69, spd: 109, spe: 51},
		abilities: {0: "Multitype", H: "Color Change"},
		heightm: 2.2,
		weightkg: 22.5,
		eggGroups: ["Dragon", "Field"],
	},
petrogeist: {
		num: -23,
		species: "Petrogeist",
		types: ["Ghost", "Rock"],
		baseStats: {hp: 75, atk: 100, def: 100, spa: 50, spd: 85, spe: 115},
		abilities: {0: "Intimidate", H: "Rock Head"},
		heightm: 4.11,
		weightkg: 180.1,
		eggGroups: ["Amorphous", "Mineral"],
	},
ampeater: {
		num: -23,
		species: "Ampeater",
		types: ["Electric", "Dark"],
		baseStats: {hp: 85, atk: 48, def: 115, spa: 115, spd: 85, spe: 92},
		abilities: {0: "Sheer Force", H: "Sand Force"},
		heightm: 3.7,
		weightkg: 83.8,
		eggGroups: ["Field", "Monster"],
	},
reverbell: {
		num: -23,
		species: "Reverbell",
		types: ["Fairy", "Ghost"],
		baseStats: {hp: 90, atk: 55, def: 90, spa: 125, spd: 102, spe: 113},
		abilities: {0: "Magic Bounce", H: "Infiltrator"},
	},
eucalyptank: {
		num: -23,
		species: "Eucalyptank",
		types: ["Grass", "Rock"],
		baseStats: {hp: 90, atk: 95, def: 80, spa: 115, spd: 70, spe: 90},
		abilities: {0: "Drought", H: "Sand Rush"},
		eggGroups: ["Mineral", "Grass"],
	},
chispera: {
		num: -23,
		species: "Chispera",
		types: ["Fighting", "Psychic"],
		baseStats: {hp: 105, atk: 70, def: 80, spa: 70, spd: 80, spe: 70},
		abilities: {0: "Contrary", 1: "Stamina", H: "Telepathy"},
		eggGroups: ["Field"],
	},
elktrolysis: {
		num: -23,
		species: "Elktrolysis",
		types: ["Ice", "Electric"],
		baseStats: {hp: 75, atk: 75, def: 105, spa: 124, spd: 95, spe: 106},
		abilities: {0: "Snow Warning", 1: "Slush Rush", H: "Snow Cloak"},
	},
holloqua: {
		num: -23,
		species: "Holloqua",
		types: ["Water", "Ghost"],
		baseStats: {hp: 105, atk: 70, def: 120, spa: 125, spd: 105, spe: 80},
		abilities: {0: "Emergency Exit", H: "Stall"},
		heightm: 3.7,
		weightkg: 83.8,
		eggGroups: ["Water 2", "Amporphous"],
	},
tungstorm: {
		num: -23,
		species: "Tungstorm",
		types: ["Steel", "Flying"],
		baseStats: {hp: 90, atk: 116, def: 120, spa: 57, spd: 100, spe: 52},
		abilities: {0: "Flash Fire"},
		heightm: 3.7,
		weightkg: 2000,
		eggGroups: ["Mineral", "Flying"],
	},
barnecro: {
		num: -23,
		species: "Barnecro",
		types: ["Water", "Ghost"],
		baseStats: {hp: 60, atk: 110, def: 120, spa: 60, spd: 120, spe: 80},
		abilities: {0: "Disguise", H: "Mold Breaker"},
	},
};

exports.BattlePokedex = BattlePokedex;
