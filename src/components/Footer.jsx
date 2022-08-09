import {
  faGithub,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logotipo from "../assets/logo.png";

const Footer = () => {
  return (
    <>
      <footer class="footer footer-center p-10 bg-zinc-900 text-white mt-10">
        <div>
          <img className="w-8" src={logotipo} alt="logotipo" />
          <p class="font-bold">Lautaro Dev {""}</p>
          <p>Copyright © 2022 - All right reserved</p>
        </div>
        <div>
          <div class="grid grid-flow-col gap-4">
            <a href="#">
              <FontAwesomeIcon size="2x" icon={faGithub} />
            </a>
            <a href="#">
              <FontAwesomeIcon size="2x" icon={faLinkedin} />
            </a>
            <a href="#">
              <FontAwesomeIcon size="2x" icon={faWhatsapp} />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
