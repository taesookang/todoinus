import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Logo, UserIcon } from "../icons";
import { colors } from "../../lib/constants";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";

import { RoomInfo } from ".";

interface Props {
  children: React.ReactNode;
}

export const Layout: React.FC<Props> = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { data: session } = useSession();
  const router = useRouter();
  const [currentUser, setcurrentUser] = useState<typeof session.user | null>(
    null
  );

  const roomId = router.query.roomId as string;

  const isHome = router.pathname === "/";

  useEffect(() => {
    if (session) {
      setcurrentUser(session.user);
    }
  }, [session]);

  // need to subscribe to user's image

  return (
    <>
      <div className="header flex items-center justify-between bg-brand-400 px-8 z-20">
        <div className="flex gap-2">
          {isHome ? (
            <>
              <Logo size={28} color={colors[200]} />
              <span className=" text-white text-xl font-bold tracking-widest">
                Todoius
              </span>
            </>
          ) : (
            <div>menu</div>
          )}
          ˝
        </div>
        {router.query?.roomId && <RoomInfo roomId={roomId} />}
        <div className="relative">
          <button
            className="relative flex justify-center items-center w-7 aspect-square rounded-full bg-brand-200 overflow-hidden border-brand-300 border"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {currentUser ? (
              <Image src={currentUser.image} layout="fill" />
            ) : (
              <UserIcon size={24} color={colors[300]} />
            )}
          </button>
          <div
            className={`absolute top-[42px] -right-[20px] w-[160px] h-max bg-white z-30 drop-shadow-menu items-center flex-col ${
              menuOpen ? "flex" : "hidden"
            }`}
          >
            <div className="triangle absolute  -top-[10px] right-6" />
            <button className="w-full h-10 bg-white hover:bg-brand-100 flex gap-2 items-center px-2 ">
              <Image src="/icons/mail.svg" height={22} width={22} />
              <span className="text-sm">Inbox</span>
            </button>
            <button className="w-full h-10 hover:bg-brand-100 flex gap-2 items-center px-2 ">
              <Image src="/icons/user.svg" height={22} width={22} />
              <span className="text-sm">Profile</span>
            </button>
            <button
              className="w-full h-10 hover:bg-brand-100 flex gap-2 items-center px-4 hover:bg-brand-red/20 border-t border-brand-border/60"
              onClick={() => signOut()}
            >
              <span className="text-sm ">Log Out</span>
            </button>
          </div>
        </div>
      </div>
      {children}
    </>
  );
};

export default Layout;
