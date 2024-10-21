import React from 'react';
import './CardsSection.css'; // Ensure to import your CSS file

const CardsSection = () => {
  const cardsData = [
    {
      imgSrc: 'https://img.freepik.com/free-vector/designers-are-working-desing-web-page-web-design-user-interface-user-experience-content-organization_335657-4403.jpg?uid=R83729709&ga=GA1.1.250110745.1720246451',
      title: 'UI/UX Design',
      description: 'We create user-friendly interfaces that enhance user experience and elevate brand perception.',
    },
    {
      imgSrc: 'https://img.freepik.com/free-vector/web-developers-courses-computer-programming-web-design-script-coding-study-computer-science-student-learning-interface-structure-components_335657-2542.jpg?uid=R83729709&ga=GA1.1.250110745.1720246451',
      title: 'Web Development',
      description: 'Our team builds fast, responsive, and SEO-optimized websites for businesses of all sizes.',
    },
    {
      imgSrc: 'https://static.tildacdn.com/tild6137-3465-4061-b861-306330633839/mobile-development-c.jpg',
      title: 'App Development',
      description: 'Develop cross-platform mobile applications that scale with your business and engage your users.',
    },
    {
      imgSrc: 'https://img.freepik.com/free-vector/cloud-services-isometric-composition-with-cloud-connection-icons-server-racks-wired-cloud-with-sync-sign-vector-illustration_1284-65966.jpg?t=st=1729365114~exp=1729368714~hmac=af1300393ba064895b491295c8657f8aa320f29a648b7a0b46d6f44ec8c80c26&w=740',
      title: 'Cloud Services',
      description: 'Secure, scalable cloud solutions to help businesses achieve agility and reduce infrastructure costs.',
    },
  ];

  return (
    <section id="services" className="cards-section">
      <div className="container">
        {cardsData.map((card, index) => (
          <div className="card" key={index}>
            <img src={card.imgSrc} alt={card.title} />
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CardsSection;
