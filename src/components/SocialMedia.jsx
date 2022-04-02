/* Social media component file (3 icons that are rendered) */
import React from 'react';

// icons
import { BsTwitter, BsInstagram, BsYoutube, BsGithub } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => {

  const handleInstagram = () => {
    window.open("https://www.instagram.com/tho_norlha/");
  }

  const handleGitHub = () => {
    window.open("https://github.com/Thosam1");
  }

  const handleYoutube = () => {
    window.open("https://www.youtube.com/channel/UCadaAVpUtRtVSfPPy7z5lXA");
  }

  return(
    <div className="app__social">
    <div onClick={handleYoutube}>
      <BsYoutube />
    </div>
    <div onClick={handleGitHub}>
      <BsGithub />
    </div>
    <div onClick={handleInstagram}>
      <BsInstagram />
    </div>
  </div>
  );
}


export default SocialMedia;
