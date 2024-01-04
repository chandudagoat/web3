const {
  Connection,
  PublicKey,
  Account,
  connectionApiUrl,
  Transaction,
  Keypair,
  LAMPORTS_PER_SOL,
} = require("@solana/web3.js");

const dev_keys = new Keypair();
const pub_key = new PublicKey(dev_keys._keypair.publicKey).toString();
const private_key = dev_keys._keypair.secretKey;
console.log(pub_key, private_key);
