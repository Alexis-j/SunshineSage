import { FooterContainer, FooterLink, FooterLinks, FooterText } from "./styles";

const Footer = () => (
  <FooterContainer>
    <FooterText>&copy; {new Date().getFullYear()} SunshineSage. All rights reserved.</FooterText>
    <FooterLinks>
      <FooterLink>About</FooterLink>
      <FooterLink>Privacy</FooterLink>
      <FooterLink>Contact</FooterLink>
      <FooterLink>GitHub</FooterLink>
    </FooterLinks>
  </FooterContainer>
);

export default Footer;
