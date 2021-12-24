import React from 'react'
import load from '../../assets/img/load.svg';

export const Load = () => {
    return (
        <div style={{
            width: '100%',
            height: '50vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: '1000000000000000000000'
        }}>
            <img src={load} alt='load' />
            <p>Cargando...</p>
        </div>
    )
}