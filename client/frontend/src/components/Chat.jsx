import React from "react";
import { MessageCircle } from "react-feather";

const Chat = () => {
  const handleContact = async () => {
    const message = `Hello, I want to make enquiries about May Gardens;`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappLink = `https://wa.me/${process.env.REACT_APP_PHONE}?text=${encodedMessage}`;
    window.open(whatsappLink, "_blank");
  };

  return (
    <div className="z-50 fixed bottom-10 right-10">
      <div
        onClick={handleContact}
        className="cursor-pointer shadow-md rounded-full w-16 h-16 flex justify-center items-center bg-gardenslight"
      >
        <MessageCircle />
      </div>
    </div>
  );
};

export default Chat;
