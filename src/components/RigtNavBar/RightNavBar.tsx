import { useNavigate } from 'react-router-dom';
import styles from './RightNavBar.module.css';
import { FiLogIn } from 'react-icons/fi';
import { IoHeartOutline } from 'react-icons/io5';
import { FaFacebookF } from 'react-icons/fa';
import { FaPinterestP } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';

const RightNavBar = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login-register');
  };

  return (
    <>
      <section className={styles.contentRightSite}>
        <div className={styles.contentLogin}>
          <div>
            <FiLogIn />
          </div>
          <button className={styles.login} onClick={handleLoginClick}>
            LOGIN/REGISTER
          </button>
        </div>
        <div className={styles.contentWishList}>
          <div>
            <IoHeartOutline />
          </div>
          <button className={styles.wishlist}>WISHLIST</button>
        </div>
        <div className={styles.contentSociety}>
          <button>
            <FaTwitter />
          </button>
          <button>
            <FaFacebookF />
          </button>
          <button>
            <FaPinterestP />
          </button>
        </div>
      </section>
    </>
  );
};

export default RightNavBar;
