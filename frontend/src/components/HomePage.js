import React from 'react';
import './HomePage.css'; // Assurez-vous que le chemin est correct

const HomePage = () => {
  return (
    <div>
        <h1>Bienvenue à Arcadia Zoo</h1>
        <img 
          src="/images/image_ourson_accueil.webp"
          alt="Vue du Zoo Arcadia" 
          className="responsiveImage"
        />
        <p>Le Zoo Arcadia est situé près de la forêt de Brocéliande en Bretagne, offrant un sanctuaire pour la faune depuis 1960.</p>
        <div>
          <h2>Horaires d'ouverture</h2>
          <p>Lundi - Vendredi: 9h00 - 18h00</p>
          <p>Samedi - Dimanche: 8h00 - 20h00</p>
        </div>
        <div>
          <h2>Tarifs d'entrée</h2>
          <p>Adulte: 15€</p>
          <p>Enfant (3-12 ans): 10€</p>
          <p>Seniors (65+ ans) et étudiants: 12€</p>
        </div>
      </div>
  );
}

export default HomePage;