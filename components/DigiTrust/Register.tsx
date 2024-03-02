"use client";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import TextInput from "./TextInput";
import { useRouter } from 'next/navigation';

interface IFormRegister {
  vault_name: string;
  manager: string;
  vault_desc: string;
  vault_adr: string;
  symbol: string;
  deposit_asset: string;
  management_fee: number;
  performance_fee: number;
  deposit_limit: number;
  lockup_time: number;
  profit_est: number;
  loss_est: number;
}

const Register = () => {
  const router = useRouter();
  const { register, handleSubmit } = useForm<IFormRegister>();
  const onSubmit: SubmitHandler<IFormRegister> = async (data) => {
    try {
      const response = await axios.post(
        "https://test-vercel-seven-ivory.vercel.app/v1/create_vault",
        {
          vault_name: data.vault_name,
          manager: data.manager,
          vault_desc: data.vault_desc,
          vault_adr: data.vault_adr,
          symbol: data.symbol,
          deposit_asset: data.deposit_asset,
          management_fee: data.management_fee,
          performance_fee: data.performance_fee,
          deposit_limit: data.deposit_limit,
          lockup_time: data.lockup_time,
          profit_est: data.profit_est,
          loss_est: data.loss_est,
        }
      );

      const xdata = await response.data;

      if (xdata.success) {
        router.push("/")
        // Login successful
        console.log("Login successful");
       
      } else {
        // Login failed
        alert(xdata.error);
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred. Please try again later.");
    }
  };

  //   const [vaultName, setVaultName] = useState("");
  //   const [vaultDesc, setVaultDesc] = useState("");
  //   const handelSubmit = async(e:any) => {
  //     e.preventDefault();
  //     console.log(vaultName)
  //     try {
  //         const response = await axios.post('http://109.123.233.65:3002/api/create_vault', {
  //             "vault_name": vaultName,
  //             "vault_desc": vaultDesc,
  //         });

  //         const data = await response.data;

  //         if (data.success) {
  //           // Login successful
  //           console.log('Login successful');
  //         } else {
  //           // Login failed
  //           alert(data.error);
  //         }
  //       } catch (error) {
  //         console.error(error);
  //         alert('An error occurred. Please try again later.');
  //       }
  //   }

  return (
    <div>
      <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50">
        <div>
          <a href="/">
            <h3 className="text-4xl font-bold text-purple-600">Logo</h3>
          </a>
        </div>
        <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-md sm:rounded-lg">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* <div>
              <label
                htmlFor="vaultName"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Tên Quỹ
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="text"
                  name="vaultName"
                  value={vaultName}
                  className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  onChange={(e) => setVaultName(e.target.value)}
                />
              </div>
            </div>
            <div className="mt-4">
              <label
                htmlFor="vaultDesc"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Mô Tả
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="text"
                  name="vaultDesc"
                  value={vaultDesc}
                  className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  onChange={(e) => setVaultDesc(e.target.value)}
                />
              </div>
            </div> */}
            {/* <div className="mt-4">
              <label
                htmlFor="manager"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Quản Lý
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="text"
                  name="manager"
                  className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
            </div>
            <div className="mt-4">
              <label
                htmlFor="password_confirmation"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Confirm Password
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="password"
                  name="password_confirmation"
                  className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
            </div> */}
            <div>
              <TextInput
                label="Tên quỹ"
                name="vault_name"
                type="text"
                register={register}
              />
            </div>
            <div>
              <TextInput
                label="Quản lý"
                name="manager"
                type="text"
                register={register}
              />
            </div>
            <div>
              <TextInput
                label="Mô tả"
                name="vault_desc"
                type="text"
                register={register}
              />
            </div>
            <div>
              <TextInput
                label="Địa chỉ quỹ"
                name="vault_adr"
                type="text"
                register={register}
              />
            </div>
            <div>
              <TextInput
                label="Biểu tượng"
                name="symbol"
                type="text"
                register={register}
              />
            </div>
            <div>
              <TextInput
                label="Tài sản đảm bảo"
                name="deposit_asset"
                type="text"
                register={register}
              />
            </div>
            <div>
              <TextInput
                label="Phí quản lý"
                name="management_fee"
                type="number"
                register={register}
              />
            </div>
            <div>
              <TextInput
                label="Phí hiệu quả"
                name="performance_fee"
                type="number"
                register={register}
              />
            </div>
            <div>
              <TextInput
                label="Giới hạn tiền gửi"
                name="deposit_limit"
                type="number"
                register={register}
              />
            </div>
            <div>
              <TextInput
                label="Thời gian khóa"
                name="lockup_time"
                type="number"
                register={register}
              />
            </div>
            <div>
              <TextInput
                label="Lợi nhuận ước tính"
                name="profit_est"
                type="number"
                register={register}
              />
            </div>
            <div>
              <TextInput
                label="Lỗ ước tính"
                name="loss_est"
                type="number"
                register={register}
              />
            </div>
            <div className="flex items-center justify-end mt-4">
              <a
                className="text-sm text-gray-600 underline hover:text-gray-900"
                href="#"
              >
                Already registered?
              </a>
              <button
                type="submit"
                className="inline-flex items-center px-4 py-2 ml-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-900 border border-transparent rounded-md active:bg-gray-900 false"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
