import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button } from '../../styles/genericStyles';
import { deleteUnitData } from '../../stateManagement/actions/unit';
import image2 from '../../assets/img/2.jpeg';

export const MainView = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch( deleteUnitData() );
    }, [])

    return (
        <div className='unit__container'>
            <img className='back__img' src={ image2 } alt='backgroun__front' />
            <p className='title__unit'>Consulta general de unidades</p>
            <div className='container__data'>
                <div className='data__units'>
                    <Button 
                        as={Link} 
                        to='/unit/d98sa' 
                        style={buttonStyles}
                    >
                        T12 Unidades UXY
                    </Button>
                    <Button 
                        as={Link} 
                        to='/unit/vfdv8' 
                        style={buttonStyles}
                    >
                        T27 Unidades Z
                    </Button>
                </div>
                <div className='data__image'>
                    <iframe 
                        width="560" 
                        height="315" 
                        src="https://www.youtube.com/embed/fg9ns4Z0YNY" 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen>    
                    </iframe>
                </div>
            </div>
        </div>
    )
}

const buttonStyles = {
    width: '150px',
    margin: '10px',
    textDecoration: 'none',
    textAlign: 'center'
}