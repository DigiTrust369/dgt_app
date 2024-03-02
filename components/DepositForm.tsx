"use client";
import React, { useState } from "react";
import { getFullnodeUrl, SuiClient } from "@mysten/sui.js/client";
import { TransactionBlock } from "@mysten/sui.js/transactions";
import { useWalletKit } from "@mysten/wallet-kit";
import { AbiSendTx } from "../app/abi/SendTx";
import Web3 from "web3";

declare global {
  interface Window {
    ethereum: any;
  }
}
const DepositForm = () => {
  const { signAndExecuteTransactionBlock } = useWalletKit();
  const [amount, setAmount] = useState("");
  const [account, setAccount] = useState(null);
  let accounts;
  let userAddress;

  const handleSubmitKlaytn = async (event: any) => {
    accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    userAddress = accounts[0];
    console.log("ldajflkadsfjkl", userAddress);
    const web3 = new Web3(window.ethereum);
    const contract = new web3.eth.Contract(
      AbiSendTx,
      "0xee42Cf6E3E575b5aBC2B3Ae760BA1AF2c05791df"
    );
    const data = await (contract.methods.transfer as any)(
      "0xF7FCCFc3DE0789362B5B998782992a27b12040c8",
      1000000
    )
      .send({ from: userAddress, gasPrice: "25000000000", gas: "8500000" })
      .then(console.log)
      .catch(console.error);
    console.log(data);
  };

  const setContract = async () => {
    accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    userAddress = accounts[0];
    const web3 = new Web3(window.ethereum);

    const contract = new web3.eth.Contract(
      AbiSendTx,
      "0xbe4359108dd1a21AA0784E3ad7C8a2C53402713f"
    );

    const value = 1;
    const gas = await (contract.methods.setData as any)(value).estimateGas();

    const gasPrice = await web3.eth.getGasPrice();
    const nonce = await web3.eth.getTransactionCount(userAddress);

    const tx = {
      from: userAddress,
      to: process.env.CONTRACT_ADDRESS,
      gasPrice: gasPrice,
      gas: gas,
      nonce: nonce,
      data: (contract.methods.setData as any)(value).encodeABI(),
    };

    const privateKey = "pqd";
    const signedTx = await web3.eth.accounts.signTransaction(tx, privateKey);

    const receipt = await web3.eth.sendSignedTransaction(
      signedTx.rawTransaction
    );
    if (receipt.status === "0x1") {
      // the transaction was successful
      alert("Success Deposit");
    } else {
      // the transaction failed
    }
  };

  // useEffect(() => {
  //   console.log(getFullnodeUrl("devnet"));
  // }, []);

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    // Submit the form data to the server
    const data = {
      amount: amount,
    };

    console.log(amount);
    console.log(data);

    const client = new SuiClient({ url: getFullnodeUrl("devnet") });
    // const allCoins = await client.getMoveCallMetrics({
    //   owner: '0x29d43b055c397ce26f81d401cdc82e480f91afaffef7656da5bbc4628e2bace7',
    // });
    //console.log(allCoins)
    // const a = await client.call("deposit", [
    //   "0x240c7f4fe449e79388c0bc2aad4c9baee92068b1c6f180caa81111fd506af578",
    //   "0x2::coin::Coin<0x2::sui::SUI>"
    // ]);
    // console.log(a)

    const txb = new TransactionBlock();
    const contractAddress =
      "0xe86865464e4030acefff7ec23be26d0d8a95a18f140113d73ea1c645080f5a3b";
    const contractModule = "vault";
    const contractMethod = "deposit";
    const coin = txb.splitCoins(txb.gas, [amount]);
    txb.moveCall({
      target: `${contractAddress}::${contractModule}::${contractMethod}`,
      arguments: [
        txb.object(
          "0x225cdc024c933921d6360f3463b0233241779480a7a5c5c67e270fbe9bcf9581"
        ),
        coin,
      ],
    });

    // await wallet.wallet.signAndExecuteTransactionBlock({
    //   +    transactionBlock: tx
    //     });
    await signAndExecuteTransactionBlock({
      transactionBlock: txb as any,
    });
    // signTransactionBlock({
    //   transactionBlock: txb,
    // })
    // }).then(async (result:any) => {
    //   console.log(result)
    //   alert('Sui sent successfully');
    // });

    console.log(txb);

    // fetch('/api/submit', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(data),
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     if (data.success) {
    //       // Handle successful submission
    //       console.log('Form submitted successfully');
    //     } else {
    //       // Handle submission error
    //       console.error('Form submission failed:', data.error);
    //     }
    //   });
  };

  return (
    <>
      {/* <form onSubmit={handleSubmitKlaytn}> */}
      <label className="block text-gray-700 text-sm font-bold mb-2">
        Amount
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="number"
        id="amount"
        value={amount}
        onChange={(event) => setAmount(event.target.value)}
      />
      <div className="text-right">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
          onClick={handleSubmitKlaytn}
        >
          Deposit
        </button>
      </div>
      {/* </form> */}
    </>
  );
};

export default DepositForm;
