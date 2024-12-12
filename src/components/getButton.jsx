import React, { useState, useEffect } from "react";

const GetButton = (prop) => {
  const [link, setlink] = useState("");

  useEffect(() => {
    if (prop.text === "Apple") {
      setlink("https://apps.apple.com/bg/app/hospiyou/id6504822148");
    } else {
      setlink(
        "https://play.google.com/store/apps/details?id=com.hospiyou&pli=1"
      );
    }
  }, [prop.text]);

  return (
    <div>
      <a
        href={link}
        className="my-5 flex w-4/5 bg-primary justify-center gap-2 text-white py-2 px-3 mx-auto rounded-2xl hover:bg-hoverr md:items-center md:w-fit md:gap-2"
      >
        <img src={prop.image} alt="store" />
        <p>Get App on {prop.text} store</p>
      </a>
    </div>
  );
};

export default GetButton;
