"use client";
import React, { useEffect } from "react";
import { getFullnodeUrl, SuiClient } from "@mysten/sui.js/client";
import { TransactionBlock } from "@mysten/sui.js/transactions";
import { useWalletKit } from "@mysten/wallet-kit";
import DepositForm from "./DepositForm";

const SuiWallet = () => {
  //const wallet = useWallet();
  //const { mutate: signTransactionBlock } = useSignTransactionBlock();
  const { signAndExecuteTransactionBlock } = useWalletKit();

  //handle()lasjfjdfjk
  console.log(getFullnodeUrl("devnet"));
  // create a client connected to devnet
  useEffect(() => {
    console.log(getFullnodeUrl("devnet"));

    //abc();
  }, []);

  async function abc() {
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
    const coin = txb.splitCoins(txb.gas, [100000]);
    txb.moveCall({
      target: `${contractAddress}::${contractModule}::${contractMethod}`,
      arguments: [
        txb.object(
          "0x240c7f4fe449e79388c0bc2aad4c9baee92068b1c6f180caa81111fd506af578"
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
  }

  const withdraw = async () => {
    const txb = new TransactionBlock();
    const contractAddress =
      "0xe86865464e4030acefff7ec23be26d0d8a95a18f140113d73ea1c645080f5a3b";
    const contractModule = "vault";
    const contractMethod = "pay_to_beneficiary";
    // const coin = txb.splitCoins(txb.gas, [100000]);
    txb.moveCall({
      target: `${contractAddress}::${contractModule}::${contractMethod}`,
      arguments: [
        txb.object(
          "0x240c7f4fe449e79388c0bc2aad4c9baee92068b1c6f180caa81111fd506af578"
        ),
        txb.object(
          "0xc8694cc09f1c5a9f89cb06e213d81128ac5dc6e8d72e9efe60ea54e874bffde5"
        ),
        txb.pure(100000),
      ],
    });

    await signAndExecuteTransactionBlock({
      transactionBlock: txb as any,
    });

    console.log(txb);
  };

  //const txb = new TransactionBlock();

  // const txn = await client.call("deposit", ["0x240c7f4fe449e79388c0bc2aad4c9baee92068b1c6f180caa81111fd506af578", 1]);
  // const client = new SuiClient({
  //   url: getFullnodeUrl('devnet'),
  // });
  // const txn = await client.getObject({
  //   id: '0xcc2bd176a478baea9a0de7a24cd927661cc6e860d5bacecb9a138ef20dbab231',
  //   // fetch the object content field
  //   options: { showContent: true },
  // });
  // const txn = await client.getTransactionBlock({
  //   digest: '9XFneskU8tW7UxQf7tE5qFRfcN4FadtC2Z3HAZkgeETd=',
  //   // only fetch the effects field
  //   options: {
  //     showEffects: true,
  //     showInput: false,
  //     showEvents: false,
  //     showObjectChanges: false,
  //     showBalanceChanges: false,
  //   },
  // });

  //const txn = await client.call("deposit", ["0x240c7f4fe449e79388c0bc2aad4c9baee92068b1c6f180caa81111fd506af578"], 1);

  // get coins owned by an address
  // const ax = await client.getCoins({
  //   owner: "0xcc2bd176a478baea9a0de7a24cd927661cc6e860d5bacecb9a138ef20dbab231",
  // });
  // console.log("dklajfdklsjfldjskflf");
  //console.log(txn);

  return (
    <div>
      <p onClick={withdraw}>withdraw</p>
      <div onClick={abc}>onclick(hand0</div>
      <DepositForm />
    </div>
  );
};

export default SuiWallet;
