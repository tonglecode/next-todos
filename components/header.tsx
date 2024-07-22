import React from "react";
import HeaderTitle from "./headerTitle";
import { MdDoNotDisturb } from "react-icons/md";

import LogoutButton from "./logoutButton";
import Button from "./button";

interface Props {
  username: string | undefined;
  photoUrl: string | undefined;
}

const Header: React.FC<Props> = ({ username, photoUrl }) => {
  return (
    <div className="border-b">
      <div className="mx-[120px] flex justify-between items-center h-[80px] ">
        <HeaderTitle userName={username} />
        {username ? (
          <div className="flex">
            <LogoutButton />
            <div
              className="rounded-full"
              style={{
                width: "50px",
                height: "50px",
                backgroundImage: `url(${photoUrl})`,
                backgroundSize: "cover",
              }}
            ></div>
          </div>
        ) : (
          <div className="flex">
            <Button key={1} title="Sign in" />
            <Button key={2} title="Sign up" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
