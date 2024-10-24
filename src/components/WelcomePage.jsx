import React, { useState } from 'react';
import { Button, Col, Container, Dropdown, Form, InputGroup } from 'react-bootstrap';
import Logo from './Logo'; 
import styles from './WelcomePage.module.css';
import welcome from '../assets/welcome.png'

const WelcomePage = ({ userName, selectedCarPark }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [carParks] = useState([
    'Light and Co - Available Spaces: 54 - Infringements: 42',
    'Peppers Oracle - Available Spaces: 16 - Infringements: 0',
    'Bond University Students - Available Spaces: 4998 - Infringements: 0',
    'Cambridge Residents - Available Spaces: 54 - Infringements: 257',
    'Spire Visitors - Available Spaces: 327 - Infringements: 150',
    'Pure Property Management - Available Spaces: 99 - Infringements: 0',
    'Seanna Retail Visitors - Available Spaces: 643 - Infringements: 105',
    'Varsity Towers - Available Spaces: 43 - Infringements: 51',
    'The Lanes 12P Visitors - Available Spaces: 47 - Infringements: 40',
  ]);

  const filteredCarParks = carParks.filter(carPark =>
    carPark.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={`${styles.background} d-flex flex-column flex-root`}>
      <Container className="d-flex flex-column flex-lg-row justify-content-center mx-auto min-vh-100 align-items-center ">
        <Col xs={12} md={8} lg={6} xl={4} className={`${styles.authCard} bg-body d-flex flex-column align-items-center rounded-3 shadow`}>

          {/* Logo */}
          <Logo />

          <div className={styles.mainImage}>
            <img src={welcome} alt="welcome" />
          </div>

          {/* Welcome Message */}
          <h3 className="mb-3 pt-10">Welcome {userName},</h3>
          <p className="text-center mb-3 fw-400">Visitor Parking Management Portal</p>
          <p className="text-muted text-center">Select A Car Park To Manage</p>

          {/* Drop-up with Search */}
          <Dropdown className={`w-100 mb-2 dropup ${styles.dropup}`}>
          <Dropdown.Toggle variant="light" className={`w-100 ${styles.dropdownToggle}`}>
                {selectedCarPark || 'Select A Car Park To Manage'}
              </Dropdown.Toggle>

            <Dropdown.Menu className={`w-100 p-3 ${styles.dropdownMenu}`}>
              {/* Search Bar Inside Dropdown */}
              <Form>
                <InputGroup>
                  <Form.Control
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className={styles.formControl}
                  />
                </InputGroup>
              </Form>

              {/* Filtered Car Park Options */}
              {filteredCarParks.length > 0 ? (
                filteredCarParks.map((carPark, index) => (
                  <Dropdown.Item className={styles.dropdownItem} key={index}>{carPark}</Dropdown.Item>
                ))
              ) : (
                <Dropdown.Item>No Car Parks Found</Dropdown.Item>
              )}
            </Dropdown.Menu>
          </Dropdown>

          {/* View Car Park Button */}
          <Button variant="warning" className={`w-100 ${styles.viewCarParkButton}`}>
            View Car Park
          </Button>
        </Col>
      </Container>
    </div>
  );
};

export default WelcomePage;


// // src/components/WelcomePage.js
// import React from 'react';
// import { Button, Col, Container, Dropdown } from 'react-bootstrap';
// import Logo from './Logo'; 
// import styles from './WelcomePage.module.css';
// import welcome from '../assets/welcome.png'

// const WelcomePage = ({ userName, selectedCarPark }) => {
//   return (
//     <div className={`${styles.background} d-flex flex-column flex-root`}>
//       <Container className="d-flex flex-column flex-lg-row justify-content-center mx-auto min-vh-100 align-items-center ">
//         <Col md={8} lg={6} xl={4} className={`${styles.authCard} bg-body d-flex flex-column align-items-center rounded-3 shadow`}>
          
//           {/* Logo */}
//           <Logo />

//           <div className= {`${styles.mainImage}`} >
//           <img src={welcome} alt="" />
//           </div>

//           {/* Welcome Message */}
//           <h3 className=" mb-3 pt-10">Welcome {userName},</h3>
//           <p className=" text-center mb-3 fw-400">Visitor Parking Management Portal</p>
//           <p className="text-muted text-center">Select A Car Park To Manage </p>


//           {/* Dropdown to Select Car Park */}
//           <Dropdown className={`w-100 mb-2 ${styles.dropup}`}>
//             <div className="d-flex justify-content-end">
//             <Dropdown.Toggle variant="light" className={`w-100 ${styles.dropdownToggle}`}>
//               {selectedCarPark || 'Select A Car Park To Manage'}
//             </Dropdown.Toggle>
//             </div>
//             <Dropdown.Menu className="w-100 p-3">
//               {/* You can dynamically map car parks here */}
//               <Dropdown.Item>Light and Co - Available Spaces: 54 - Infringements: 42</Dropdown.Item>
//               <Dropdown.Item>Another Car Park</Dropdown.Item>
//             </Dropdown.Menu>
//           </Dropdown>

//           {/* View Car Park Button */}
//           <Button variant="warning" className={`w-100 ${styles.viewCarParkButton}`}>
//             View Car Park
//           </Button>

//         </Col>
//       </Container>
//     </div>
//   );
// };

// export default WelcomePage;


