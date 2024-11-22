import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import Modal from 'react-bootstrap/Modal'; 
import logo from './assets/logo.png'; 
import backgroundImage from './assets/background.png'; 
import vict from './assets/victo.png';
import egyp from './assets/egyp.png';
import ange from './assets/ange.png';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState('');
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);  // L'état du créneau sélectionné

  const timeSlots = [
    { time: '10h-12h', availableSeats: 6 },
    { time: '13h-15h', availableSeats: 3 },
    { time: '16h-18h', availableSeats: 10 },
    { time: '19h-21h', availableSeats: 5 },
  
  ];

  // Fonction pour ouvrir le modal avec un contenu spécifique
  const handleShow = (content) => {
    setModalContent(content);
    setShowModal(true);
    setSelectedTimeSlot(null); // Réinitialiser le créneau sélectionné lorsque le modal s'ouvre
  };

  // Fonction pour fermer le modal
  const handleClose = () => setShowModal(false);

  // Fonction pour sélectionner un créneau horaire
  const handleTimeSlotSelection = (slot) => {
    setSelectedTimeSlot(slot);  // Mettre à jour l'état avec le créneau sélectionné
  };

  // Fonction de réservation
  const handleReserve = () => {
    if (selectedTimeSlot) {
      alert(`Réservation confirmée pour le créneau ${selectedTimeSlot.time}. Places restantes : ${selectedTimeSlot.availableSeats - 1}`);
      setShowModal(false); // Fermer le modal après la réservation
    } else {
      alert('Veuillez sélectionner un créneau horaire.');
    }
  };

  return (
    <div className="App">
      {/* Navbar */}
      <Navbar data-bs-theme="light" style={{
        position: 'relative',
        zIndex: 2,
        backgroundColor: '#f8f9fa',
        fontFamily: 'Arial, sans-serif',
        fontSize: '18px',
        padding: '10px 20px',
      }}>
        <Container>
          <Navbar.Brand href="#home" style={{ fontFamily: 'Georgia, serif', fontSize: '24px' }}>
            <img src={logo} alt="Logo" height="100" width="150" style={{ marginRight: '10px' }} />
            CHRONO FANTASIA
          </Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="#home" style={{ color: '#000', fontFamily: 'Verdana, sans-serif', fontSize: '16px', margin: '0 15px', textDecoration: 'none' }}>Accueil</Nav.Link>
            <Nav.Link href="#contact" style={{ color: '#000', fontFamily: 'Verdana, sans-serif', fontSize: '16px', margin: '0 15px', textDecoration: 'none' }}>Contact</Nav.Link>
            <Nav.Link href="#create-account" style={{ color: '#000', fontFamily: 'Verdana, sans-serif', fontSize: '16px', margin: '0 15px', textDecoration: 'none' }}>Créer un compte</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* Carrousel */}
      <Carousel interval={3000} style={{ backgroundImage: `url(${backgroundImage})`, backgroundPosition: 'center center' }}>
        <Carousel.Item>
          <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', padding: '20px', textAlign: 'center' }}>
            <h3 style={{ color: 'white' }}>Tarif Adulte</h3>
            <p style={{ color: 'white', fontSize: '24px' }}>50 DT</p>
            <p style={{ color: 'white' }}>Venez voyager à travers le temps!</p>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', padding: '20px', textAlign: 'center' }}>
            <h3 style={{ color: 'white' }}>Tarif Enfant</h3>
            <p style={{ color: 'white', fontSize: '24px' }}>30 DT</p>
            <p style={{ color: 'white' }}>L'aventure vous attend !</p>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', padding: '20px', textAlign: 'center' }}>
            <h3 style={{ color: 'white' }}>Tarif Étudiant</h3>
            <p style={{ color: 'white', fontSize: '24px' }}>-10% de réduction</p>
            <p style={{ color: 'white' }}>Profitez d'un tarif spécial pour les étudiants!</p>
          </div>
        </Carousel.Item>
      </Carousel>

      <p style={{
        textAlign: 'center',
        fontSize: '18px',
        color: '#6f4f37',
        fontWeight: 'bold',
        backgroundColor: '#f8f8f8',
        padding: '3px',
        borderRadius: '8px',
      }}>
        Ouvert de 10h à 21h
      </p>

      {/* Section avec les cartes */}
      <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat', minHeight: '100vh', paddingTop: '150px', backgroundColor: '#f0f0f0' }}>
        <Container>
          <div className="row">
            {/* Card pour l'Époque Victorienne */}
            <div className="col-md-4 mb-4">
              <Card>
                <Card.Img variant="top" src={vict} style={{ height: '300px', objectFit: 'cover' }} />
                <Card.Body>
                  <Card.Title>Époque victorienne</Card.Title>
                  <Card.Text>Plongez dans le charme et l'élégance de l'époque victorienne</Card.Text>
                  <button onClick={() => handleShow('Époque victorienne')} className="btn" style={{
                    backgroundColor: '#6f4f37',
                    color: '#fff',
                    border: 'none',
                    padding: '10px 20px',
                    borderRadius: '5px',
                    fontSize: '16px',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                  }}>En savoir plus</button>
                </Card.Body>
              </Card>
            </div>
            {/* Autres cartes */}
            <div className="col-md-4 mb-4">
              <Card>
                <Card.Img variant="top" src={ange} style={{ height: '300px', objectFit: 'cover' }} />
                <Card.Body>
                  <Card.Title>Époque L'Âge de Pierre</Card.Title>
                  <Card.Text>Vivez l'aventure préhistorique, là où tout a commencé.</Card.Text>
                  <button onClick={() => handleShow('L\'Âge de Pierre')} className="btn" style={{
                    backgroundColor: '#6f4f37',
                    color: '#fff',
                    border: 'none',
                    padding: '10px 20px',
                    borderRadius: '5px',
                    fontSize: '16px',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                  }}>En savoir plus</button>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-4 mb-4">
              <Card>
                <Card.Img variant="top" src={egyp} style={{ height: '300px', objectFit: 'cover' }} />
                <Card.Body>
                  <Card.Title>Époque Égyptienne</Card.Title>
                  <Card.Text>Partez à la découverte de l'Égypte des pharaons, un monde de mystères et de majesté.</Card.Text>
                  <button onClick={() => handleShow('Époque Égyptienne')} className="btn" style={{
                    backgroundColor: '#6f4f37',
                    color: '#fff',
                    border: 'none',
                    padding: '10px 20px',
                    borderRadius: '5px',
                    fontSize: '16px',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                  }}>En savoir plus</button>
                </Card.Body>
              </Card>
            </div>
          </div>
        </Container>
      </div>

      {/* Modal pour afficher les créneaux horaires */}
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{modalContent}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Voici les créneaux horaires disponibles pour {modalContent} :</p>
          <div className="d-flex flex-wrap justify-content-around">
            {timeSlots.map((slot, index) => (
              <div 
                key={index}
                onClick={() => handleTimeSlotSelection(slot)} 
                style={{
                  width: '120px',
                  margin: '10px',
                  padding: '10px',
                  borderRadius: '5px',
                  backgroundColor: selectedTimeSlot === slot ? '#6f4f37' : '#f8f9fa',
                  color: selectedTimeSlot === slot ? '#fff' : '#000',
                  border: '1px solid #ccc',
                  cursor: 'pointer',
                  textAlign: 'center',
                  boxShadow: selectedTimeSlot === slot ? '0 0 10px rgba(0,0,0,0.2)' : 'none',
                  transition: 'background-color 0.3s ease, color 0.3s ease',
                }}>
                <h6>{slot.time}</h6>
                <p>{slot.availableSeats} places restantes</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <button onClick={handleReserve} style={{
              backgroundColor: '#6f4f37',
              color: '#fff',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '5px',
              fontSize: '16px',
              fontWeight: 'bold',
              cursor: 'pointer',
            }}>Réserver</button>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button variant="secondary" onClick={handleClose}>Fermer</button>
        </Modal.Footer>
      </Modal>

      {/* Footer */}
      <footer style={{ backgroundColor: '#333', color: '#fff', padding: '10px 0', textAlign: 'center' }}>
        <Container>
          <p style={{ marginBottom: '5px' }}>CHRONO FANTASIA - Localisation: Avenue Habib Bourguiba, Grand Tunis</p>
          <p style={{ marginTop: '5px' }}>&copy; 2024 Chrono Fantasia. Tous droits réservés.</p>
        </Container>
      </footer>
    </div>
  );
}

export default App;
