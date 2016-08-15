module.exports = {
  abandonclaim: 'abandonclaim',
  addMultiSigAddress: 'addmultisigaddress',
  addNode: 'addnode', // bitcoind v0.8.0+
  backupWallet: 'backupwallet',
  createMultiSig: 'createmultisig',
  createRawTransaction: 'createrawtransaction', // bitcoind v0.7.0+
  decodeRawTransaction: 'decoderawtransaction', // bitcoind v0.7.0+
  decodeScript: 'decodescript',
  dumpPrivKey: 'dumpprivkey',
  dumpWallet: 'dumpwallet', // bitcoind v0.9.0+
  encryptWallet: 'encryptwallet',
  estimateFee: 'estimatefee', // bitcoind v0.10.0x
  estimatePriority: 'estimatepriority', // bitcoind v0.10.0+
  generate: 'generate', // bitcoind v0.11.0+
  getAccount: 'getaccount',
  getAccountAddress: 'getaccountaddress',
  getAddedNodeInfo: 'getaddednodeinfo', // bitcoind v0.8.0+
  getAddressesByAccount: 'getaddressesbyaccount',
  getBalance: 'getbalance',
  getBestBlockHash: 'getbestblockhash', // bitcoind v0.9.0+
  getBlock: 'getblock',
  getBlockchainInfo: 'getblockchaininfo', // bitcoind v0.9.2+
  getBlockCount: 'getblockcount',
  getBlockHash: 'getblockhash',
  getBlockTemplate: 'getblocktemplate', // bitcoind v0.7.0+
  getChainTips: 'getchaintips', // bitcoind v0.10.0+
  getConnectionCount: 'getconnectioncount',
  getDifficulty: 'getdifficulty',
  getGenerate: 'getgenerate',
  getInfo: 'getinfo',
  getMempoolInfo: 'getmempoolinfo', // bitcoind v0.10+
  getMiningInfo: 'getmininginfo',
  getNetTotals: 'getnettotals',
  getNetworkInfo: 'getnetworkinfo', // bitcoind v0.9.2+
  getNetworkHashPs: 'getnetworkhashps', // bitcoind v0.9.0+
  getNewAddress: 'getnewaddress',
  getPeerInfo: 'getpeerinfo', // bitcoind v0.7.0+
  getRawChangeAddress: 'getrawchangeaddress', // bitcoin v0.9+
  getRawMemPool: 'getrawmempool', // bitcoind v0.7.0+
  getRawTransaction: 'getrawtransaction', // bitcoind v0.7.0+
  getReceivedByAccount: 'getreceivedbyaccount',
  getReceivedByAddress: 'getreceivedbyaddress',
  getTransaction: 'gettransaction',
  getTxOut: 'gettxout', // bitcoind v0.7.0+
  getTxOutProof: 'gettxoutproof', // bitcoind v0.11.0+
  getTxOutSetInfo: 'gettxoutsetinfo', // bitcoind v0.7.0+
  getUnconfirmedBalance: 'getunconfirmedbalance', // bitcoind v0.9.0+
  getWalletInfo: 'getwalletinfo', // bitcoind v0.9.2+
  help: 'help',
  importAddress: 'importaddress', // bitcoind v0.10.0+
  importPrivKey: 'importprivkey',
  importWallet: 'importwallet', // bitcoind v0.9.0+
  keypoolRefill: 'keypoolrefill',
  keyPoolRefill: 'keypoolrefill',
  listAccounts: 'listaccounts',
  listAddressGroupings: 'listaddressgroupings', // bitcoind v0.7.0+
  listLockUnspent: 'listlockunspent', // bitcoind v0.8.0+
  listReceivedByAccount: 'listreceivedbyaccount',
  listReceivedByAddress: 'listreceivedbyaddress',
  listSinceBlock: 'listsinceblock',
  listTransactions: 'listtransactions',
  listUnspent: 'listunspent', // bitcoind v0.7.0+
  lockUnspent: 'lockunspent', // bitcoind v0.8.0+
  move: 'move',
  ping: 'ping', // bitcoind v0.9.0+
  prioritiseTransaction: 'prioritisetransaction', // bitcoind v0.10.0+
  sendFrom: 'sendfrom',
  sendMany: 'sendmany',
  sendRawTransaction: 'sendrawtransaction', // bitcoind v0.7.0+
  sendToAddress: 'sendtoaddress',
  setAccount: 'setaccount',
  setGenerate: 'setgenerate',
  setTxFee: 'settxfee',
  signMessage: 'signmessage',
  signRawTransaction: 'signrawtransaction', // bitcoind v0.7.0+
  stop: 'stop',
  submitBlock: 'submitblock', // bitcoind v0.7.0+
  validateAddress: 'validateaddress',
  verifyChain: 'verifychain', // bitcoind v0.9.0+
  verifyMessage: 'verifymessage',
  verifyTxOutProof: 'verifytxoutproof', // bitcoind v0.11.0+
  walletLock: 'walletlock',
  walletPassphrase: 'walletpassphrase',
  walletPassphraseChange: 'walletpassphrasechange',
  abandonsupport: 'abandonsupport',
  getclaimsforname: 'getclaimsforname',
  claimname: 'claimname',
  getclaimsfortx: 'getclaimsfortx',
  getclaimsintrie: 'getclaimsintrie',
  gettotalclaimednames: 'gettotalclaimednames',
  gettotalclaims: 'gettotalclaims',
  gettotalvalueofclaims: 'gettotalvalueofclaims',
  getvalueforname: 'getvalueforname',
  listnameclaims: 'listnameclaims',
  supportclaim: 'supportclaim',
  updateclaim: 'updateclaim',
  getbestblockhash: 'getbestblockhash',
  getblock: 'getblock',
  getblockchaininfo: 'getblockchaininfo',
  getblockhash: 'getblockhash',
  getblockheader: 'getblockheader',
  getnameproof: 'getnameproof',
  getblockcount: 'getblockcount',
  getchaintips: 'getchaintips',
  getdifficulty: 'getdifficulty',
  getclaimtrie: 'getclaimtrie',
  getrawmempool: 'getrawmempool',
  gettxoutproof: 'gettxoutproof',
  gettxoutsetinfo: 'gettxoutsetinfo',
  getmempoolinfo: 'getmempoolinfo',
  verifytxoutproof: 'verifytxoutproof',
  getinfo: 'getinfo',
  generatetoaddress: 'generatetoaddress',
  getblocktemplate: 'getblocktemplate',
  getgenerate: 'getgenerate',
  gethashespersec: 'gethashespersec',
  getmininginfo: 'getmininginfo',
  getnetworkhashps: 'getnetworkhashps',
  prioritisetransaction: 'prioritisetransaction',
  setgenerate: 'setgenerate',
  submitblock: 'submitblock',
  addnode: 'addnode',
  verifychain: 'verifychain',
  disconnectnode: 'disconnectnode',
  getaddednodeinfo: 'getaddednodeinfo',
  getconnectioncount: 'getconnectioncount',
  getnettotals: 'getnettotals',
  getnetworkinfo: 'getnetworkinfo',
  getpeerinfo: 'getpeerinfo',
  listbanned: 'listbanned',
  setban: 'setban',
  createrawtransaction: 'createrawtransaction',
  decoderawtransaction: 'decoderawtransaction',
  decodescript: 'decodescript',
  fundrawtransaction: 'fundrawtransaction',
  getrawtransaction: 'getrawtransaction',
  sendrawtransaction: 'sendrawtransaction',
  signrawtransaction: 'signrawtransaction',
  createmultisig: 'createmultisig',
  estimatefee: 'estimatefee',
  estimatepriority: 'estimatepriority',
  estimatesmartfee: 'estimatesmartfee',
  clearbanned: 'clearbanned',
  gettxout: 'gettxout',
  estimatesmartpriority: 'estimatesmartpriority',
  validateaddress: 'validateaddress',
  verifymessage: 'verifymessage',
  abandontransaction: 'abandontransaction',
  addmultisigaddress: 'addmultisigaddress',
  backupwallet: 'backupwallet',
  dumpprivkey: 'dumpprivkey',
  dumpwallet: 'dumpwallet',
  encryptwallet: 'encryptwallet',
  getaccount: 'getaccount',
  getaccountaddress: 'getaccountaddress',
  getaddressesbyaccount: 'getaddressesbyaccount',
  getbalance: 'getbalance',
  getnewaddress: 'getnewaddress',
  getrawchangeaddress: 'getrawchangeaddress',
  getreceivedbyaccount: 'getreceivedbyaccount',
  getreceivedbyaddress: 'getreceivedbyaddress',
  gettransaction: 'gettransaction',
  getunconfirmedbalance: 'getunconfirmedbalance',
  getwalletinfo: 'getwalletinfo',
  importaddress: 'importaddress',
  importprivkey: 'importprivkey',
  importprunedfunds: 'importprunedfunds',
  importpubkey: 'importpubkey',
  keypoolrefill: 'keypoolrefill',
  importwallet: 'importwallet',
  listaccounts: 'listaccounts',
  listaddressgroupings: 'listaddressgroupings',
  listlockunspent: 'listlockunspent',
  listreceivedbyaccount: 'listreceivedbyaccount',
  listreceivedbyaddress: 'listreceivedbyaddress',
  listsinceblock: 'listsinceblock',
  listtransactions: 'listtransactions',
  listunspent: 'listunspent',
  lockunspent: 'lockunspent',
  removeprunedfunds: 'removeprunedfunds',
  sendfrom: 'sendfrom',
  sendmany: 'sendmany',
  sendtoaddress: 'sendtoaddress',
  setaccount: 'setaccount',
  settxfee: 'settxfee',
  signmessage: 'signmessage'
}
