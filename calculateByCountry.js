const R = require('ramda')

const writeJson = require('./writeJson')
/*
  writeJson prends deux arguments:
    * le nom du fichier
    * un objet ou une liste JSON
  
  ex:
    writeJson('asylumByCountry.json', list)
*/
const DATA = require('./asylum.json')

const COUNTRY = R.uniq(DATA.map(R.prop('country_asylum')));

let FIND_BY_COUNTRY = country_asylum => 
							({

							country_asylum, sum:

							DATA.filter(d => d.country_asylum === country_asylum)
							.map(d => d.affected)
							.reduce((sum, d) => sum + d, 0)

});
		
let COUNTRIES_STATS = COUNTRY.map(country => FIND_BY_COUNTRY(country));
					
writeJson('asylumByCountry.json', COUNTRIES_STATS);