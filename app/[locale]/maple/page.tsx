import { MappleAssetDetail } from '@/components';
import DigiTrustRegister from '../../../components/DigiTrust/Register'
import React from 'react'

interface User {
    id: number;
    name: string;
}

interface Data {
    code:number;
    data: Asset;
  }

  interface Asset {
    owner: string;
    tokenId: number;
    assetId: string;
    amount:number;
    image: string;
    information: string;
}

const UsersPage =  async () => {
  //   const res = await fetch('https://jsonplaceholder.typicode.com/users');
  //   const users: User[] = await res.json();

  //   const res1 = await fetch('https://test-vercel-seven-ivory.vercel.app/asset/detail?assetAdr=0x7930cD1F24B2f521187b277cdb630EFD5616A0e6');
  // console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx", res1)
  // const asset: Data = await res1.json();
  
    return (
    <>
        {/* <p>tokenId: {asset.data.tokenId}</p>
        <h1>Users</h1>
        <p>{new Date().toLocaleTimeString()}</p>
        <ul>
            {users.map(user => <li key={user.id}>{user.name}</li>)}
        </ul>
        <MappleAssetDetail /> */}
        <DigiTrustRegister />
    </>
  )
}

export default UsersPage