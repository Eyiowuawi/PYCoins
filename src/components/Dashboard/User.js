const User = ({date}) => {
  return (
    <div className="home_name">
      <h3 className="title title-black">Hello, John 👋</h3>
      <p className="title title-grey">{date}</p>
    </div>
  );
};
export default User;
