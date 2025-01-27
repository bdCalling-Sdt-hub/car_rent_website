"use client";
import HeadingTitle from "@/components/shared/HeadingTitle";
import React, { useEffect, useState } from "react";
import img from "../../../assets/chat.png";
import img2 from "../../../assets/chat2.png";
import Image from "next/image";
import { VscSend } from "react-icons/vsc";
import { useSearchParams } from "next/navigation";
import { useSocket } from "@/provider/SocketProvider";
import { useGetAllChatQuery } from "@/redux/Api/tripManagementApi";

const ConversationPage = () => {
  const [chatId, setChatId] = useState("");
  const searchParams = useSearchParams();
  const hostId = searchParams.get("hostId");
  const userId = searchParams.get("userId");
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  console.log(newMessage);

  const { data: getAllChat } = useGetAllChatQuery(chatId);

  const { socket } = useSocket();

  useEffect(() => {
    setMessages(getAllChat?.data?.messages);
  }, [getAllChat]);

//   console.log("state", messages);

  useEffect(() => {
    if (socket && userId) {
      socket.emit("start-chat", {
        receiverId: userId,
      });

      socket.on("start-chat", (data) => {
        setChatId(data?.result?._id);
      });

    //   socket.on()


    }
  }, [socket, userId]);

  // console.log("user",userId);
  // console.log("host",hostId);

  const handleSendMessage = () => {
    if (socket) {
      const data = {
        receiverId: userId,
        chatId: chatId,
        message: newMessage,
      };

      socket.emit("send-message", data);
    }
  };

  return (
    <div className="container mx-auto py-10 px-2 md:px-0">
      <div className="">
        <HeadingTitle title="Conversation" />
      </div>
      <div className="bg-[#272121] mt-5 p-3  pl-4 rounded-md flex items-center gap-2">
        <Image
          src={img}
          className="h-14 w-14"
          height={200}
          width={200}
          alt="chat"
        />
        <div className="text-white font-arial">
          <p>Shukumar Ghosh</p>
          <p>+01 953 653 9885</p>
        </div>
      </div>

      <div className="h-screen flex flex-col items-center">
        <div className="w-full mt-5  bg-white  rounded-lg overflow-hidden flex flex-col justify-between p-4">
          <div className="flex flex-col space-y-4 overflow-auto h-[600px] p-4">
            {messages?.map((msg: any) => {
              return (
                <>
                  {msg?.sender !== hostId && (
                    <div className="flex  justify-end space-x-4">
                      <div>
                        <div className="bg-blue-500 text-white px-4 py-2 rounded-lg max-w-xs ml-auto">
                          {msg?.message}
                        </div>

                        <p className="text-xs text-gray-500 text-right mt-1">
                          {new Date(msg.createdAt).toLocaleTimeString()}
                        </p>
                      </div>
                      <Image
                        src={img2}
                        height={100}
                        className="w-10 h-10 rounded-full"
                        width={100}
                        alt="logo"
                      />
                    </div>
                  )}

                  {msg?.sender === hostId && (
                    <div className="flex  justify-end space-x-4">
                      <div>
                        <div className="bg-blue-500 text-white px-4 py-2 rounded-lg max-w-xs ml-auto">
                          {msg?.message}
                        </div>

                        <p className="text-xs text-gray-500 text-right mt-1">
                          {new Date(msg.createdAt).toLocaleTimeString()}
                        </p>
                      </div>
                      <Image
                        src={img2}
                        height={100}
                        className="w-10 h-10 rounded-full"
                        width={100}
                        alt="logo"
                      />
                    </div>
                  )}
                </>
              );
            })}
          </div>

          {/* Message Input */}
          <div className="flex items-center justify-center p-4 px-2">
            <input
              onChange={(e) => setNewMessage(e.target.value)}
              type="text"
              placeholder="Type a message here..."
              className="flex-grow border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring focus:ring-blue-500"
            />
            <button
              onClick={() => handleSendMessage()}
              className="ml-2 bg-blue-500 text-white px-4 py-3 rounded-md"
            >
              <VscSend size={21} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConversationPage;
