import React, { useState } from "react";
import { ModalLayout } from ".";
import { CTA } from '../.'

interface Props {
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const CreateRoomModal: React.FC<Props> = ({ setIsOpen }) => {
  const [roomName, setRoomName] = useState("")

  const handleOnClick = () => {
    
  } 
  return (
    <ModalLayout title="Create Room" setIsOpen={setIsOpen}>
      <div className="w-full flex items-center justify-center gap-4 my-4">
        <label htmlFor="room-name" className="font-medium text-sm">Name</label>
        <input
          type="text"
          className="h-8 px-2 w-4/5"
          placeholder="Enter room name."
          value={roomName}
          onChange={(e: React.FormEvent<HTMLInputElement>) => setRoomName(e.currentTarget.value)}
        />
      </div>
      <div className="w-full flex justify-center items-center gap-6 mt-4">
        <CTA title="create" callback={handleOnClick} /> 
        <CTA title="cancel" style="outline" callback={() => setIsOpen(false) } /> 
      </div>
    </ModalLayout>
  );
};

export default CreateRoomModal;
