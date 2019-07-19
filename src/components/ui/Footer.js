import React from "react";
import Link, { ImageLink } from "../Link";
import "./Footer.scss";

export default () => (
  <footer className="footer">
    <div className="footer-credits">
      {`© 2019, `}
      <Link to="https://sophieau.com">Sophie Au</Link>
      {` and `}
      <Link to="https://github.com/QuintusHortensiusHortalus">
        Malte Lippmann
      </Link>
    </div>
    <div className="footer-social-media-links">
      <ModDB />
      <Facebook />
      <Twitter />
    </div>
  </footer>
);

const ModDB = () => (
  <ImageLink
    to="https://www.moddb.com/mods/imperial-splendour"
    title="Imperial Splendour on ModDB"
  >
    <img
      src="https://button.moddb.com/popularity/medium/mods/20800.png"
      alt=""
    />
  </ImageLink>
);

const Facebook = () => (
  <ImageLink
    to="https://www.facebook.com/imperialsplendour/"
    title="Imperial Splendour on Facebook"
  >
    <svg viewBox="0 0 24 24" role="img">
      <path d="M13.397,20.997v-8.196h2.765l0.411-3.209h-3.176V7.548c0-0.926,0.258-1.56,1.587-1.56h1.684V3.127	C15.849,3.039,15.025,2.997,14.201,3c-2.444,0-4.122,1.492-4.122,4.231v2.355H7.332v3.209h2.753v8.202H13.397z" />
    </svg>
  </ImageLink>
);

const Twitter = () => (
  <ImageLink
    to="https://twitter.com/splendourteam"
    title="Imperial Splendour on Twitter"
  >
    <svg viewBox="0 0 24 24" role="img">
      <path d="M19.633,7.997c0.013,0.175,0.013,0.349,0.013,0.523c0,5.325-4.053,11.461-11.46,11.461c-2.282,0-4.402-0.661-6.186-1.809	c0.324,0.037,0.636,0.05,0.973,0.05c1.883,0,3.616-0.636,5.001-1.721c-1.771-0.037-3.255-1.197-3.767-2.793	c0.249,0.037,0.499,0.062,0.761,0.062c0.361,0,0.724-0.05,1.061-0.137c-1.847-0.374-3.23-1.995-3.23-3.953v-0.05	c0.537,0.299,1.16,0.486,1.82,0.511C3.534,9.419,2.823,8.184,2.823,6.787c0-0.748,0.199-1.434,0.548-2.032	c1.983,2.443,4.964,4.04,8.306,4.215c-0.062-0.3-0.1-0.611-0.1-0.923c0-2.22,1.796-4.028,4.028-4.028	c1.16,0,2.207,0.486,2.943,1.272c0.91-0.175,1.782-0.512,2.556-0.973c-0.299,0.935-0.936,1.721-1.771,2.22	c0.811-0.088,1.597-0.312,2.319-0.624C21.104,6.712,20.419,7.423,19.633,7.997z" />
    </svg>
  </ImageLink>
);
