import React from 'react';
import styles from './GoogleReviews.module.css'
import { Helmet } from 'react-helmet';

function GoogleReviews() {
    return (
        <section className={styles.reviewScript}>
            <h1 className="text-center">Clientes Nacionais e Internacionais</h1>
            <Helmet>
                <script src="https://static.elfsight.com/platform/platform.js" data-use-service-core defer></script>
            </Helmet>
            <div className="elfsight-app-e212ff39-6252-424e-9ba2-495def5f53e1" data-elfsight-app-lazy></div>
            <div className="bar-white"></div>
        </section>
    );
}

export default GoogleReviews;