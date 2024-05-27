import React, { createContext, useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const ChatContext = createContext();

const ChatProvider = ({ children }) => {
  // children đại diện cho phần con trong ChatProvider
  const [selectedChat, setSelectedChat] = useState();
  const [user, setUser] = useState();
  const [notification, setNotification] = useState([]);
  const [chats, setChats] = useState();

  const history = useHistory(); // được sử dụng để truy cập lịch sử trình duyệt cho mục đích điều hướng.

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo")); //phân tích chuỗi JSON để tạo ra đối tượng user
    setUser(userInfo);

    if (!userInfo) history.push("/"); //nếu người dùng chưa đăng nhập thì redirect về login page
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [history]);

  return (
    <ChatContext.Provider
      value={{
        selectedChat,
        setSelectedChat,
        user,
        setUser,
        notification,
        setNotification,
        chats,
        setChats,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export const ChatState = () => {
  return useContext(ChatContext);
};

export default ChatProvider;
