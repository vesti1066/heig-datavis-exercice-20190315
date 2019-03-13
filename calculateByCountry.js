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
// asylum.json doit être créé avec prepareData