// import React from "react";
// import './ServicesCards.css';
// import ServicesCardsData from './ServicesCardsData'
// import { Link } from "react-router-dom";
// import ArrowTransition from "../../elements/arrow-transition/ArrowTransition";

// function ServicesCards() {
//     const servicesData = ServicesCardsData;

//     return (
//         <div className="serviceCard">
//             <div>
//             {servicesData.map((item, index) => (
//                 <div className="serviceContent" key={index}>
//                     <div className="serviceImage">
//                         <img src={item.serviceImage} alt="" />
//                     </div>

//                     <div className="serviceDescription">
//                         <h2>{item.serviceTitle}</h2>
//                         <p>{item.serviceDescription}</p>
//                     </div>

//                     <Link to={item.serviceLink}>
//                         <div className="serviceButton">
//                             <p>
//                                 Soluções e Preços
//                                 <ArrowTransition />
//                             </p>
//                         </div>                
//                     </Link>
//                 </div>
//             ))}
//             </div>
//         </div>
//     )
// }

// export default ServicesCards;