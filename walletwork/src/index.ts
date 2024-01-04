import {Connection, clusterApiUrl, PublicKey, Keypair} from "@solana/web3.js"

const keypair = new Keypair()
const pub_key = keypair.publicKey
const priv_key = keypair.secretKey

const getBalance = async () => {
    const connection = new Connection(clusterApiUrl("devnet"), "confirmed")
    const wallet = new PublicKey(pub_key)

    const balance = await connection.getBalance(wallet)

    console.log(balance)
}

getBalance()