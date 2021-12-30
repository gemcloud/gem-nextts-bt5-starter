import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faPinterest
} from "@fortawesome/free-brands-svg-icons";

function BaseFooter() {
  return (
    <>
      <footer className="footer text-faded text-center py-5">
        <div className="container">
          <div className="social-icons">
            <a href="https://facebook.com/gemcloudtechnologies">
              <i>
                <FontAwesomeIcon icon={faFacebookF} />
              </i>
              {/* <i className="fab fa-facebook"></i> */}
            </a>
            <a href="https://instagram.com/gemcloudtechnologies">
              <i>
                <FontAwesomeIcon icon={faInstagram} />
              </i>
              {/* <i className="fab fa-instagram"></i> */}
            </a>
            <a href="https://twitter.com/gemcloudtechnologies">
              <i>
                <FontAwesomeIcon icon={faTwitter} />
              </i>
              {/* <i className="fab fa-twitter"></i> */}
            </a>
            <a href="https://pinterest.com/gemcloudtechnologies">
              <i>
                <FontAwesomeIcon icon={faPinterest} />
              </i>
              {/* <i className="fab fa-pinterest"></i> */}
            </a>
          </div>
          <p className="m-0 small">Make Coding easy</p>
          <p className="m-0 small copyright">
            Copyright © <a href="https://gemcloud.com">Gem Cloud</a> 2020
          </p>
        </div>
      </footer>
    </>
  );
}

export default BaseFooter;
