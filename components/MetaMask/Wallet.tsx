"use client";
import { useTranslations } from "next-intl";

import React from "react";
import Web3 from "web3";
import { useState, useEffect } from "react";
import { shortenAddress } from "../../utils/address";
import Link from "next/link";

import LocalToggle from "@/locale/LocalToggle";

declare global {
  interface Window {
    ethereum: any;
  }
}

const Wallet = () => {
  const [account, setAccount] = useState(null);
  const [balance, setBalance] = useState(null);
  let accounts;
  let userAddress;
  // let privateKey = process.env.PRIVATE_KEY;
  const t = useTranslations("Commons");

  useEffect(() => {
    const fetchAccount = async () => {
      try {
        window.ethereum.enable().then(async () => {
          const web3 = new Web3(window.ethereum);
          console.log("jklfdjalkfjdks", web3);
          //accounts = web3.eth.getAccounts();
          accounts = await window.ethereum.request({
            method: "eth_requestAccounts",
          });
          userAddress = accounts[0];
          setAccount(userAddress);
          var balance = await web3.eth.getBalance(userAddress); //Will give value in.
          const ethBalance = web3.utils.fromWei(balance, "ether");
          console.log(ethBalance);
          setBalance(ethBalance as any);
          console.log(userAddress, "-------", balance);
          console.log("jfkldajsklfjadklsfjkldsjfkl", account);
          console.log(
            window.ethereum.networkVersion,
            "window.ethereum.networkVersion"
          );

          window.ethereum.on("accountsChanged", async (accounts: any) => {
            // handle account change
            accounts = await web3.eth.getAccounts();
            userAddress = accounts[0];
            setAccount(userAddress);
            var balance = await web3.eth.getBalance(userAddress); //Will give value in.
            const ethBalance = web3.utils.fromWei(balance, "ether");

            setBalance(ethBalance as any);
            console.log("change accounts", userAddress, "-------", balance);
          });

          window.ethereum.on("disconnect", () => {
            // handle metamask logout
            console.log("disconnect");
            setAccount(null);
          });
        });
      } catch (error: any) {
        if (error.message === "User denied account authorization") {
          // handle the case where the user denied the connection request
        } else if (error.message === "MetaMask is not enabled") {
          // handle the case where MetaMask is not available
        } else {
          // handle other errors
        }
      }
    };

    fetchAccount().catch(console.log);
  }, []);

  // const connectWallet = async () => {
  //   window.ethereum
  //     .request({ method: "eth_requestAccounts" })
  //     .then(handleAccountsChanged)
  //     .catch((error) => {
  //       if (error.code === 4001) {
  //         // EIP-1193 userRejectedRequest error
  //         console.log("Please connect to MetaMask.");
  //       } else {
  //         console.error(error);
  //       }
  //     });
  // };

  // const handleAccountsChanged = async () => {
  //   const web3 = new Web3(window.ethereum);
  //   const accounts = web3.eth.getAccounts();
  //   const userAddress = accounts[0];
  //   setAccount(userAddress);
  //   console.log(userAddress);
  // };

  return (
    <div className="p-4">
      {<LocalToggle />}
      {!account ? (
        <button
          className="border-[1px] border-blue-500 hover:bg-blue-600 hover:text-white text-blue-500 font-medium py-2 px-4 rounded"
          onClick={() => window.ethereum.enable()}
        >
          {t("Header.connect-wallet")}
        </button>
      ) : null}
      {account ? (
        <>
          {/* <button
            className="mr-5 bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded"
            onClick={disConnect}
          >
            Logout
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded"
            onClick={getContract}
          >
            Get Smart Contract
          </button>
          <button
            className="ml-5 bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded"
            onClick={setContract}
          >
            Set Smart Contract
          </button>
          <button
            className="ml-5 bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded"
            onClick={sendTx}
          >
            SendTx
          </button>
          <button
            className="ml-5 bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded"
            onClick={getPrice}
          >
            Get Price
          </button> */}
          <Link href={"/maple"} className="mr-2 hover:text-blue-400 text-black">
            Create Vault
          </Link>
          <Link
            href={"/wallet/" + account}
            className="mr-2 hover:text-blue-400 text-black"
          >
            Transaction
          </Link>

          <button className="border-[1px] border-blue-500 hover:bg-blue-600 hover:text-white text-blue-500 font-medium py-2 px-4 rounded">
            {shortenAddress(account)}
          </button>
          {/* <p className="text-gray-700">Your account balance: {balance}</p> */}
        </>
      ) : null}
    </div>
  );
};

export default Wallet;
