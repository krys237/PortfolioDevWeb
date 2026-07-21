import React from "react";
import "./Top.scss";
import whatsappLogo from "../../assets/images/logo-whatsapp.png";

export default function Top() {
  function TopEvent() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
  // When the user scrolls down 20px from the top of the document, show the button
  function scrollFunction() {
    const topButton = document.getElementById("topButton");
    const whatsappButton = document.getElementById("whatsappButton");

    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      if (topButton) topButton.style.visibility = "visible";
      if (whatsappButton) whatsappButton.style.visibility = "visible";
    } else {
      if (topButton) topButton.style.visibility = "hidden";
      if (whatsappButton) whatsappButton.style.visibility = "hidden";
    }
  }
  window.onscroll = function () {
    scrollFunction();
  };
  window.onload = function () {
    scrollFunction();
  }; //To make sure that this button is not visible at starting.
  // When the user clicks on the button, scroll to the top of the document
  return (
    <>
      <a
        id="whatsappButton"
        href="https://wa.me/message/ELBULVXEIUHSF1"
        target="_blank"
        rel="noopener noreferrer"
        title="Me contacter sur WhatsApp"
      >
        <img src={whatsappLogo} alt="WhatsApp" />
      </a>
      <button onClick={TopEvent} id="topButton" title="Go to top">
        <i className="fas fa-hand-point-up" aria-hidden="true"></i>
      </button>
    </>
  );
}
