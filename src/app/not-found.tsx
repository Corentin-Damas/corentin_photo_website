import Link from "next/link";
import Image from "next/image";
import React from "react";
import { PiSealWarningBold } from "react-icons/pi";

function NotFound() {
  return (
    <main className="notFound">
      {/* <h4 className="notFoundMyName">Corentin Damas</h4> */}
      <PiSealWarningBold className="notFoundLogo"/>

      <div className="notFoundTxt">
        <h4 className="notFoundTitle">There was a problem</h4>
        <p>
          We could not find the page you were looking for. <br />
          <Link className="notFoundLink" href={"/"}>
            {" "}
            &gt; Go back to the main page{" "}
          </Link>{" "}
        </p>
      </div>
      <Link href={"/gallery/earth_and_sky"}>
        <Image
          src="/earth_and_sky/L/19-earth_and_sky.jpg"
          alt="Landscape at sunrise of a valley bathing in pink clouds, in the middle the ruine of a old japanese castle"
          sizes="(max-width: 640px) 100vw, 33vw"
          width={600}
          height={0}
          quality={80}
          className="notFoundImg"
        />
      </Link>
    </main>
  );
}

export default NotFound;
