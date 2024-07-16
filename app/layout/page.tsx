import React from "react";

interface Props {}

const Page: React.FC<Props> = ({}) => {
  return (
    <div>
      <div>header</div>
      <div>nav</div>
      <div>
        <span>side</span>
        <div>main</div>
      </div>
      <div>footer</div>
    </div>
  );
};

export default Page;
