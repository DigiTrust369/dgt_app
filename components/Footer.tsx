import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white box-shadow__top mt-10">
      <div className="container m-auto">
        <div className="flex justify-between items-center flex-wrap sm:px-16 px-6 py-10">
          <p>© DigiTrust 2023. All rights reserved </p>
          {/* <div className="footer__copyrights-link">
            <a className="text-gray-500" href="/">
              Chính sách quyền riêng tư
            </a>
            <a className="text-gray-500" href="/">
              Điều khoản &amp; Điều kiện
            </a>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
