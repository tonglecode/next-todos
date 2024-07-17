import React from "react";
import HeaderTitle from "./headerTitle";

interface Props {}

const Header: React.FC<Props> = ({}) => {
  const userName = "my name";
  return (
    <div className="border-b">
      <div className="h-[38px] flex justify-between items-center mx-10">
        <HeaderTitle userName={userName} />
        <div>User Info</div>
      </div>
    </div>
  );
};

export default Header;
