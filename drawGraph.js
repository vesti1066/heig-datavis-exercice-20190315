const d3 = require('d3')
const fs = require('fs')

const writeSvg = svg =>
  fs.writeFileSync('graph.svg', svg, 'utf-8')
// passez la chaine de charactère à writeSvg pour écrire graph.svg

const DATA = require('./asylumByCountry.json');



const graph = DATA => `

<svg width="2000" height="1000" xmlns="http://www.w3.org/2000/svg">
	${DATA.map((d, i)  => `<circle cx="${(i+5)*60}" cy="100" r="${d.sum*1.5}" fill="purple" />`).join('\n') }
</svg>
`

writeSvg(graph(DATA));