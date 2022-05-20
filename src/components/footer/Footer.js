import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import styles from "./footer.module.css";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.socialMedia}>
        <InstagramIcon /> <TwitterIcon /> <FacebookIcon />
      </div>
    </div>
  );
}

export default Footer;