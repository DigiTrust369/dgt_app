"use client";

import Image from "next/image";
import { Header, Footer, MappleTab, ChartSimpleArea } from "@/components";
import { ConnectButton } from "@suiet/wallet-kit";
import { WalletProvider } from "@suiet/wallet-kit";
import { WalletKitProvider } from "@mysten/wallet-kit";
import SuiButton from "@/components/SuiButton";
import AssetTitle from "@/components/Mapple/AssetTitle";


export default function Page({ params }: { params: { slug: string } }) {
  return (
    <WalletKitProvider>
      {/* <WalletProvider> */}
      <main className="overflow-hidden">
        <Header />
        <div className="container p-4 m-auto grid">
          <AssetTitle title={"DigiTrust - Basic"} />
          <div className="flex flex-col lg:flex-row mt-4">
            <div className="basis-1/2 flex flex-wrap flex-col lg:flex-row lg:mt-0">
              <div className="w-full flex flex-wrap flex-col lg:flex-row bg-white p-2 rounded-lg">
                <div className="w-full lg:w-1/3 p-5 flex flex-col items-center">
                  <span className="text-lg font-medium">TVL</span>
                  <p className="text-blue-400 font-semibold">1.000.000</p>
                </div>
                <div className="w-full lg:w-1/3 lg:border-x-[1px] p-5 flex flex-col items-center">
                  <span className="text-lg font-medium">DigiScore</span>
                  <p className="text-blue-400 font-semibold">36</p>
                </div>
                <div className="w-full lg:w-1/3 p-5 flex flex-col items-center">
                  <span className="text-lg font-medium">Management Fee</span>
                  <p className="text-blue-400 font-semibold">2%</p>
                </div>
              </div>
              <div className="w-full flex flex-wrap flex-col bg-white p-4 rounded-lg mt-5">
                <ChartSimpleArea />
              </div>
              <div className="w-full flex flex-wrap flex-col bg-white p-2 rounded-lg mt-5">
                <h3 className="text-lg font-semibold mb-2">Description</h3>
                <ul>
                  <li>
                  DigiTrust basic provides portfolio for new investors with low risk <br/>
                    - Asset structure will be allocated to low-cap token<br/>
                    <b className="font-base">- Min deposit</b> from 10$<br/>
                    - Using profitable strategy, that already worked well in CEX (Binance, OKX)
                  </li>
                </ul>
              </div>
              <div className="w-full flex flex-wrap flex-col bg-white p-2 rounded-lg mt-5">
                <h6 className="text-lg font-semibold mb-2">Asset Structure</h6>
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
                      <table className="min-w-full text-left text-sm font-light">
                        <thead className="border-b font-medium dark:border-neutral-500">
                          <tr>
                            {/* <th scope="col" className="px-6 py-4">#</th> */}
                            <th scope="col" className="px-6 py-4">
                              Asset
                            </th>
                            <th scope="col" className="px-6 py-4">
                              Weight (%)
                            </th>
                            <th scope="col" className="px-6 py-4">
                              Interest-Rate (%)
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b dark:border-neutral-500">
                            {/* <td className="whitespace-nowrap px-6 py-4 font-medium">1</td> */}
                            <td className="whitespace-nowrap px-6 py-4">
                              <div className="flex flex-row items-center">
                                <Image
                                  src="https://s2.coinmarketcap.com/static/img/coins/64x64/16116.png"
                                  alt="assetLogo"
                                  width={30}
                                  height={30}
                                  style={{
                                    marginRight: "5px",
                                    borderRadius: "50%",
                                  }}
                                />{" "}
                                SOL
                              </div>
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              29.38
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">36</td>
                          </tr>
                          <tr className="border-b dark:border-neutral-500">
                            {/* <td className="whitespace-nowrap px-6 py-4 font-medium">2</td> */}
                            <td className="whitespace-nowrap px-6 py-4">
                              <div className="flex flex-row items-center">
                                <Image
                                  src="https://s2.coinmarketcap.com/static/img/coins/64x64/1975.png"
                                  alt="assetLogo"
                                  width={30}
                                  height={30}
                                  style={{
                                    marginRight: "5px",
                                    borderRadius: "50%",
                                  }}
                                />
                                LINK
                              </div>
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              31.57
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">24</td>
                          </tr>
                          <tr className="border-b dark:border-neutral-500">
                            {/* <td className="whitespace-nowrap px-6 py-4 font-medium">3</td> */}
                            <td className="whitespace-nowrap px-6 py-4">
                              <div className="flex flex-row items-center">
                                <Image
                                  src="https://s2.coinmarketcap.com/static/img/coins/64x64/74.png"
                                  alt="assetLogo"
                                  width={30}
                                  height={30}
                                  style={{
                                    marginRight: "5px",
                                    borderRadius: "50%",
                                  }}
                                />
                                DOGE
                              </div>
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              39.05
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">21</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="basis-1/2 px-5">
                <MappleTab color="red" />
            </div>
          </div>
        </div>

        <Footer />
      </main>
      {/* </WalletProvider> */}
    </WalletKitProvider>
  );
}
