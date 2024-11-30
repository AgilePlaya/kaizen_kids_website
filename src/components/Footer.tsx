import Link from "next/link";
import Image from "next/image";
import React from "react";
import { FaFacebook, FaInstagram, FaMapMarkerAlt } from "react-icons/fa";
import ImImg1 from "../../public/maps.png";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="bg-zinc-900 text-gray-400 px-8 py-8 text-center text-base"
    >
      {/* Desktop version */}
      <div className="hidden lg:flex px-4">
        <div className="row-primary w-full">
          {/* Google Maps */}
          <div className="w-full flex flex-col px-2 pb-6 min-h-80 ">
            <h1 className="w-full text-left text-white text-3xl font-bold text-nowrap py-8">
              Kaizen Kids Pre-school and Activity Centre
            </h1>
            {/* <Link href="https://maps.app.goo.gl/WJkQ99qicUGG8v5J8"><Image src={ImImg1} width="400" height="300" loading="lazy" className="rounded-2xl object-cover" alt="/"/></Link> */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7329.308544689302!2d85.3115416403367!3d23.292008804556396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f51f005fb484ef%3A0xe2b80069d370f41!2sKaizen%20Kids%20Pre-school%20and%20Activity%20Centre!5e0!3m2!1sen!2sin!4v1732917086010!5m2!1sen!2sin"
              width="600"
              height="350"
              loading="lazy"
              className="rounded-2xl object-contain"
            ></iframe>
          </div>

          {/* Contact Info */}
          <div className="w-full flex flex-col px-2 min-h-80">
            <h1 className="w-full text-right text-white text-3xl font-bold text-nowrap py-8">
              Reach out to us:
            </h1>
            <div className="text-right">
              <p className="w-full text-2xl text-nowrap py-6">
                Road Number 5 <br /> Patel Nagar, Opposite NIFFT <br />
                Hatia-834003
              </p>
              <p className="w-full text-2xl text-nowrap pb-6">+91 8877668090</p>
              <p className="w-full text-2xl text-nowrap pb-6">
                <Link href="mailto:info@kaizenkids.in">info@kaizenkids.in</Link>
              </p>
              <p className="w-full text-nowrap py-8">
                <Link href="https://www.facebook.com/61557749560567/">
                  <FaFacebook
                    size="50"
                    className="text-white hover:text-blue-600 ease-in duration-300 inline-flex mx-4"
                  />
                </Link>
                <Link href="https://www.instagram.com/kaizenkidspreschool/">
                  <FaInstagram
                    size="50"
                    className="text-white hover:text-amber-600 ease-in duration-300 inline-flex mx-4"
                  />
                </Link>
                <Link href="https://maps.app.goo.gl/KfxKrZpF1ayAdsrP6">
                  <FaMapMarkerAlt
                    size="50"
                    className="text-white hover:text-green-600 ease-in duration-300 inline-flex mx-4"
                  />
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile version */}
      <div className="flex lg:hidden ">
        <div className="flex-row w-full py-2">
          {/* Google Maps */}
          <div className="w-full flex-col px-2  pb-2">
            <h1 className="w-full text-left text-white text-2xl font-bold py-4">
              Kaizen Kids Pre-school and Activity Centre
            </h1>
            {/* <Link href="https://maps.app.goo.gl/WJkQ99qicUGG8v5J8"><Image src={ImImg1} width="400" height="300" loading="lazy" className="rounded-2xl object-cover" alt="/"/></Link> */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7329.308544689302!2d85.3115416403367!3d23.292008804556396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f51f005fb484ef%3A0xe2b80069d370f41!2sKaizen%20Kids%20Pre-school%20and%20Activity%20Centre!5e0!3m2!1sen!2sin!4v1732917086010!5m2!1sen!2sin"
              width="500"
              height="350"
              loading="lazy"
              className="rounded-2xl w-full max-w-full"
            ></iframe>
          </div>

          {/* Contact Info */}
          <div className="w-full flex flex-col px-2">
            <div className="text-justify">
              <h1 className="w-full text-left text-white text-xl font-semibold py-4">
                Road Address:
              </h1>
              <p className="w-full text-base text-wrap pb-4">
                Road Number 5 <br /> Patel Nagar, Opposite NIFFT <br />
                Hatia-834003
              </p>
              <p className="w-full text-base font-semibold text-wrap pb-4">
                +91 8877668090
              </p>
              <p className="w-full text-base font-semibold text-wrap pb-4">
                <Link href="mailto:info@kaizenkids.in" className="hover:text-cyan-600 ease-in duration-300">info@kaizenkids.in</Link>
              </p>

              <p className="w-full text-wrap text-center py-6 px-10">
                <Link href="https://www.facebook.com/61557749560567/">
                  <FaFacebook
                    size="50"
                    className="w-[33%] text-white hover:text-blue-600 ease-in duration-300 inline-flex mx-auto "
                  />
                </Link>
                <Link href="https://www.instagram.com/kaizenkidspreschool/">
                  <FaInstagram
                    size="50"
                    className="w-[33%] text-white hover:text-amber-600 ease-in duration-300 inline-flex mx-auto"
                  />
                </Link>
                <Link href="https://maps.app.goo.gl/KfxKrZpF1ayAdsrP6">
                  <FaMapMarkerAlt
                    size="50"
                    className="w-[33%] text-white hover:text-green-600 ease-in duration-300 inline-flex mx-auto"
                  />
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Copyright and credits */}
      <div className="hidden lg:block w-full bg-zinc-800 rounded-xl">
        <p className="p-4 text-slate-300">
          Desktop Copyright &copy; 2024 || Designed By:{" "}
          <Link
            href="https://github.com/AgilePlaya"
            className="hover:text-cyan-300 ease-in duration-300"
          >
            AgilePlaya
          </Link>
        </p>
      </div>

      {/* Mobile Copyright and credits */}
      <div className="block lg:hidden w-full bg-zinc-800 rounded-xl">
        <p className="p-4 text-center text-slate-300">
          Designed By:{" "}
          <Link
            href="https://github.com/AgilePlaya"
            className="hover:text-cyan-300 ease-in duration-300"
          >
            AgilePlaya
          </Link>
          <br />
          Mobile Copyright &copy; 2024
        </p>
      </div>
    </footer>
  );
};

export default Footer;
