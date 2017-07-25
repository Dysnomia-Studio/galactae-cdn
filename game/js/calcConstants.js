var globalConst = {
	buildingNumber: 	14,
}
var pointsCoef = {
	planet:				1,
	research: 			0.1,
}
/**
 * Production
 */
var planetRatios = [
	{ironRatio: 0.35, aluRatio: 0.50, copperRatio: 0.04, titanRatio: 0.10}, // Earth type
];

var mineralProd = 	[2,-2,145];
var metalProd = 	[1.85,-3,139];
var heliumProd = 	[190,-424,500];

var storageRatio = [47.52,8.29];
var heliumStorageRatio = 0.2;
/**
 * Buildings
 */
var buildingMaxLvl = [
	25,	// Carriere
	25,	// Metallurgie
	25,	// Habitations
	25,	// Serres
	30,	// Centrales Solaires
	25,	// Entrepôts
	5,	// Etat Major
	30,	// Centre de lancement
	30,	// Centre de recherches
	10,	// Radar
	25,	// Reservoir
	25,	// Chantier naval
	15,	// Commerce
	25	// Mine He3
];
var buildingPointCoef = [
	3, 	// Carriere
	3,	// Metallurgie
	4,	// Habitations
	4,	// Serres
	4,	// Centrales Solaires
	2,	// Entrepôts
	10,	// Etat Major
	7,	// Centre de lancement
	8,	// Centre de recherches
	4,	// Radar
	2,	// Reservoir
	8,	// Chantier naval
	6,	// Commerce
	3,	// Mine He3
];
var buildCost = {
	aluminium: [
		// Ground building
		[0,0,0], // Quarry
		[0,0,0], // Metallurgie
		[0,0,0], // Living
		[0.8,8,-5], // Serres
		[0.6,3,0], // Solar panel
		[0,0,0], // Warehouse
		[0.6,8,-6], // Hedquarters
		[0.6,3,0], // Launching Center
		[0.25,8,0], // Research Center
		// Space stations
		[1.7,1,0], // Radar
		[0.7,8,-3], // Tank
		[0.5,4,5], // Shipyard
		[0.6,3,5], // Trade
		[0.9,9,-3], // He3exp
	],
	iron: [
		// Ground building
		[8,-20,17], // Quarry
		[2,-2,0], // Metallurgie
		[2.7,-6,8], // Living
		[0,0,0], // Serres
		[0.5,2,0], // Solar panel
		[1.75,-1.5,0], // Warehouse
		[0.8,2,0], // Hedquarters
		[6,-20,24], // Launching Center
		[1.25,-1,0], // Research Center
		// Space stations
		[0,0,0], // Radar
		[2.2,2,0], // Tank
		[2,2,8], // Shipyard
		[2.5,4,0], // Trade
		[1.5,3,0], // He3exp
	],
	copper: [
		// Ground building
		[0,0,0], // Quarry
		[0,0,0], // Metallurgie
		[0.4,9,-5], // Living
		[0,0,0], // Serres
		[0.4,9,-5], // Solar panel
		[0,0,0], // Warehouse
		[0,0,0], // Hedquarters
		[0.85,3,3], // Launching Center
		[0.25,4,0], // Research Center
		// Space stations
		[0.35,9,0], // Radar
		[0,0,0], // Tank
		[0,0,0], // Shipyard
		[0,0,0], // Trade
		[0,0,0], // He3exp
	],
	titanium: [
		// Ground building
		[0.75,6.5,-2], // Quarry
		[2.8,6,6], // Metallurgie
		[0,0,0], // Living
		[1.2,12,-3.8], // Serres
		[0,0,0], // Solar panel
		[2.5,6,6.5], // Warehouse
		[1.2,5,-6.5], // Hedquarters
		[0.5,6.5,-2], // Launching Center
		[0.8,6.5,-2], // Research Center
		// Space stations
		[0,0,0], // Radar
		[0,0,0], // Tank
		[3,0,8], // Shipyard
		[0,0,0], // Trade
		[0,0,0], // He3exp
	],
	time: [
		// Ground building
		[0.03,0.05,-0.2], // Quarry
		[0.06,-0.15,0.1], // Metallurgie
		[0.07,-0.1,0.05], // Living
		[0.065,-0.1,0], // Serres
		[0.05,-0.1,0.03], // Solar panel
		[0.035,0.05,-0.2], // Warehouse
		[0.05,0.1,-0.1], // Hedquarters
		[0.04,0.08,-0.1], // Launching Center
		[0.02,0.03,-0.1], // Research Center
		// Space stations
		[0.1,0.1,0], // Radar
		[0.025,0.1,0], // Tank
		[0.075,0.15,0.15], // Shipyard
		[0.12,0.5,0], // Trade
		[0.017,0.15,0], // He3exp
	],
	energy: [
		// Ground building
		[725,100000,500000], // Quarry
		[1000,-10000,700], // Metallurgie
		[400,-1100,700], // Living
		[0,80000,-10000], // Serres
		[0,0,0], // Solar panel
		[35,-200,800], // Warehouse
		[150,200,1200], // Hedquarters
		[300,-1300,800], // Launching Center
		[550,-2500,700], // Research Center
		// Space stations
		[0,0,0], // Radar
		[0,0,0], // Tank
		[0,0,0], // Shipyard
		[0,0,0], // Trade
		[0,0,0], // He3exp
	],
};
/**
 * Research
 */
var researchProduction = [0.5,3.66,0];
var researchBonus = {
	// Bonus construction
	cp_mecanisation: -0.05,
	cp_tracteur: 	 -0.05,
	cp_materielTp: 	 -0.1,
};