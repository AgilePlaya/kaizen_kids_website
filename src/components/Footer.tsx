import Link from "next/link";
import Image from "next/image";
import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaMapMarkerAlt,
} from "react-icons/fa";
import ImImg1 from "../../public/maps.png";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="bg-zinc-900 text-gray-400 px-8 py-4 text-center text-base"
    >
      <div className="row-primary w-full mx-[1%] p-[1em]">
        <div className="w-full flex flex-col px-[1em] min-h-[20em]">
          <h1 className="w-full text-left text-white text-3xl font-bold text-nowrap py-8  pr-[2em]">
            Kaizen Kids Pre-school and Activity Centre
          </h1>
          {/* <Link href="https://maps.app.goo.gl/WJkQ99qicUGG8v5J8"><Image src={ImImg1} width="400" height="300" loading="lazy" className="rounded-2xl object-cover" alt="/"/></Link> */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7329.308544689302!2d85.3115416403367!3d23.292008804556396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f51f005fb484ef%3A0xe2b80069d370f41!2sKaizen%20Kids%20Pre-school%20and%20Activity%20Centre!5e0!3m2!1sen!2sin!4v1732917086010!5m2!1sen!2sin"
            width="650"
            height="300"
            loading="lazy"
            className="rounded-2xl"
          ></iframe>
        </div>

        <div className="w-full flex flex-col px-[1em] min-h-[20em]">
          <h1 className="w-full text-right text-white text-3xl font-bold text-nowrap py-8  pl-[2em]">
            Reach out to us:
          </h1>
          <div className="text-right">
            <p className="w-full text-xl text-nowrap py-4">
              Road Number 5 <br /> Patel Nagar, Opposite NIFFT <br />
              Hatia-834003
            </p>
            <p className="w-full text-xl text-nowrap py-4">+91 8877668090</p>
            <p className="w-full text-xl text-nowrap pb-4">
              <Link href="">info@kaizenkids.in</Link>
            </p>
            <p className="w-full text-nowrap py-6">
              <Link href="">
                <FaFacebook
                  size="50"
                  className="text-white hover:text-blue-600 ease-in duration-300 inline-flex mx-[1em]"
                />
              </Link>
              <Link href="">
                <FaInstagram
                  size="50"
                  className="text-white hover:text-amber-600 ease-in duration-300 inline-flex mx-[1em]"
                />
              </Link>
              <Link href="">
                <FaMapMarkerAlt
                  size="50"
                  className="text-white hover:text-green-600 ease-in duration-300 inline-flex mx-[1em]"
                />
              </Link>
            </p>
          </div>
        </div>
      </div>

      <div className="bg-zinc-800 rounded-xl">
        <p className="p-4 text-slate-200">
          Copyright &copy; 2024 || Designed By:{" "}
          <Link href="https://github.com/AgilePlaya" className="hover:text-cyan-300 ease-in duration-300">
            AgilePlaya
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
