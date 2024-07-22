import React from "react";

interface Props {
  username: string;
}

const Title: React.FC<Props> = ({ username }) => {
  return (
    <div className="flex gap-2">
      <div className="text-amber-500 font-extrabold">Todos</div>
      <div className="font-thin">{username}</div>
    </div>
  );
};

export default Title;
