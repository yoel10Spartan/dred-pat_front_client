import React from 'react';
import { Button } from '../../styles/genericStyles';
import img_front from '../../assets/img/3415.jpg'
import { Link } from 'react-router-dom';

export const HomeView = () => {
    return (
        <div style={containerStyle}>
            <img className='back__img' src={ img_front } alt='backgroun__front' />
            <p style={ titleStyle }>Tutor: Dr. Lane F. Fargher</p>
            <p style={titleStyle}>
                {'"Proyecto Arqueológico de Tlaxcallan"'}
            </p>
            <Button as={Link} to='/unit' style={{
                zIndex: '100000',
                background: '#DC7633',
                textAlign: 'center',
                textDecoration: 'none'
            }}>Ingresar</Button>
        </div>
    )
}

const titleStyle = {
    fontFamily: 'Rubik, sans-serif',
    fontSize: '40px',
    userSelect: 'none',
    letterSpacing: '2.5px',
    wordSpacing: '4px',
    zIndex: '1000000',
    color: '#fff',
    fontWeight: '800',
    textAlign: 'center'
}

const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '80vh'
}