/* eslint-disable*/
const trackingButtonComponent = (Component) => {
  return (props) => {
    const handleClick = () => {
      alert("HoC Component is: ",props.trackingInfo);
    };
    return (
      <div onClick={handleClick}>
        CustomerID:
        <input type="text" />
        <br />
        Password:
        <input type="password" />
        <Component {...props} />
      </div>
    );
  };
};
export default trackingButtonComponent;
