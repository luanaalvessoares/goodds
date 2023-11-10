import React from 'react';
import './GoogleReviews.css'
import { Helmet } from 'react-helmet';

function GoogleReviews() {
    return (
        <section className="reviewScript">
            <h1 className="textCenter">Clientes Nacionais e Internacionais</h1>
            <Helmet>
                <script className="containerReviewsGoogle" src="https://static.elfsight.com/platform/platform.js" data-use-service-core defer></script>
            </Helmet>
            <div className="elfsight-app-e212ff39-6252-424e-9ba2-495def5f53e1 containerReviewsGoogle" data-elfsight-app-lazy></div>
            <div className="bar-white containerReviewsGoogle"></div>
        </section>
    );
}

export default GoogleReviews;