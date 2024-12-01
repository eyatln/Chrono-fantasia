import React, { useState, useEffect } from 'react';
import { Container, Form, Button, Row, Col, Alert, Spinner } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import logo from './assets/logo.png'; 
import { Nav, Navbar } from 'react-bootstrap';
import emailjs from 'emailjs-com'; // Importer EmailJS

function PaymentPage() {
  const location = useLocation();
  const navigate = useNavigate();

  // Détails reçus depuis la page précédente (via le state du navigate)
  const { selectedTimeSlot, selectedEra } = location.state || {};
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    ticketType: 'adult', // Par défaut, l'option adulte est sélectionnée
  });
  const [showAlert, setShowAlert] = useState(false); // Pour afficher l'alerte si le formulaire est incomplet
  const [isSubmitting, setIsSubmitting] = useState(false); // Pour afficher le spinner lors de l'envoi du formulaire

  useEffect(() => {
    if (!selectedTimeSlot || !selectedEra) {
      navigate('/'); // Si on accède à cette page sans avoir sélectionné d'époque et de créneau, rediriger vers l'accueil
    }
  }, [selectedTimeSlot, selectedEra, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Vérification si tous les champs sont remplis
    const { firstName, lastName, email, phone, ticketType } = formData;
    if (!firstName || !lastName || !email || !phone || !ticketType) {
      setShowAlert(true); // Afficher l'alerte si des champs sont manquants
      return;
    }

    // Validation de l'email
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
      alert("Veuillez entrer un email valide.");
      return;
    }

    // Validation du numéro de téléphone (simple validation pour un format de 10 chiffres)
    const phonePattern = /^[0-9]{8}$/;
    if (!phonePattern.test(phone)) {
      alert("Veuillez entrer un numéro de téléphone valide.");
      return;
    }

    setIsSubmitting(true); // Afficher le spinner

    // Envoi d'email avec EmailJS
    const templateParams = {
      firstName,
      lastName,
      email,
      phone,
      ticketType,
      selectedEra,
      selectedTimeSlot
    };

    emailjs.send("service_zuiuxni","template_giis6va", templateParams, 'LKDrUJcLgLr_TxvDE')
      .then((response) => {
        alert('Réservation effectuée avec succès !');
        setIsSubmitting(false); // Cacher le spinner après soumission
        navigate('/'); // Redirection vers la page d'accueil après la soumission
      })
      .catch((error) => {
        alert('Une erreur est survenue lors de l\'envoi de l\'email.');
        setIsSubmitting(false); // Cacher le spinner si une erreur se produit
      });
  };

  return (
    <div style={{ backgroundColor: '#f8f9fa', paddingTop: '50px', paddingBottom: '50px' }}>
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
        </Container>
      </Navbar>

      <Container>
        {/* Alerte si un champ obligatoire est vide */}
        {showAlert && (
          <Alert variant="danger" onClose={() => setShowAlert(false)} dismissible>
            <Alert.Heading>Erreur de saisie !</Alert.Heading>
            <p>Veuillez remplir tous les champs du formulaire avant de soumettre.</p>
          </Alert>
        )}

        <Row>
          {/* Colonne pour les détails de la réservation (à gauche) */}
          <Col md={6}>
            <h5 className="mt-4">Détails de la réservation</h5>
            <p><strong>Époque sélectionnée :</strong> {selectedEra}</p>
            <p><strong>Créneau horaire sélectionné :</strong> {selectedTimeSlot}</p>
          </Col>

          {/* Colonne pour le formulaire de paiement (à droite) */}
          <Col md={6}>
            <Form onSubmit={handleSubmit}>
              <Row>
                <Col md={6}>
                  <Form.Group controlId="formFirstName">
                    <Form.Label>Prénom</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Entrez votre prénom"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      aria-label="Prénom"
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="formLastName">
                    <Form.Label>Nom</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Entrez votre nom"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      aria-label="Nom"
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group controlId="formEmail" className="mt-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Entrez votre email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  aria-label="Email"
                />
              </Form.Group>

              <Form.Group controlId="formPhone" className="mt-3">
                <Form.Label>Numéro de téléphone</Form.Label>
                <Form.Control
                  type="tel"
                  placeholder="Entrez votre numéro de téléphone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  aria-label="Numéro de téléphone"
                />
              </Form.Group>

              <Form.Group controlId="formTicketType" className="mt-3">
                <Form.Label>Type de billet</Form.Label>
                <div>
                  <Form.Check
                    inline
                    type="radio"
                    label="Adulte"
                    name="ticketType"
                    value="adult"
                    checked={formData.ticketType === 'adult'}
                    onChange={handleChange}
                  />
                  <Form.Check
                    inline
                    type="radio"
                    label="Enfant"
                    name="ticketType"
                    value="child"
                    checked={formData.ticketType === 'child'}
                    onChange={handleChange}
                  />
                  <Form.Check
                    inline
                    type="radio"
                    label="Étudiant"
                    name="ticketType"
                    value="student"
                    checked={formData.ticketType === 'student'}
                    onChange={handleChange}
                  />
                </div>
              </Form.Group>

              <div className="text-center mt-4">
                <Button 
                  type="submit"
                  style={{
                    backgroundColor: '#6f4f37',
                    color: '#fff',
                    border: 'none',
                    padding: '10px 20px',
                    borderRadius: '5px',
                    fontSize: '16px',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                  }}>
                  {isSubmitting ? (
                    <Spinner animation="border" variant="light" size="sm" />
                  ) : (
                    'Réserver'
                  )}
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default PaymentPage;
