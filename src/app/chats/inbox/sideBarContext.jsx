import React, { useState } from "react";
import { ChatSideBarContext } from "@/context/context";

const SideBarContext = ({ children }) => {
  const [choosedChatRoom, setChoosedChatRoom] = useState();
  const [isEditchatActive, setIsEditChatActive] = useState(false);

  return (
    <ChatSideBarContext.Provider
      value={{
        choosedChatRoom,
        setChoosedChatRoom,
        isEditchatActive,
        setIsEditChatActive,
      }}
    >
      {children}
    </ChatSideBarContext.Provider>
  );
};

export default SideBarContext;
