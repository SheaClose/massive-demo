const massive = require('massive');

const connectionString = 'postgres://SheaClose@localhost/massive_demo';
const massiveInstance = massive.connectSync({ connectionString: connectionString });
console.log('------HERE--------')
module.exports = massiveInstance
