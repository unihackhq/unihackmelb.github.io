import React, { useState } from 'react';
import classNames from 'classnames/bind';
import Link from 'next/link';
import styles from './header.module.scss';
import Menu from '../menu/menu';
import { MenuItemI } from '../menu/menu-item/menu-item.interface';

const cx = classNames.bind(styles);

type PropTypes = {
  dark?: boolean;
};

const Logo = ({ dark }: PropTypes) => (
  <Link href="/">
    <a className={styles['header-logo-content']} aria-label="UNIHACK Home">
      <svg
        width="176"
        height="40"
        viewBox="0 0 176 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22.5 32.0334V10.0305C22.5 9.8209 22.6679 9.65106 22.8751 9.65106H29.6253C29.8321 9.65106 30 9.8209 30 10.0305V32.0594L22.5 32.0334ZM7.8495 40H22.1506C22.3743 40 22.5889 39.9102 22.7472 39.7502L29.7529 32.6628C29.8245 32.5905 29.8824 32.506 29.9242 32.4128H7.875L7.8495 40ZM7.49995 39.9234C7.408 39.881 7.32432 39.8223 7.2529 39.75L0.247138 32.6628C0.0889234 32.5026 2.56613e-05 32.2857 7.97085e-09 32.0594V10.0046C-1.5225e-05 9.89248 0.0218032 9.78148 0.0642084 9.67793C0.106614 9.57438 0.168774 9.4803 0.247138 9.40106L7.01992 2.54935C7.19705 2.37014 7.50003 2.49701 7.50003 2.75072L7.49995 39.9234Z"
          fill="#FCC300"
        />
        <path
          d="M22.5 0.284855V6.806C22.5 7.01542 22.6679 7.18526 22.875 7.18526H29.3211C29.5716 7.18526 29.6971 6.87884 29.52 6.69963L22.9801 0.0838952C22.8029 -0.0953085 22.5 0.0316092 22.5 0.284855Z"
          fill={dark ? '#FCC300' : '#1F252A'}
        />
        <path
          d="M51.0529 8.75792V21.8316C51.0529 23.579 51.4318 24.8948 52.1897 25.779C52.9687 26.6421 54.0845 27.0737 55.5371 27.0737C56.9687 27.0737 58.0634 26.6421 58.8213 25.779C59.6003 24.8948 59.9897 23.579 59.9897 21.8316V8.75792H64.4108V21.8316C64.4108 23.8948 64.0213 25.6421 63.2424 27.0737C62.4845 28.4842 61.4213 29.5369 60.0529 30.2316C58.7055 30.9263 57.1687 31.2737 55.4424 31.2737C52.7687 31.2737 50.6318 30.4737 49.0318 28.8737C47.4318 27.2737 46.6318 24.9263 46.6318 21.8316V8.75792H51.0529ZM85.3039 31.0527H80.8513L70.8724 15.8948V31.0527H66.4197V8.75792H70.8724L80.8513 24.0421V8.75792H85.3039V31.0527ZM91.8908 8.75792V31.0527H87.4382V8.75792H91.8908ZM112.498 8.75792V31.0527H108.014V21.3579H98.4768V31.0527H94.0242V8.75792H98.4768V17.7895H108.014V8.75792H112.498ZM128.221 26.5684H119.284L117.705 31.0527H113L121.21 9.01055H126.294L134.473 31.0527H129.768L128.221 26.5684ZM127.021 23.1895L123.737 13.779L120.452 23.1895H127.021ZM145.056 8.53687C147.834 8.53687 150.14 9.25265 151.971 10.6842C153.803 12.1158 155.013 14.0632 155.603 16.5263H150.929C150.445 15.3263 149.687 14.379 148.656 13.6842C147.645 12.9895 146.424 12.6421 144.992 12.6421C143.813 12.6421 142.75 12.9369 141.803 13.5263C140.856 14.1158 140.119 14.9579 139.592 16.0527C139.066 17.1474 138.803 18.4316 138.803 19.9053C138.803 21.3579 139.066 22.6316 139.592 23.7263C140.119 24.8211 140.856 25.6632 141.803 26.2527C142.75 26.8421 143.813 27.1369 144.992 27.1369C146.424 27.1369 147.645 26.7895 148.656 26.0948C149.687 25.4 150.445 24.4527 150.929 23.2527H155.603C155.013 25.7158 153.803 27.6632 151.971 29.0948C150.14 30.5263 147.834 31.2421 145.056 31.2421C142.929 31.2421 141.045 30.7684 139.403 29.8211C137.782 28.8527 136.519 27.5053 135.613 25.779C134.729 24.0527 134.287 22.0948 134.287 19.9053C134.287 17.6948 134.729 15.7263 135.613 14C136.519 12.2737 137.782 10.9369 139.403 9.9895C141.024 9.02108 142.908 8.53687 145.056 8.53687ZM165.702 19.7158L175.144 31.0527H169.744L161.502 20.8527V31.0527H157.049V8.75792H161.502V18.7684L169.775 8.75792H175.144L165.702 19.7158Z"
          fill={dark ? '#FFFFFF' : '#1F252A'}
        />
      </svg>
    </a>
  </Link>
);

const Header = ({ dark }: PropTypes) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems: MenuItemI[] = [
    { text: 'Sponsor', href: '/sponsorship' },
    { text: 'About', href: '/about' }
  ];

  return (
    <div className={cx('header', dark && 'dark')}>
      <div className={styles['header-content']}>
        <div className={styles['header-logo']}>
          <Logo dark={dark} />
        </div>
        <Menu
          dark={dark}
          items={menuItems}
          isOpen={isMenuOpen}
          onClick={toggleMenu}
        />
      </div>
    </div>
  );
};

export default Header;
