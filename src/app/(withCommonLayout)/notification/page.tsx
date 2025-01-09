"use client";
import HeadingTitle from "@/components/shared/HeadingTitle";
import {
  useGetAllNotificationQuery,
  useUpdateNotificationMutation,
} from "@/redux/Api/infoApi";
import React from "react";
import { toast } from "sonner";

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
  const { data: getAllNotification } = useGetAllNotificationQuery(undefined);
  const [updateNotification] = useUpdateNotificationMutation();

  const handleMarkAsRead = (id: string) => {
    const notificationId ={
        notificationId : id
    }
    updateNotification(notificationId)
      .unwrap()
      .then((payload) => toast.success(payload?.message))
      .catch((error) => toast.error(error?.data?.message));
  };
  return (
    <div className="container mx-auto my-10 px-2 md:px-0">
      <HeadingTitle title={"Notification"} />

      {getAllNotification?.data?.result?.map((notification: TNotification) => {
        return (
          <div
            key={notification?._id}
            className={`mt-5  ${!notification?.isRead ? "bg-[#D7E6F4]" : "bg-[#F9F9F9] "  } px-4 md:px-8 md:py-4 py-2  rounded-md flex justify-between items-center`}
          >
            <div>
              <p className="text-[#6A6A6A] ">{notification?.title}</p>
              <p className="text-[#272121]">{notification?.message}</p>
            </div>
            {!notification?.isRead && (
              <button onClick={() => handleMarkAsRead(notification?._id)}>
                Mark as read
              </button>
            )}
          </div>
        );
      })}
     
    </div>
  );
};

export default NotificationPage;
