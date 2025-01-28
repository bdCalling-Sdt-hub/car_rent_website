"use client";
import HeadingTitle from "@/components/shared/HeadingTitle";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { VscSend } from "react-icons/vsc";
import { useSearchParams } from "next/navigation";
import { useSocket } from "@/provider/SocketProvider";
import { useGetAllChatQuery } from "@/redux/Api/tripManagementApi";
import { imageUrl } from "@/redux/baseApi";

type TReceiverDetails = {
  name: string;
  phone_number: string;
  profile_image: string;
  _id: string;
};

const ConversationPage = () => {
  type MessageType = any;
  const [chatId, setChatId] = useState("");
  const searchParams = useSearchParams();
  const senderId = searchParams.get("senderId");
  const receiverId = searchParams.get("receiverId");
  const [receiverDetails, setReceiverDetails] = useState<TReceiverDetails | null>(null);
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [newMessage, setNewMessage] = useState("");
const [senderDetails, setSenderDetails] = useState<TReceiverDetails | null>(null);
  const { data: getAllChat } = useGetAllChatQuery(chatId);

  const { socket } = useSocket();

  useEffect(() => {
    setMessages(getAllChat?.data?.messages);
    const findReceiverUser = getAllChat?.data?.participants?.find(
      (user: any) => user?._id === receiverId
    );
    const findSenderUser = getAllChat?.data?.participants?.find(
      (user: any) => user?._id !== receiverId
    );
    setSenderDetails(findSenderUser)
    setReceiverDetails(findReceiverUser);
  }, [getAllChat]);

  useEffect(() => {
    if (socket && receiverId) {
      socket.emit("start-chat", {
        receiverId: receiverId,
      });

      socket.on("start-chat", (data) => {
        setChatId(data?.result?._id);
      });

      socket.on("send-message", (data: any) => {
        setMessages((prevMessages: MessageType[]) => {
          if (!prevMessages.some((msg) => msg._id === data?.result?._id)) {
            return [...prevMessages, data?.result];
          }
          return prevMessages;
        });
      });
    }
  }, [socket, receiverId]);

  const handleSendMessage = () => {
    if (socket && newMessage?.trim()) {
      const data = {
        receiverId: receiverId,
        chatId: chatId,
        message: newMessage,
      };

      socket.emit("send-message", data);
      setNewMessage("");
    }
  };


  return (
    <div className="container mx-auto py-10 px-2 md:px-0">
      <div className="">
        <HeadingTitle title="Conversation" />
      </div>
      <div className="bg-[#272121] mt-5 p-3  pl-4 rounded-md flex items-center gap-2">
        <Image
          src={`${imageUrl}/${receiverDetails?.profile_image}`}
          className="h-14 w-14 rounded-full object-cover"
          height={200}
          width={200}
          alt="chat"
        />
        <div className="text-white font-arial">
          <p>{receiverDetails?.name}</p>
          <p>{receiverDetails?.phone_number}</p>
        </div>
      </div>

      <div className="h-screen flex flex-col items-center">
        <div className="w-full mt-5  bg-white  rounded-lg overflow-hidden flex flex-col justify-between p-4">
          <div className="flex flex-col space-y-4 overflow-auto h-[600px] p-4">
            {messages?.map((msg: any) => {
              // console.log(msg);
              return (
                <div key={msg?._id}>
                  {msg?.sender !== senderId && (
                    <div className="flex  justify-start space-x-4">
                      <Image
                        src={`${imageUrl}/${receiverDetails?.profile_image}`}
                        height={100}
                        className="w-10 h-10 rounded-full"
                        width={100}
                        alt="logo"
                      />
                      <div>
                        <div className="bg-[#F0F0F0]  px-4 py-2 rounded-lg max-w-xs ml-auto">
                          {msg?.message}
                        </div>

                        <p className="text-xs text-gray-500 text-right mt-1">
                          {new Date(msg.createdAt).toLocaleTimeString()}
                        </p>
                      </div>
                    </div>
                  )}

                  {msg?.sender === senderId && (
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
                        src={`${imageUrl}/${senderDetails?.profile_image}`}
                        height={100}
                        className="w-10 h-10 rounded-full"
                        width={100}
                        alt="logo"
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Message Input */}
          <div className="flex items-center justify-center p-4 px-2">
            <input
              value={newMessage}
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
