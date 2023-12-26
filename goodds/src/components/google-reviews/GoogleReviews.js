import React from 'react';
import './GoogleReviews.css'
import { Helmet } from 'react-helmet';

function GoogleReviews({title}) {
    return (
        <section className="reviewScript">
            <h1 className="secondaryText secondaryTextReviews">Confira depoimentos de quem já está <span className="destaqueText">vendendo na Internet todos os dias</span></h1>
            <Helmet>
                <script src="https://static.elfsight.com/platform/platform.js" data-use-service-core defer></script>
            </Helmet>
            <div className="elfsight-app-e212ff39-6252-424e-9ba2-495def5f53e1" data-elfsight-app-lazy></div>
            <div className="bar-white containerReviewsGoogle"></div>
        </section>
    );
}

export default GoogleReviews;