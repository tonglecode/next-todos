import React from "react";

interface Props {
  userName: string | undefined;
}

const HeaderTitle: React.FC<Props> = ({ userName }) => {
  return (
    <div className="flex items-end">
      <div className="font-thin mr-2">
        <span className="uppercase">{userName ? userName : ""}</span>

        {`'s`}
      </div>
      <div className="font-extrabold text-xl text-rose-700">Todos</div>
    </div>
  );
};

export default HeaderTitle;
