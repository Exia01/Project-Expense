import React from 'react';
import { Link } from 'react-router-dom';

import useStyles from '../../styles/FooterStyles';

import { GithubFilled, LinkedinFilled } from '@ant-design/icons';

function Footer(props) {
  const classes = useStyles();
  return (
    <footer>
      <div className={`${classes.root} container-fluid`}>
        <div className={classes.logo}></div>
        <div className={classes.footerMenu}>
          <ul>
            <li>
              <Link
                to='https://google.com'
                target='_blank'
                rel='noopener noreferrer'
                className='link-footer'
              >
                Testing
              </Link>
            </li>
            <li>
              <Link
                to='https://google.com'
                target='_blank'
                rel='noopener noreferrer'
                className='link-footer'
              >
                Testing
              </Link>
            </li>
          </ul>
        </div>
        <div className={classes.footerBottom}>
          <ul>
            <li>
              <Link
                to='https://google.com'
                target='_blank'
                rel='noopener noreferrer'
              >
                <GithubFilled />
              </Link>
            </li>
            <li>
              <Link
                to='https://google.com'
                target='_blank'
                rel='noopener noreferrer'
              >
                <LinkedinFilled />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
