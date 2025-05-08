"use client";
import HeadingTitle from "@/components/shared/HeadingTitle";
import {
  useGetAllNotificationQuery,
  useUpdateNotificationMutation,
} from "@/redux/Api/infoApi";
import { Pagination } from "antd";
import React, { useState } from "react";
import { toast } from "sonner";
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);
type TNotification = {
  _id: string;
  toId: string;
  title: string;
  message: string;
  isRead: boolean;
  createdAt: string;
  updatedAt: string;
};

const NotificationPage = () => {
  const [page, setPage] = useState(1);
  const { data: getAllNotification } = useGetAllNotificationQuery(page);
 
  const [updateNotification] = useUpdateNotificationMutation();

  const handleMarkAsRead = (id: string) => {
    const notificationId = {
      notificationId: id,
    };
    updateNotification(notificationId)
      .unwrap()
      .then((payload) => toast.success(payload?.message))
      .catch((error) => toast.error(error?.data?.message));
  };
  return (
    <div className="container mx-auto my-10 px-2 md:px-0">
      <HeadingTitle title={"Notification"} />

      {getAllNotification?.data?.result?.map((notification: TNotification) => {
         const createdTimeAgo = dayjs(notification?.createdAt).fromNow();
        return (
          <div
            key={notification?._id}
            className={`mt-5  ${
              !notification?.isRead ? "bg-[#D7E6F4]" : "bg-[#F9F9F9] "
            } px-4 md:px-8 md:py-4 py-2  rounded-md flex justify-between items-center`}
          >
            <div>
              <p className="text-[#6A6A6A] ">{notification?.title}</p>
              <p className="text-[#272121]">{notification?.message}</p>
              <p className="text-xs text-gray-500 mt-1">{createdTimeAgo}</p>
            </div>
            {!notification?.isRead && (
              <button className=" border-transparent border-b hover:border-black transform duration-300  " onClick={() => handleMarkAsRead(notification?._id)}>
                Mark as read
              </button>
            )}
          </div>
        );
      })}
      <div className="flex items-center justify-center mt-5">
        <Pagination
          onChange={(page) => setPage(page)}
          total={getAllNotification?.data?.meta?.total}
        />
      </div>
    </div>
  );
};

export default NotificationPage;
