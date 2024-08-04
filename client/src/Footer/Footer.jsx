import React from "react";
import { MDBFooter } from "mdb-react-ui-kit";

export default function Footer() {
  return (
    <MDBFooter bgColor="light" className="text-center text-lg-left">
      <div
        className="text-center p-3 "
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        Visit the official government <a href = "http://www.uppcb.com/river_quality.htm" target="_blank">website</a> for more information.
        <br></br>



        
        
      </div>
    </MDBFooter>
  );
}
