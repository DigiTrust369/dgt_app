"use client";
import { Header, Footer, MappleAssetBox, VaultBox } from "@/components";
import { WalletKitProvider } from "@mysten/wallet-kit";

function Home() {
  return (
    <main className="overflow-hidden flex flex-col min-h-screen">
      <WalletKitProvider>
        <Header />
        <div className="mb-auto">
          <MappleAssetBox />
        </div>
        <div className="mb-auto">
          <VaultBox />
        </div>
        <Footer />
      </WalletKitProvider>
    </main>
  );
}
export default Home;
