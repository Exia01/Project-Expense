import React from 'react';

import useStyles from '../../styles/FooterStyles';

function Footer() {
  const classes = useStyles();
  return (
    <footer>
      <div className={`${classes.root} container-fluid`}>
        <div className={classes.logo}></div>
        <div className={classes.footerMenu}>
          <ul>
            <li><a href="https://google.com" target="_blank" rel="noopener noreferrer">Testing</a></li>
            <li><a href="https://google.com" target="_blank" rel="noopener noreferrer">Testing</a></li>
          </ul>
        </div>
        <div className={classes.footerBottom}></div>
      </div>
    </footer>
  );
}

export default Footer;
