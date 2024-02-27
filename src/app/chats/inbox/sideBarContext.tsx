import React, { useState } from "react";
import { ChatSideBarContext } from "@/context/context";

const SideBarContext = ({ children }: { children: React.ReactNode }) => {
  const [choosedChatRoom_id, setChoosedChatRoom_id] = useState<number>(0);
  const [isEditChatActive, setIsEditChatActive] = useState(false);

  return (
    <ChatSideBarContext.Provider
      value={{
        choosedChatRoom_id,
        setChoosedChatRoom_id,
        isEditChatActive,
        setIsEditChatActive,
      }}
    >
      {children}
    </ChatSideBarContext.Provider>
  );
};

export default SideBarContext;
