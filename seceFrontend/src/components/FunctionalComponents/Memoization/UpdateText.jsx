import { memo } from "react";

const UpdateNumber2 = ({value}) => {
    return (
      <div>
        <h2>Update Number 2</h2>
        <h3>Value is {value}</h3>
      </div>
    );
  };
  export default memo(UpdateNumber2);