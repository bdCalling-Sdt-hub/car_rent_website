// app/not-found.tsx

'use client';
import notfound from "@/assets/404.png"
import Image from "next/image";
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#DDDDE8] text-black">
      {/* <h1 className="text-6xl font-bold">404</h1> */}
      <Image src={notfound} height={400} width={400} alt="notfound" />
      <p className="mt-4  text-red-600  text-2xl font-bold">Page not found.</p>
      <Link href="/">
        <button className="mt-6 px-4 py-2 bg-[#72f0e5] text-black rounded transition-all duration-300 hover:bg-[#0CFEE8]">
          Back to Home
        </button>
      </Link>
    </div>
  );
}
