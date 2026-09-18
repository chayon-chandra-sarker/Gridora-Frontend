"use client"

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Logo from "@/components/logo/Logo";
import { useGetMe, useLogout } from "@/hooks";
import { toast } from "@/components/ui/toast";
import { useQueryClient } from "@tanstack/react-query";

const Header = () => {
  const routes = [
    { name: "Home", url: "/" },
    { name: "About ", url: "/about" },
  ];
const {data, isLoading} = useGetMe();
const {mutate:logout} = useLogout();
const queryClient = useQueryClient();

const handleLogout = () => {
  logout(undefined, {
    onSuccess: () => {
      toast.add({
        // title:"Login out Success",
        description:"Logged out successfully",
        type: 'succuss'
      });
      queryClient.removeQueries({queryKey:["user"]});
    },
    onError: () => {
        toast.add({
        title:"Logout failed",
        description:"Something went wrong. please try again",
        type: 'error'
      })
    }
    
  })
};
  return (
    <div className="w-full h-16 border border-b"> 
      <div className=" flex justify-between items-center h-full max-w-7xl mx-auto">
        <div>
          <Logo></Logo>
        </div>

        <nav className="flex gap-5">
          {routes.map((route) => (
            <Link key={route.url} href={route.url}>
              {" "}
              {route.name}
            </Link>
          ))}
        </nav>

        <div>
          {!isLoading && !data && <Button
            variant="outline"
            render={<Link href="/login">Login</Link>}
            nativeButton={false}
          >
            Login
          </Button>}

          {!isLoading && data && <Button
            variant="destructive" onClick={handleLogout}
          >
            Logout
          </Button>}
        </div>
      </div>
    </div>
  );
};

export default Header;
