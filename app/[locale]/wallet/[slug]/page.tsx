"use client"

import { Header, Footer, SuiWallet, DigiTrustWallet } from '@/components'
import { WalletKitProvider } from "@mysten/wallet-kit";




export default function Page({ params }: { params: { slug: string } }) {

  return (
   < WalletKitProvider>
    <main className="overflow-hidden">
      <Header />
        <DigiTrustWallet wallet={params.slug} />
      <Footer />
    </main>
    </WalletKitProvider>

  );
}
