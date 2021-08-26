const fs = require('fs')


fs.writeFileSync('notes.txt', 'My name is Victor and I am learning Node.js!')

fs.appendFileSync('notes.txt', ' I am excited to learn node.js')