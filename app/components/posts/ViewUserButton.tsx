"use client";

interface ViewUserButtonProps {
  userId: number;
}

const ViewUserButton: React.FC<ViewUserButtonProps> = ({ userId }) => {
  return (
    <>
      <button onClick={() => alert(`User Id : ${userId}`)}>Klik disini</button>
    </>
  );
};

export default ViewUserButton;
