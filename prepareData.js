const fetch = require('node-fetch')
const d3 = require('d3')
const R = require('ramda')

const writeJson = require('./writeJson')
/*
  writeJson prends deux arguments:
    * le nom du fichier
    * un objet ou une liste JSON
  
  ex:
    writeJson('asylum.json', data)
*/

const URL = 'https://raw.githubusercontent.com/idris-maps/heig-datavis-2019/master/20190315-node/exercie_node/ch_asylum_demands.csv'
// le lien vers le fichier CSV