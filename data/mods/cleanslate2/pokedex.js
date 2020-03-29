'use strict';

/**@type {{[k: string]: TemplateData}} */
let BattlePokedex = {
	weezinggalar: {
		inherit: true,
		species: "Weezing-Galar",
		types: ["Poison", "Fairy"],
		baseStats: {hp: 89, atk: 113, def: 154, spa: 106, spd: 76, spe: 82},
		abilities: {0: "Neutralizing Gas", H: "Misty Surge"},
		prevo: null,
	},
	orbeetle: {
		inherit: true,
		species: "Orbeetle",
		types: ["Psychic", "Electric"],
		baseStats: {hp: 72, atk: 52, def: 150, spa: 69, spd: 164, spe: 123},
		abilities: {0: "Swarm", 1: "Frisk", H: "Trace"},
		prevo: null,
	},
	stonjourner: {
		inherit: true,
		species: "Stonjourner",
		types: ["Rock", "Ghost"],
		baseStats: {hp: 120, atk: 145, def: 155, spa: 20, spd: 20, spe: 100},
		abilities: {0: "Power Spot"},
	},
	cherrimsunshine: {
		num: 421,
		inherit: true,
		species: "Cherrim-Sunshine",
		types: ["Grass", "Fire"],
		baseStats: {hp: 60, atk: 60, def: 60, spa: 140, spd: 80, spe: 130},
		abilities: {0: "Drought"},
		height: 0.5,
		weightkg: 9.3,
		eggGroups: ["Fairy", "Grass"],
	},
	zacian: {
		inherit: true,
		species: "Zacian",
		types: ["Fighting", "Fairy"],
		baseStats: {hp: 92, atk: 130, def: 105, spa: 80, spd: 105, spe: 118},
		abilities: {0: "Intimidate"},
	},
	dubwool: {
		inherit: true,
		species: "Dubwool",
		types: ["Normal"],
		baseStats: {hp: 85, atk: 105, def: 120, spa: 115, spd: 120, spe: 55},
		abilities: {0: "Steadfast", 1: "Cotton Down"},
	},
	gumshoos: {
		num: 735,
		species: "Gumshoos",
		types: ["Normal", "Ground"],
		baseStats: {hp: 100, atk: 140, def: 90, spa: 75, spd: 110, spe: 85},
		abilities: {0: "Stakeout", 1: "Adaptability"},
		height: 0.7,
		weightkg: 14.2,
		eggGroups: ["Field"],
	},
	seismitoad: {
		num: 537,
		species: "Seismitoad",
		types: ["Ground", "Water"],
		baseStats: {hp: 140, atk: 85, def: 95, spa: 110, spd: 95, spe: 85},
		abilities: {0: "Swift Swim", 1: "Water Absorb", H: "Flare Boost"},
		height: 1.5,
		weightkg: 62,
		eggGroups: ["Water1"],
	},
	snorlaxgmax: {
		num: 143,
		species: "Snorlax-Gmax",
		types: ["Grass", "Ground"],
		baseStats: {hp: 150, atk: 100, def: 90, spa: 70, spd: 90, spe: 40},
		abilities: {0: "Harvest", 1: "Ripen", H: "Thick Fat"},
		genderRatio: {M: 0.875, F: 0.125},
		heightm: 2.1,
		weightkg: 460,
	},
	walrein: {
		num: 365,
		species: "Walrein",
		types: ["Water", "Steel"],
		baseStats: {hp: 133, atk: 122, def: 126, spa: 89, spd: 91, spe: 54},
		abilities: {0: "Iron Barbs", 1: "Strong Jaw", H: "Thick Fat"},
		height: 1.4,
		weightkg: 150.6,
		prevo: null,
		eggGroups: ["Water1", "Field"],
	},
	dhelmise: {
		num: 781,
		species: "Dhelmise",
		types: ["Ghost", "Steel"],
		gender: "N",
		baseStats: {hp: 90, atk: 131, def: 131, spa: 89, spd: 99, spe: 65},
		abilities: {0: "Sap Sipper", 1: "Water Absorb", H: "Drizzle"},
		height: 3.9,
		weightkg: 210,
		eggGroups: ["Mineral"],
	},
	togekiss: {
		num: 468,
		species: "Togekiss",
		types: ["Flying"],
		baseStats: {hp: 110, atk: 70, def: 100, spa: 120, spd: 100, spe: 90},
		abilities: {0: "Zephyr"},
		height: 1.5,
		weightkg: 38,
		prevo: null,
		eggGroups: ["Flying", "Fairy"],
	},
	scolipede: {
		num: 545,
		species: "Scolipede",
		types: ["Bug", "Poison"],
		baseStats: {hp: 90, atk: 120, def: 89, spa: 65, spd: 89, spe: 122},
		abilities: {0: "Swarm", 1: "Poison Point", H: "Poison Touch"},
		height: 2.5,
		weightkg: 200.5,
		prevo: null,
		eggGroups: ["Bug"],
	},
	cursola: {
		inherit: true,
		species: "Cursola",
		types: ["Ghost"],
		baseStats: {hp: 60, atk: 95, def: 80, spa: 95, spd: 210, spe: 30},
		abilities: {0: "Cloud Nine", 1: "Cursed Body", H: "Natural Cure"},
		prevo: null,
	},
	torkoal: {
		inherit: true,
		species: "Torkoal",
		types: ["Fire", "Water"],
		baseStats: {hp: 90, atk: 130, def: 120, spa: 95, spd: 100, spe: 70},
		abilities: {0: "Humidifier"},
	},
	gligar: {
		inherit: true,
		species: "Gligar",
		types: ["Poison", "Dark"],
		baseStats: {hp: 78, atk: 94, def: 117, spa: 67, spd: 65, spe: 59},
		abilities: {0: "Hyper Cutter", 1: "Sticky Hold", H: "Prankster"},
	},
	octillery: {
		inherit: true,
		species: "Octillery",
		types: ["Ice"],
		baseStats: {hp: 88, atk: 88, def: 88, spa: 118, spd: 118, spe: 100},
		abilities: {0: "Suction Cups", 1: "Sniper", H: "Rain Dish"},
		prevo: null,
	},
	necrozma: {
		inherit: true,
		species: "Necrozma",
		types: ["Dark", "Psychic"],
		baseStats: {hp: 97, atk: 113, def: 113, spa: 113, spd: 113, spe: 101},
		abilities: {0: "Prism Armor", H: "Magic Bounce"},
	},
	dunsparce: {
		inherit: true,
		species: "Dunsparce",
		types: ["Fairy", "Dragon"],
		baseStats: {hp: 100, atk: 108, def: 75, spa: 98, spd: 125, spe: 70},
		abilities: {0: "Poison Heal", 1: "Serene Grace", H: "Natural Cure"},
	},
	victreebel: {
		inherit: true,
		species: "Victreebel",
		types: ["Grass", "Dragon"],
		baseStats: {hp: 100, atk: 135, def: 80, spa: 130, spd: 80, spe: 95},
		abilities: {0: "Chlorophyll", 1: "Mold Breaker", H: "Stench"},
	},
	runerigus: {
		inherit: true,
		species: "Runerigus",
		types: ["Rock", "Electric"],
		baseStats: {hp: 80, atk: 70, def: 105, spa: 145, spd: 105, spe: 110},
		abilities: {0: "Grounding", 1: "Heatproof", H: "Lightning Rod"},
		prevo: null,
	},
	aerodactyl: {
		inherit: true,
		species: "Aerodactyl",
		types: ["Rock", "Flying"],
		baseStats: {hp: 100, atk: 60, def: 105, spa: 135, spd: 105, spe: 110},
		abilities: {0: "Sand Stream", 1: "Pressure", H: "Sand Force"},
	},
	unown-p: {
		inherit: true,
		species: "Unown",
		types: ["Bug", "Dark"],
		baseStats: {hp: 100, atk: 60, def: 105, spa: 135, spd: 105, spe: 110},
		abilities: {0: "Sand Stream", 1: "Pressure", H: "Sand Force"},
	},
	aerodactyl: {
		inherit: true,
		species: "Aerodactyl",
		types: ["Rock", "Flying"],
		baseStats: {hp: 100, atk: 60, def: 105, spa: 135, spd: 105, spe: 110},
		abilities: {0: "Sand Stream", 1: "Pressure", H: "Sand Force"},
	},
	unownp: {
		inherit: true,
		species: "Unown-P",
		forme: "P",
		types: ["Bug", "Dark"],
		baseStats: {hp: 70, atk: 70, def: 115, spa: 140, spd: 70, spe: 115},
		abilities: {0: "Punk Rock"},
		otherForms: ["unownm", "unowns"],
	},
	unowns: {
		inherit: true,
		species: "Unown-S",
		forme: "S",
		types: ["Bug", "Dark"],
		baseStats: {hp: 70, atk: 115, def: 115, spa: 70, spd: 70, spe: 140},
		abilities: {0: "Sheer Force"},
		otherForms: ["unownm", "unownp"],
	},
	unownm: {
		inherit: true,
		species: "Unown-M",
		forme: "M",
		types: ["Bug", "Dark"],
		baseStats: {hp: 70, atk: 115, def: 140, spa: 70, spd: 115, spe: 70},
		abilities: {0: "Magic Guard"},
		otherForms: ["unownp", "unowns"],
	},
	shaymin: {
		inherit: true,
		species: "Unown-M",
		forme: "M",
		types: ["Bug", "Dark"],
		baseStats: {hp: 70, atk: 115, def: 140, spa: 70, spd: 115, spe: 70},
		abilities: {0: "Magic Guard"},
		otherForms: ["unownp", "unowns"],
	},
	shaymin: {
		inherit: true,
		species: "Unown-M",
		forme: "M",
		types: ["Bug", "Dark"],
		baseStats: {hp: 70, atk: 115, def: 140, spa: 70, spd: 115, spe: 70},
		abilities: {0: "Magic Guard"},
		otherForms: ["unownp", "unowns"],
	},
	shaymin: {
		inherit: true,
		types: ["Grass", "Fairy"],
		gender: "N",
		baseStats: {hp: 100, atk: 60, def: 120, spa: 100, spd: 120, spe: 100},
		abilities: {0: "Natural Cure", H: "Regenerator"},
	},
	shayminsky: {
		inherit: true,
		types: ["Grass", "Flying"],
		baseStats: {hp: 100, atk: 103, def: 75, spa: 120, spd: 75, spe: 127},
		abilities: {0: "Magic Guard"},
	},
	scrafty: {
		inherit: true,
		species: "Scrafty",
		types: ["Dark", "Fighting"],
		baseStats: {hp: 115, atk: 140, def: 105, spa: 65, spd: 95, spe: 80},
		abilities: {0: "Mold Breaker", 1: "Intimidate", H: "Scrappy"},
	},
};

exports.BattlePokedex = BattlePokedex;
