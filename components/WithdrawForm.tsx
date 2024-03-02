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

const WithdrawForm = () => {
  const [amount, setAmount] = useState("");
  const { signAndExecuteTransactionBlock } = useWalletKit();
  const [account, setAccount] = useState(null);
  let accounts;
  let userAddress;

  const withdrawKlay = async (event: any) => {
    console.log("Amount: ", amount);
    accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    userAddress = accounts[0];
    const web3 = new Web3(window.ethereum);
    const contract = new web3.eth.Contract(
      AbiSendTx,
      "0xee42Cf6E3E575b5aBC2B3Ae760BA1AF2c05791df"
    );

    const decimal = 10 ** 17;
    const data = await (contract.methods.transfer as any)(
      "0xF7FCCFc3DE0789362B5B998782992a27b12040c8",
      parseInt(amount) * decimal
    )
      .send({ from: userAddress, gasPrice: "25000000000", gas: "8500000" })
      .then(console.log)
      .catch(console.error);
    console.log(data);
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    // Submit the form data to the server
    const data = {
      amount: amount,
    };

    console.log(amount);
    console.log(data);

    const client = new SuiClient({ url: getFullnodeUrl("devnet") });

    const txb = new TransactionBlock();
    const contractAddress =
      "0xe86865464e4030acefff7ec23be26d0d8a95a18f140113d73ea1c645080f5a3b";
    const contractModule = "vault";
    const contractMethod = "pay_to_beneficiary";
    txb.moveCall({
      target: `${contractAddress}::${contractModule}::${contractMethod}`,
      arguments: [
        txb.object(
          "0x225cdc024c933921d6360f3463b0233241779480a7a5c5c67e270fbe9bcf9581"
        ),
        txb.object(
          "0xf51cc71cf315af1601b03cf961b5c769a94d5ee9527fc1ebc56d0f2f21b742c3"
        ),
        txb.pure(amount),
      ],
    });

    await signAndExecuteTransactionBlock({
      transactionBlock: txb as any,
    });

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
      {/*<form onSubmit={handleSubmit}>*/}
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
          onClick={withdrawKlay}
        >
          Withdraw
        </button>
      </div>
      {/*</form>*/}
    </>
  );
};

export default WithdrawForm;
