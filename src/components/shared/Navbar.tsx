"use client";
import img from "../../assets/logo.png";
import Image from "next/image";
import {
  MdArrowOutward,
  MdCarRental,
  MdMenu,
  MdOutlineAdminPanelSettings,
} from "react-icons/md";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CiUser } from "react-icons/ci";
import { GoGitMerge } from "react-icons/go";
import { RiHomeLine } from "react-icons/ri";
import {
  IoIosInformationCircleOutline,
  IoMdNotificationsOutline,
} from "react-icons/io";
import { FiPhone } from "react-icons/fi";
import { PiSignInLight } from "react-icons/pi";
import { LuUser } from "react-icons/lu";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useGetProfileQuery } from "@/redux/Api/authApi";
import { imageUrl } from "@/redux/baseApi";
import { IoLogOutOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";
import { useGetCountNotificationQuery } from "@/redux/Api/infoApi";
const Navbar = () => {
  const [popoverOpen, setPopoverOpen] = useState(false);
  const { data: getUserInfo, refetch } = useGetProfileQuery({});
  const { data: getCountNotification } = useGetCountNotificationQuery({});
  const unreadCount =
    getCountNotification?.data?.result?.filter(
      (item: any) => item.isRead === false
    ).length || 0;

  // console.log(unreadCount);
  const closePopover = () => setPopoverOpen(false);
  const navigate = useRouter();

  useEffect(() => {
    refetch();
  }, []);

  const handleLogOut = () => {
    localStorage.removeItem("_token");
    navigate.push("/login");
  };
  return (
    <div className="bg-[#F9F9F9] py-4 md:py-0">
      <div className="container flex items-center justify-between">
        <Link href={"/"}>
          <div className="flex items-center gap-1 ml-10">
            <p className="font-bold text-[20px] md:text-[40px]">NARDO</p>

            <Image
              src={img}
              height={100}
              width={100}
              className=" h-5 md:h-10 w-5 md:w-10"
              alt="logo"
            />
          </div>
        </Link>
        <div className="flex items-center gap-2">
          <div className="hidden md:flex items-center">
            <Link
              href={"/host-home"}
              className="bg-[#272121] px-5 py-2 rounded-full text-white"
            >
              Become a partner
            </Link>
            <Link
              href={"/host-home"}
              className="bg-[#272121] text-white p-3 rounded-full hover:rotate-45 duration-300 cursor-pointer"
            >
              <MdArrowOutward />
            </Link>
          </div>
          <Popover open={popoverOpen} onOpenChange={setPopoverOpen}>
            <PopoverTrigger>
              <p className="border flex px-5 py-2 items-center gap-2 rounded-full ">
                {" "}
                <MdMenu />
                {getUserInfo?.data?.profile_image ? (
                  <Image
                    src={`${imageUrl}/${getUserInfo?.data?.profile_image}`}
                    height={100}
                    width={100}
                    className="h-5 md:h-7 w-5 md:w-7 rounded-full object-cover"
                    alt="logo"
                  />
                ) : (
                  <CiUser />
                )}
              </p>
            </PopoverTrigger>
            <PopoverContent>
              <div className="font-lora grid grid-cols-1 md:grid-cols-2">
                <div className="col-span-1">
                  {getUserInfo?.data?.authId?.role && (
                    <Link
                      href="/my-trip"
                      onClick={closePopover}
                      className="hover:bg-[#BCBABA] py-2 px-3 flex items-center gap-1 cursor-pointer"
                    >
                      <GoGitMerge /> Trips
                    </Link>
                  )}
                  {/* <Link
                    onClick={closePopover}
                    href={"/my-favorite-cars"}
                    className="hover:bg-[#BCBABA] py-2 px-3 flex items-center gap-1 cursor-pointer"
                  >
                    <GrHistory /> History
                  </Link> */}
                  <Link
                    onClick={closePopover}
                    href={"/"}
                    className="hover:bg-[#BCBABA] py-2 px-3 flex items-center gap-1 cursor-pointer"
                  >
                    <RiHomeLine /> Home
                  </Link>
                  <Link
                    onClick={closePopover}
                    href={"/about-us"}
                    className="hover:bg-[#BCBABA] py-2 px-3 flex items-center gap-1 cursor-pointer"
                  >
                    <IoIosInformationCircleOutline /> About Us
                  </Link>
                  {
                    getUserInfo?.data?.authId?.role &&  <Link
                      onClick={closePopover}
                      href={"/Contact-us"}
                      className="hover:bg-[#BCBABA] py-2 px-3 flex items-center gap-1 cursor-pointer"
                    >
                      <FiPhone /> Contact Us
                    </Link>
                  }
                  <Link
                    onClick={closePopover}
                    href={"/host-home"}
                    className="hover:bg-[#BCBABA] py-2 px-3 flex items-center gap-1 cursor-pointer"
                  >
                    <MdCarRental /> Become Host
                  </Link>
                  <Link
                    onClick={closePopover}
                    href={"/browse-by-destination?destination=London"}
                    className="hover:bg-[#BCBABA] py-2 px-3 flex items-center gap-1 cursor-pointer"
                  >
                    <MdCarRental /> Car Rental Search
                  </Link>
                </div>
                <div className="col-span-1">
                  {getUserInfo?.data?.authId?.role === "HOST" && (
                    <Link
                      onClick={closePopover}
                      href={"/host-history"}
                      className="hover:bg-[#BCBABA] py-2 px-3 flex items-center gap-1 cursor-pointer"
                    >
                      <MdOutlineAdminPanelSettings />
                      Host History
                    </Link>
                  )}

                  {getUserInfo?.data?.authId?.role && (
                    <Link
                      onClick={closePopover}
                      href={"/my-profile"}
                      className="hover:bg-[#BCBABA] py-2 px-3 flex items-center gap-1 cursor-pointer"
                    >
                      <LuUser /> Profile
                    </Link>
                  )}

                  {!getUserInfo?.data?.authId?.role && (
                    <>
                      <Link
                        onClick={closePopover}
                        href={"/login"}
                        className="hover:bg-[#BCBABA] py-2 px-3 flex items-center gap-1 cursor-pointer"
                      >
                        <PiSignInLight />
                        Sign in
                      </Link>
                      <Link
                        onClick={closePopover}
                        href={"/register"}
                        className="hover:bg-[#BCBABA] py-2 px-3 flex items-center gap-1 cursor-pointer"
                      >
                        <PiSignInLight /> Sign Up
                      </Link>
                    </>
                  )}
                  {getUserInfo?.data?.authId?.role && (
                    <button
                      onClick={() => handleLogOut()}
                      className="hover:bg-[#BCBABA] py-2 px-3 flex items-center gap-1 cursor-pointer w-full"
                    >
                      <IoLogOutOutline />
                      Logout
                    </button>
                  )}

                  <Link
                    onClick={closePopover}
                    href={"/trust-and-safety"}
                    className="hover:bg-[#BCBABA] py-2 px-3 flex items-center gap-1 cursor-pointer"
                  >
                    <PiSignInLight />
                    Trust & Safety
                  </Link>
                  <Link
                    onClick={closePopover}
                    href={"/tips-and-tricks"}
                    className="hover:bg-[#BCBABA] py-2 px-3 flex items-center gap-1 cursor-pointer"
                  >
                    <PiSignInLight />
                    Tips & tricks
                  </Link>
                  <Link
                    onClick={closePopover}
                    href={"/listing-vehicle"}
                    className="hover:bg-[#BCBABA] py-2 px-3 flex items-center gap-1 cursor-pointer"
                  >
                    <PiSignInLight />
                    Hosting Guide
                  </Link>
                </div>
              </div>
            </PopoverContent>
          </Popover>
          <Link
            href={"/notification"}
            className="bg-[#BCBABA26] p-2 rounded-full relative"
          >
            <p className="absolute left-7 top-0 bg-[#0CFEE8] rounded-full w-6 h-6 text-sm flex justify-center items-center">
              {unreadCount}
            </p>
            <IoMdNotificationsOutline size={25} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
