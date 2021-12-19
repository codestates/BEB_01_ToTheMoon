const IPFS = require('ipfs-api');
const ipfs = new IPFS({
	host: 'ipfs.infura.io', // infura
	port: 5001,
	protocol: 'https',
});

export default ipfs;
