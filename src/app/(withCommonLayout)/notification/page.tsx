"use client";
import HeadingTitle from "@/components/shared/HeadingTitle";
import {
  useDeleteNotificationMutation,
  useGetAllNotificationQuery,
  useUpdateNotificationMutation,
} from "@/redux/Api/infoApi";
import { Pagination, Popconfirm } from "antd";
import React, { useState } from "react";
import { toast } from "sonner";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { RiDeleteBin6Line } from "react-icons/ri";
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
  const { data: getAllNotification, isLoading } =
    useGetAllNotificationQuery(page);
  // Delete notification api
  const [deleteNotification] = useDeleteNotificationMutation();

  const [updateNotification] = useUpdateNotificationMutation();

  console.log(isLoading);

  const handleMarkAsRead = (id: string) => {
    const notificationId = {
      notificationId: id,
    };
    updateNotification(notificationId)
      .unwrap()
      .then((payload) => toast.success(payload?.message))
      .catch((error) => toast.error(error?.data?.message));
  };

  // Delete Notification

  const handleDelete = (id: string) => {
    // Your delete logic here

    const data = {
      notificationId: id,
    };
    deleteNotification(data)
      .unwrap()
      .then((payload) => toast.success(payload?.data?.message))
      .catch((error) => toast.error(error?.data?.message));
  };
  return (
    <div className="container mx-auto my-10 px-2 md:px-0">
      <HeadingTitle title={"Notification"} />

      {isLoading ? (
        <> <div className="flex justify-center items-center h-60">
      <div className="w-12 h-12 border-4 border-[#0CFEE8] border-t-transparent rounded-full animate-spin"></div>
    </div></>
      ) : (
        <>
          {getAllNotification?.data?.result?.map(
            (notification: TNotification) => {
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
                    <p className="text-xs text-gray-500 mt-1">
                      {createdTimeAgo}
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    {!notification?.isRead && (
                      <button
                        className=" border-transparent border-b hover:border-black transform duration-300  "
                        onClick={() => handleMarkAsRead(notification?._id)}
                      >
                        Mark as read
                      </button>
                    )}
                    <Popconfirm
                      title="Are you sure you want to delete this notification?"
                      onConfirm={() => handleDelete(notification?._id)}
                      okText="Yes"
                      cancelText="No"
                    >
                      <button className="text-red-600 hover:bg-red-600 rounded-sm transition-all duration-500 hover:text-white p-2">
                        <RiDeleteBin6Line size={22} />
                      </button>
                    </Popconfirm>
                  </div>
                </div>
              );
            }
          )}
          <div className="flex items-center justify-center mt-5">
            <Pagination
              onChange={(page) => setPage(page)}
              total={getAllNotification?.data?.meta?.total}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default NotificationPage;
