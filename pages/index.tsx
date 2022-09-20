import type { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { unstable_getServerSession } from "next-auth/next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { authOptions } from "./api/auth/[...nextauth]";
import { NextPageWithLayout } from "./_app";
import { Layout } from "../components/layout";
import { AddIcon, UserIcon } from "../components/icons";
import { colors } from "../lib/constants";
import { useRoomsQuery } from "../_generated";
import { AnimatePresence } from 'framer-motion'

// Type
import type { Room } from "../_generated";
import { CreateRoomModal } from "../components/modals";

const Home: NextPageWithLayout = ({
  currentUser,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const [rooms, setRooms] = useState<Room[]>([]);
  const [createRoomModalOpen, setCreateRoomModalOpen] = useState(true);
  const router = useRouter();
  const { data, loading, error } = useRoomsQuery({
    variables: {
      userId: currentUser.id,
    },
  });

  useEffect(() => {
    if (data) {
      setRooms(data.rooms);
    }
  }, [data]);

  return (
    <div className="page flex justify-center">
      <Head>
        <title>Todoinus</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-full max-w-[800px] pt-12 px-4">
        <h1 className="text-2xl font-bold mb-8">My Rooms</h1>
        <div className="w-full grid gap-2 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
          <button className="w-full aspect-square hover:border hover:border-brand-200 flex justify-center items-center"
            onClick={() => setCreateRoomModalOpen(true)}
          >
            <AddIcon size={60} color={colors[300]} />
          </button>
          <AnimatePresence>
          { createRoomModalOpen && <CreateRoomModal setIsOpen={setCreateRoomModalOpen}/>}
          </AnimatePresence>
          {rooms &&
            rooms.map((room) => (
              <button
                className="relative w-full aspect-square border-2 border-brand-border hover:border-brand-200 flex justify-center items-center"
                onClick={() => router.push(`/${room.id}`)}
                key={room.id}
              >
                <div className="absolute top-3 right-3 flex gap-[2px] items-center overflow-visible">
                  <UserIcon size={16} color={colors[300]} />
                  <span className="text-xs text-brand-300">
                    {room.members.length}
                  </span>
                </div>
                <p className="text-sm font-medium">{room.name}</p>
              </button>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

Home.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = await unstable_getServerSession(req, res, authOptions);

  if (!session) {
    return {
      redirect: {
        destination: "/auth/signin",
        permanent: false,
      },
    };
  }
  const currentUser = session.user;

  return {
    props: {
      currentUser: currentUser ? currentUser : null,
    },
  };
};
