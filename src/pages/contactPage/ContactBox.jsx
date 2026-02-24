import { useState } from "react";
import { Mail } from "lucide-react";
import { Copy } from "lucide-react";

const ContactBox = ({ label, text }) => {
  const [toast, setToast] = useState("");

  const handleCopy = () => {
    navigator.clipboard.writeText(text)
      .then(() => {
        setToast("Copied");
        setTimeout(() => setToast(""), 2000);
      });
  };

  return (
    <div className="flex justify-between items-center text-center bg-black p-1 border-2 border-green-500 rounded-md w-full max-w-[500px] transition-all duration-300 ease-in-out hover:scale-105 cursor-pointer  md:min-h-16" onClick={handleCopy} data-copy={text}>

      <div className="flex justify-center items-center gap-1">
        <Mail/>
        <p className="text-xl">{label}</p>
      </div>

      <div className={`toast-notification ${toast ? "show" : ""}`}>
        {toast}
      </div>
       <Copy/>

    </div>
  );
};

export default ContactBox;

