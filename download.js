const fetch = require('node-fetch');
const URL = 'https://raw.githubusercontent.com/idris-maps/heig-datavis-2019/master/20190322-node/exercice_node/ch_asylum_demands.csv';
const d3 = require('d3');

fetch(URL)
	.then(res => res.text())
	.then(d3.csvParse)
	.then(res => res.filter(r => r.affected !== '*'))
	.then(res => res.map(r => ({ ...r, year: Number(r.year), affected: Number(r.affected)}))) // permet de changer un objet

	.then(res => res.map(r => ({...r, country_asylum: r.country_asylum.includes("USA") ? "USA" : r.country_asylum}))) // include regarde si la ligne contient le mot ; le ? est égal a if is true -> ;  le : est le else
	

	.then(console.log);

