import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaLine } from "react-icons/fa";
import Image from "next/image";
const TopHeader = () => {
  const items = [
    { icon: <BsFillTelephoneFill />, description: "086-569-2289" },
    { icon: <FaLine />, description: "Sermsirisl" },
   
  ];
  
  return (
    <div className="text-center top-head p-1">
      <div className="flex gap-3 justify-start pl-8 ">
        
        <ul className="flex flex-wrap gap-2 md:gap-8 justify-center text-center">
          {items.map(({ icon, description }, index) => (
            <li key={index} className="flex items-center gap-2">
              <span>{icon}</span>
              <span>{description}</span>
            </li>
            
          ))}
          <li><Image
                className="qr-head"
                src="/qr.png" 
                width={60}
                height={60}
                alt="Picture of the author" />
            </li>
        </ul>
      </div>
    </div>
  );
};
export default TopHeader;