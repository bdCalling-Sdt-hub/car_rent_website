"use client"; // Ensure this runs on the client
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

type TJwa = {
  authId: string;
  userId: string;
  email: string;
  role: string;
  iat: number;
  exp: number;
};

const withRoleAuth = (WrappedComponent: any, allowedRole: any) => {
  const Wrapper = (props: any) => {
    const router = useRouter();
    const [decoded, setDecoded] = useState<TJwa | null>(null);

    useEffect(() => {
      if (typeof window !== "undefined") {
        const savedToken = localStorage.getItem("_token");
        if (savedToken) {
          const decodedToken: TJwa = jwtDecode(savedToken);
          setDecoded(decodedToken);
        }
      }
    }, []);

    useEffect(() => {
      if (decoded && decoded.role !== allowedRole) {
        router.push("/unauthorized");
      }
    }, [decoded, router]);

    if (!decoded) {
      return null; // Prevent rendering until we have the token
    }

    return <WrappedComponent {...props} />;
  };

  return Wrapper;
};

export default withRoleAuth;
