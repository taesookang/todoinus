import React from "react";
import { UserIcon } from "../icons";
import { colors } from "../../lib/constants";
import { useRoomByIdQuery } from "../../_generated";

interface Props {
  roomId: string;
}

export const RoomInfo: React.FC<Props> = ({ roomId }) => {
  const { data, loading, error } = useRoomByIdQuery({
    variables: {
      roomId: roomId,
    },
  });

  if (data) {
    const room = data.roomById;

    return (
      <div className="flex items-center gap-2">
        <div className="text-white text-lg font-medium capitalize">
          {room?.name}
        </div>
        <div className="flex items-center">
          <UserIcon size={20} color={colors[300]} />
          <span className="text-brand-200 text-sm">{room?.members.length}</span>
        </div>
      </div>
    );
  }

  return null;
};

export default RoomInfo;
