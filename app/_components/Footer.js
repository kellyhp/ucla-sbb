import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import logo from "../../public/_images/logo/logo.jpeg";
export default function Footer() {
  return (
    <footer className="footer bg-rose-100 text-black-content py-10 md:px-20 px-10 flex md:justify-between flex-col md:flex-row">
    {/* Logo and Socials */}
    <div>
      <aside>
      <Link href="/">
          <Image
            src={logo}
            alt="UCLA SBB Logo"
            className="rounded-full w-[200px] h-[100px] object-cover mb-3"
          />
        </Link>
        <Link href="/" className="font-bold text-lg">
          Smile Beyond Boundaries <br/> Univeristy of California, Los Angeles 
        </Link>
        <p className="mt-1">By Kelly Phan 🦦 with 💚</p>
      </aside>
    </div>
    <div>
      <h6 className="footer-title text-black">Get in Touch</h6>
      <a href="mailto:sbbatucla@gmail.com" className="link link-hover">sbbatucla@gmail.com</a>
    </div>
    <div> 
      <h6 className="footer-title text-black">Social</h6>
        <div className="grid grid-flow-col gap-4">
        <a
            href="https://www.instagram.com/sbbatucla/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center w-full h-full text-black
            "
          >
            <FontAwesomeIcon icon={faInstagram} size="2x"/>
          </a>
        </div>
    </div>
    {/* <div>
      <h6 className="footer-title"><Link href="/" className="link link-hover">Home</Link></h6>
      <ol><Link href="/about" className="link link-hover">About Us</Link></ol>
      <ol><Link href="/events" className="link link-hover">Events</Link></ol>
      <ol><Link href="/officers" className="link link-hover">Officers</Link></ol>
      <ol><Link href="/gallery" className="link link-hover">Gallery</Link></ol>
      <ol><Link href="/requirements" className="link link-hover">Requirements</Link></ol>
    </div>
    <div>
      <h6 className="footer-title">Programs</h6>
      <a className="link link-hover">8 Hour Infectious Disease Certification</a>
      <a className="link link-hover">X-Ray Certification</a>
      <a className="link link-hover">SNDA Conferences</a>
      <a className="link link-hover">Workshops</a>
    </div> */}
  </footer>

  );
}
