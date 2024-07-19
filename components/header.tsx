import React from "react";
import HeaderTitle from "./headerTitle";
import Button from "./button";
import LogoutButton from "./logoutButton";

interface Props {
  username: string | undefined;
}

const Header: React.FC<Props> = ({ username }) => {
  return (
    <div className="border-b">
      <div className="h-[38px] flex justify-between items-center mx-10">
        <HeaderTitle userName={username} />
        {username ? (
          <LogoutButton />
        ) : (
          <div className="flex">
            <Button key={1} name="Sign in" />
            <Button key={2} name="Sign up" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
