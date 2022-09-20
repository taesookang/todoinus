import type {
  NextPage,
  GetServerSideProps,
  InferGetServerSidePropsType,
} from "next";
import { useSession } from "next-auth/react";
import Head from "next/head";
import Image from "next/image";

import { NextPageWithLayout } from "./_app";
import { Layout } from "../components/layout";
import { AddIcon, UserIcon } from "../components/icons";
import { colors } from "../lib/constants";
import React, { useState, useEffect } from "react";
import {
  MenuToggleProvider,
  useMenuToggleContext,
} from "../context/MenuToggleContext";
import { CirclePicker } from "react-color";
import type { ColorChangeHandler } from "react-color";

const RoomPage: NextPageWithLayout = () => {
  const [userColor, setUserColor] = useState("#1D8780");
  const [colorPickerOpen, setColorPickerOpen] = useState(false);
  const [openProjects, setOpenProjects] = useState(false)

  const { data: session } = useSession();

  let userImage: typeof session.user.image | null = null;

  if (session) {
    userImage = session.user.image;
  }

  const handleColorChange: ColorChangeHandler = (color) => {
    setUserColor(color.hex);
    console.log("change complete");
  };
  return (
    <div className="page flex">
      <Head>
        <title>Room Name - Todoinus</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="room-menu flex flex-col border-r border-brand-border absolute sm:static -right-[300px]">
        <div className="flex py-4 px-4 items-center justify-between border-b border-brand-border">
          <div className="flex items-center gap-2">
            <div className="relative flex items-center justify-center w-12 aspect-square rounded-full bg-brand-100 border-brand-200 overflow-hidden">
              {userImage ? (
                <Image
                  src={userImage}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                />
              ) : (
                <UserIcon size={42} color={colors[300]} />
              )}
            </div>
            <p className="text-lg font-medium ">Taesoo Kang</p>
          </div>

          <button
            className="w-6 relative aspect-square rounded-full"
            style={{
              backgroundColor: userColor,
            }}
            onClick={() => setColorPickerOpen((prev) => !prev)}
          >
            {colorPickerOpen && (
              <div
                className={`absolute -bottom-[156px] -right-[22px] h-[140px] bg-white z-30 drop-shadow-menu  items-center flex-col flex 
                    }`}
              >
                <div className="triangle absolute -top-[10px] right-6" />
                <div className="w-full flex text-sm font-medium py-3 px-4">
                  My theme
                </div>
                <CirclePicker
                  className=" pl-5"
                  onChange={handleColorChange}
                  circleSize={20}
                  circleSpacing={10}
                  //   onChangeComplete={() => console.log("change complete")}
                />
              </div>
            )}
          </button>
        </div>
        <div className="w-full">
          <div className="flex items-center justify-between p-4">
            <span className="text-sm font-medium">Projects</span>
            <Image src="/icons/chevron.svg" width={20} height={20} />
          </div>
          <ul className="w-full flex flex-col">
            <li className="w-full py-2 text-brand-black/60 hover:bg-brand-100 hover:text-brand-300 cursor-pointer px-4">
              # functions
            </li>
            <li className="w-full py-2 text-brand-black/60 hover:bg-brand-100 hover:text-brand-300 cursor-pointer px-4">
              # functions
            </li>
            <li className="w-full py-2 text-brand-black/60 hover:bg-brand-100 hover:text-brand-300 cursor-pointer px-4">
              # functions
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <div className="w-full sm:w-[90%] min-w-[320px] pt-12">
          <h1 className="text-2xl font-bold pb-4">Function</h1>

          <ul className="w-full flex flex-col">
            
            <li className="group w-full min-h-[46px] flex items-center justify-between rounded-sm cursor-pointer hover:bg-brand-100 py-2 px-4">
              <div className="flex gap-3 items-center">
                <button className="min-w-[24px] w-6 aspect-square rounded-full border border-brand-border" />
                <p className="pr-8">
                   room Clean meeting room Clean meeting room
                </p>
              </div>
              <div className="hidden gap-3 group-hover:flex">
                <button className="min-w-[50px] h-[30px] bg-brand-300 text-xs font-bold text-white rounded-sm shadow-sm">
                  Edit
                </button>
                <button className="min-w-[50px] h-[30px] bg-brand-red text-xs font-bold text-white rounded-sm shadow-sm">
                  Delete
                </button>
              </div>
            </li>
            <li className="group w-full min-h-[46px] flex items-center justify-between rounded-sm cursor-pointer hover:bg-brand-100 py-2 px-4">
              <div className="flex gap-3 items-center">
                <button className="min-w-[24px] w-6 aspect-square rounded-full border border-brand-border" />
                <p className="pr-8">
                   room Clean meeting room Clean meeting room
                </p>
              </div>
              <div className="hidden gap-3 group-hover:flex">
                <button className="min-w-[50px] h-[30px] bg-brand-300 text-xs font-bold text-white rounded-sm shadow-sm">
                  Edit
                </button>
                <button className="min-w-[50px] h-[30px] bg-brand-red text-xs font-bold text-white rounded-sm shadow-sm">
                  Delete
                </button>
              </div>
            </li>
            <li className="group w-full min-h-[46px] flex items-center justify-between rounded-sm cursor-pointer hover:bg-brand-100 py-2 px-4">
              <div className="flex gap-3 items-center">
                <button className="min-w-[24px] w-6 aspect-square rounded-full border border-brand-border" />
                <p className="pr-8">
                   room Clean meeting room Clean meeting room
                </p>
              </div>
              <div className="hidden gap-3 group-hover:flex">
                <button className="min-w-[50px] h-[30px] bg-brand-300 text-xs font-bold text-white rounded-sm shadow-sm">
                  Edit
                </button>
                <button className="min-w-[50px] h-[30px] bg-brand-red text-xs font-bold text-white rounded-sm shadow-sm">
                  Delete
                </button>
              </div>
            </li>
            <li className="group w-full min-h-[46px] flex items-center justify-between rounded-sm cursor-pointer hover:bg-brand-100 py-2 px-4">
              <div className="flex gap-3 items-center">
                <button className="min-w-[24px] w-6 aspect-square rounded-full border border-brand-border" />
                <p className="pr-8">
                   room Clean meeting room Clean meeting room
                </p>
              </div>
              <div className="hidden gap-3 group-hover:flex flex-col sm:flex-row ">
                <button className="min-w-[50px] h-[30px] bg-brand-300 text-xs font-bold text-white rounded-sm shadow-sm">
                  Edit
                </button>
                {/* <button className="min-w-[50px] h-[30px] bg-brand-red text-xs font-bold text-white rounded-sm shadow-sm">
                  Delete
                </button> */}
              </div>
            </li>
            <li className="group w-full min-h-[46px] flex items-center justify-between rounded-sm cursor-pointer hover:bg-brand-100 py-2 px-4">
              <div className="flex gap-3 items-center">
                <button className="min-w-[24px] w-6 aspect-square rounded-full border border-brand-border" />
                <p className="">
                   room Clean meeting room Clean meeting room
                </p>
              </div>
              <div className="hidden group-hover:flex ml-4">
               <button className="relative min-w-[28px] w-7 aspect-square"
               >
                <Image src="/icons/edit.svg" layout="fill" />
               </button>
              </div>
            </li>
          </ul>
          <div className="w-full flex gap-2 px-4 my-6">
            <input className="w-full px-4 placeholder:text-brand-black/30" type="text" placeholder="Write a task..." />
            <button className="min-w-[50px] h-[32px] bg-brand-400 text-xs font-bold text-white rounded-sm shadow-sm">Add</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomPage;

RoomPage.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <MenuToggleProvider>
      <Layout>{page}</Layout>
    </MenuToggleProvider>
  );
};
