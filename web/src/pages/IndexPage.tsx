import { Link } from 'react-router-dom';
import { PATH } from '../routing/path';
import styles from './IndexPage.module.scss';

export const IndexPage = () => {
  return <div className={ styles.Index }>
    <header className={ styles.IndexHeader }>
      <p>
        Media POC
      </p>
    </header>
    <main className={ styles.IndexBody }>
      <Link to={ PATH.DATA_SET_LIST }>Data Sets</Link>
    </main>
  </div>;
};
