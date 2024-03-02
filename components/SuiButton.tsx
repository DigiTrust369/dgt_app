import { ConnectButton, useWalletKit } from "@mysten/wallet-kit";
import { formatAddress } from "@mysten/sui.js/utils";
import Link from "next/link";

function SuiButton() {
  const { currentAccount } = useWalletKit();
  console.log("jldfjlasdjfklsdjkf", currentAccount?.address)
  return (
    <div>
      {currentAccount?.address ? (
        <Link href={"/wallet/" + currentAccount?.address}  className="mr-2 hover:text-blue-400"> Lịch sử giao dịch</Link>
      ):(<div></div>)}
    <ConnectButton
      connectText={"Kết nối ví SUI"}
     
    />
    </div>
  );
}

export default SuiButton;