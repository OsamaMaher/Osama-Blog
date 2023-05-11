import React from "react";

function Footer() {
  return (
    <footer>
      <div className="container">
        <footer className="py-3 my-4">
          <hr />
          <p className="text-center text-muted">
            ©️ {new Date().getFullYear()} Osama Ibrahim
          </p>
        </footer>
      </div>
    </footer>
  );
}

export default Footer;
