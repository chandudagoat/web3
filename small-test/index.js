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
  const my_wallet = await Keypair.fromSecretKey(private_key);
  const balance = await connection.getBalance(
    new PublicKey(my_wallet.publicKey)
  );

  console.log(
    `Wallet address is ${my_wallet.publicKey} and my balance is ${balance}`
  );

  return balance;
};

const requestAirdrop = async () => {
  const connection = new Connection(clusterApiUrl("devnet"), "confirmed");
  const my_wallet = await Keypair.fromSecretKey(private_key);

  const result = connection.requestAirdrop(
    new PublicKey(my_wallet.publicKey),
    1 * LAMPORTS_PER_SOL
  );

  const block_hash = await connection.getLatestBlockhash();

  await connection.confirmTransaction({
    blockhash: block_hash,
    lastValidBlockHeight: block_hash.lastValidBlockHeight,
    signature: result,
  });
};

requestAirdrop();
// getWalletBalance();
