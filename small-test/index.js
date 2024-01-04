const {
  Connection,
  PublicKey,
  Account,
  connectionApiUrl,
  Transaction,
  Keypair,
  LAMPORTS_PER_SOL,
  clusterApiUrl,
} = require("@solana/web3.js");

const dev_keys = new Keypair();
const pub_key = new PublicKey(dev_keys._keypair.publicKey).toString();
const private_key = dev_keys._keypair.secretKey;

const getWalletBalance = async () => {
  const connection = new Connection(clusterApiUrl("devnet"), "confirmed");
  const my_wallet = Keypair.fromSecretKey(private_key);
  const balance = await connection.getBalance(
    new PublicKey(my_wallet.publicKey)
  );

  console.log(
    `Wallet address is ${my_wallet.publicKey} and my balance is ${balance}`
  );

  return balance;
};

getWalletBalance();
