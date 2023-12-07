import React from 'react';
import Navbar from './Navbar';
import { Container, Typography, Grid } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import docAppoint from '../images/doc_appoint.png';

import circle2 from '../images/circle2.png';

import icon1 from '../images/chat-icon-appoint.png';
import icon2 from '../images/phone-icon-appoint.png';
import icon3 from '../images/video-icon-appoint.png';

import location from '../images/location-icon-contact.png';
import mail from '../images/mail-contact.png';
import tel from '../images/tel-contact.png';


const Appointment = () => {
  return (
    <div style={{ position: 'relative' }}>
      <Navbar />
      <Typography
        style={{
          textAlign: 'center',
          fontFamily: 'Poppins, sans-serif',
          fontWeight: 'bold',
          fontSize: '40px',
          color: 'black',
          marginTop: '50px',
        }}
      >
        Appointments
      </Typography>
      <Typography
        style={{
          textAlign: 'center',
          fontFamily: 'Poppins, sans-serif',
          fontWeight: 400,
          fontSize: '18px',
          color: '#717171',
          marginTop: '10px',
        }}
      >
        Any question or remarks? Just write us a message!
      </Typography>
      <Container
        style={{
          marginTop: '50px',
          backgroundColor: 'white',
          width: '1196px',
          height: '667px',
          borderRadius: '8px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          display: 'flex',
          justifyContent: 'space-between', // Adjusted to move items to the ends
          alignItems: 'center',
          padding: '5px',
          marginBottom: '20px',
        }}
      >
        <Grid container spacing={2} style={{ marginLeft: '30px', width: '50%' }}>
          <Grid item xs={12} md={6}>
            <Grid container spacing={8}>
              <Grid item xs={12}>
                <TextField
                  label="First Name"
                  variant="standard"
                  color="grey"
                  focused
                  sx={{
                    '& label': {
                      fontFamily: 'Poppins, sans-serif',
                    },
                    '& input': {
                      width: '250px',
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Email"
                  variant="standard"
                  color="grey"
                  focused
                  sx={{
                    '& label': {
                      fontFamily: 'Poppins, sans-serif',
                    },
                    '& input': {
                      width: '250px',
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Department"
                  variant="standard"
                  color="grey"
                  focused
                  sx={{
                    '& label': {
                      fontFamily: 'Poppins, sans-serif',
                    },
                    '& input': {
                      width: '250px',
                    },
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid container spacing={8}>
              <Grid item xs={12}>
                <TextField
                  label="Last name"
                  variant="standard"
                  color="grey"
                  focused
                  sx={{
                    '& label': {
                      fontFamily: 'Poppins, sans-serif',
                    },
                    '& input': {
                      width: '250px',
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Phone Number"
                  variant="standard"
                  color="grey"
                  focused
                  sx={{
                    '& label': {
                      fontFamily: 'Poppins, sans-serif',
                    },
                    '& input': {
                      width: '250px',
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Date"
                  variant="standard"
                  type='date'
                  color="grey"
                  focused
                  InputLabelProps={{
                    style: {
                      fontFamily: 'Poppins, sans-serif',
                    },
                  }}
                  InputProps={{
                    style: {
                      width: '250px',
                      fontFamily: 'Poppins, sans-serif',
                    },
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} style={{ marginTop: '40px', textAlign: 'right' }}>
            <Button variant="contained" style={{ textTransform: 'none', fontFamily: 'Poppins, sans-serif', fontWeight: 300, fontSize: '16px', padding: '16px', paddingLeft: '35px', paddingRight: '35px' }}>
              Submit
            </Button>
          </Grid>
        </Grid>
        <Container
          style={{
            backgroundColor: '#1A76D1',
            width: '600px',
            height: '647px',
            borderRadius: '8px',
            marginRight: '5px',
            position: 'relative',
            marginLeft: '50px'
          }}
        >
          <Typography
            style={{
              textAlign: 'start',
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 500,
              fontSize: '28px',
              color: 'white',
              marginTop: '30px',
              marginLeft: '15px',
            }}
          >
            Appointments
          </Typography>
          <img src={docAppoint} alt="docAppointment" style={{ position: 'absolute', width: 'auto', height: 'auto', marginLeft: '15px', marginTop: '30px' }} />
          <Typography style={{ fontFamily: 'Poppins, sans-serif', fontSize: '24px', color: 'white', marginLeft: '170px', marginBottom: '5px', marginTop: '30px' }}>Dr. James Boston</Typography>
          <div style={{ display: 'flex', flexDirection: 'row', marginLeft: '100px' }}>
            <img src={icon1} alt="docAppointment" style={{ width: 'auto', height: 'auto', marginRight: '50px' }} />
            <img src={icon2} alt="docAppointment" style={{ width: 'auto', height: 'auto', marginRight: '30px' }} />
            <img src={icon3} alt="docAppointment" style={{ width: 'auto', height: 'auto', marginRight: '30px' }} />
            <img src={icon1} alt="docAppointment" style={{ width: 'auto', height: 'auto', marginRight: '30px' }} />
          </div>
          <Typography style={{ fontFamily: 'Poppins, sans-serif', fontSize: '20px', color: 'white', marginTop: '90px', fontWeight: 300, marginLeft: '15px' }}>Details</Typography>
          <Typography style={{ fontFamily: 'Poppins, sans-serif', fontSize: '15px', color: 'white', fontWeight: 300, marginLeft: '15px', textIndent: '100px' }}>Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis condimentum ac, vestibulum eu nisl.</Typography>
          <Grid item xs={6} md={2} style={{ marginLeft: '15px' }}>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', paddingTop: '30px' }}>
              <img src={tel} alt='tel' style={{ width: 'auto', height: 'auto', marginRight: '30px' }} />
              <Typography style={{ textAlign: 'initial', fontFamily: 'Montserrat, sans-serif', fontWeight: 300, fontSize: '16px', color: 'white' }}>+1012 3456 789</Typography>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', paddingTop: '10px' }}>
              <img src={mail} alt='mail' style={{ width: 'auto', height: 'auto', marginRight: '30px' }} />
              <Typography style={{ textAlign: 'initial', fontFamily: 'Montserrat, sans-serif', fontWeight: 300, fontSize: '16px', color: 'white' }}>demo@gmail.com</Typography>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'start', paddingTop: '10px', position: 'relative', zIndex: 1 }}>
              <img src={location} alt='location' style={{ width: 'auto', height: 'auto', marginRight: '30px' }} />
              <Typography style={{ textAlign: 'initial', fontFamily: 'Montserrat, sans-serif', fontWeight: 300, fontSize: '16px', color: 'white' }}>132 Dartmouth Street Boston,<br />Massachusetts 02156 United States</Typography>
            </div>
          </Grid>
          <img
            src={circle2}
            alt="circle"
            style={{
              position: 'absolute',
              bottom: '0',
              right: '0',
              width: '40%',
              height: 'auto',
            }}
          />
        </Container>
      </Container>
    </div>
  );
};

export default Appointment;
