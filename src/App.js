import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar, Card, Carousel, Modal, Toast, ToastContainer } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';  // Utiliser le hook de navigation
import logo from './assets/logo.png'; 
import backgroundImage from './assets/background.png'; 
import vict from './assets/victo.png';
import egyp from './assets/egyp.png';
import ange from './assets/ange.png';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState('');
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null); 
  const [showToast, setShowToast] = useState(false); // Ajouter un état pour contrôler le toast

  const timeSlots = [
    { time: '10h-12h', availableSeats: 6 },
    { time: '13h-15h', availableSeats: 3 },
    { time: '16h-18h', availableSeats: 10 },
    { time: '19h-21h', availableSeats: 5 },
  ];

  const navigate = useNavigate();  // Utiliser le hook de navigation

  const handleShow = (content) => {
    setModalContent(content);
    setShowModal(true);
    setSelectedTimeSlot(null); // Réinitialiser la sélection à chaque ouverture du modal
  };

  const handleClose = () => setShowModal(false);

  const handleTimeSlotSelection = (slot) => {
    setSelectedTimeSlot(slot.time); // Sauvegarder uniquement l'heure du créneau sélectionné
  };

  const handleReserve = () => {
    if (selectedTimeSlot) {
      // Redirect to payment page with selected era and time slot
      navigate('/payment', { state: { selectedTimeSlot, selectedEra: modalContent } });
    } else {
      // Show toast if no time slot is selected
      setShowToast(true);
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

      {/* Section avec les cartes */}
      <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat', minHeight: '100vh', paddingTop: '150px', backgroundColor: '#f0f0f0' }}>
        <Container>
          <div className="row">
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
                  <Card.Text>Découvrez l'Égypte des pharaons, un monde de mystères et de majesté.</Card.Text>
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
                  backgroundColor: selectedTimeSlot === slot.time ? '#6f4f37' : '#f8f9fa',  // Appliquer la couleur en fonction de la sélection
                  color: selectedTimeSlot === slot.time ? '#fff' : '#000',
                  border: '1px solid #ccc',
                  cursor: 'pointer',
                  textAlign: 'center',
                  boxShadow: selectedTimeSlot === slot.time ? '0 0 10px rgba(0,0,0,0.2)' : 'none',
                  transition: 'background-color 0.3s ease, color 0.3s ease',
                }}
              >
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
      </Modal>

      {/* Toast */}
      <ToastContainer
        position="bottom-end" 
        className="p-3"
      >
        <Toast
          show={showToast}
          onClose={() => setShowToast(false)}
          delay={3000}
          autohide
          bg="danger"
          style={{
            marginTop: '10px',
            zIndex: 9999,
          }}
        >
          <Toast.Body>Veuillez sélectionner un créneau horaire.</Toast.Body>
        </Toast>
      </ToastContainer>


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
