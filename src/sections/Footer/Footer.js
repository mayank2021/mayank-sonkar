import React from "react";
import "./Footer.css";
import Logo from '../../Images/mayank-sonkar-logo.svg';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';

const Footer = (props) => {
  return (
    <div style={{borderColor:props.color}} className="footer">
      <div className="footer-content">
        <div className="footer-logo">
            <img src={Logo} alt="logo" />
            <p>Hey! Thanks a lot for coming so far. I hope you like the content. If you have any suggestions or want to discuss something with me or you think you need my help, then feel free to ping me on LinkedIn or send me an Email. I would love to hear from you. Find the resources to connect in the footer section.</p>
            </div>
        <div className="important-links">
            <h1 style={{color:props.color}} className="footer-primary">Important Links</h1>
            <a href="https://iiittm.surge.sh/webDevClub" target="_blank" rel="noopener noreferrer"> Web Dev IIITT Page</a>
            <hr style={{borderColor:props.color}} className="link-hr"/>
            <a href="https://mayank2021.github.io/old_portfolio/" target="_blank" rel="noopener noreferrer">Old Portfolio</a>
            <hr style={{borderColor:props.color}} className="link-hr"/>
            <a href="https://mkbangclasses.com/" target="_blank" rel="noopener noreferrer" > Live project</a>
            <hr style={{borderColor:props.color}} className="link-hr"/>
            <a href="https://techcowings.blogspot.com/" target="_blank" rel="noopener noreferrer" > My Blogs</a>
            <hr style={{borderColor:props.color}} className="link-hr"/>
        </div>
        <div className="important-links">
            <h1 style={{color:props.color}} className="footer-primary">Quick Explore</h1>
            <a href="/#project" > Projects</a>
            <hr style={{borderColor:props.color}} className="link-hr"/>
            <a href="/#tech">Technologies</a>
            <hr style={{borderColor:props.color}} className="link-hr"/>
            <a href="/#about" >About</a>
            <hr style={{borderColor:props.color}} className="link-hr"/>
            <a href="/#achievement" >Achievements</a>
            <hr style={{borderColor:props.color}} className="link-hr"/>
        </div>
        <div className="connect">
            <h1 style={{color:props.color}} className="footer-primary" >Connect With Me</h1>
            <div className="social-media-icons">
                   <div style={{marginLeft:0,borderColor:props.color}} className="square icon--container">
                       <a href="https://www.linkedin.com/in/mayank-sonkar-17a8401b6/" target="_blank" rel="noopener noreferrer">
                           <LinkedInIcon style={{fontSize:"23px",color:props.color}} className="icon"/>
                       </a>
                   </div>
                   <div style={{borderColor:props.color}} className="square icon--container">
                       <a href="https://github.com/mayank2021" target="_blank" rel="noopener noreferrer">
                           <GitHubIcon style={{fontSize:"23px",color:props.color}} className="icon"/>
                       </a>
                   </div>
                   <div style={{borderColor:props.color}} className="square icon--container">
                       <a href="https://www.instagram.com/heyy._.mayank/" target="_blank" rel="noopener noreferrer">
                           <InstagramIcon style={{fontSize:"23px",color:props.color}} className="icon"/>
                       </a>
                   </div>
              </div>
           <hr style={{borderColor:props.color}} className="link-hr hr-connect" />
           <h1 style={{color:props.color}} className="footer-primary" >Suggestion?</h1>
           <div style={{borderColor:props.color}} className="square icon--container">
                       <a href="mailto:mayanksonkar16@gmail.com">
                           <EmailIcon style={{fontSize:"23px",color:props.color}} className="icon"/>
                       </a>
                   </div>
        </div>
      </div>
      <div style={{borderColor:props.color}} className="credits">Made with <img src="https://media.giphy.com/media/LpDmM2wSt6Hm5fKJVa/giphy.gif" alt="heart"/> by Mayank.</div>
    </div>
  );
}; 

export default Footer;
