import React from 'react';
import {
    HashRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import { ArtefactoView } from '../views/Artefactos/ArtefactoView';
import { HomeView } from '../views/Home/HomeView';
import { Header } from '../components/layout/Header'
import { RecordsView } from '../views/Records/RecordsView';
import { MainView } from '../views/Units/MainView';
import { UnitView } from '../views/Units/UnitView';

export const AppRoute = () => {
    return (
        <Router>
            <Header
                itemsHeader={[
                    {id: 25687, title: 'T12 Unidades UXY', url: '/home/T12__Unidades__U__X__Y'},
                    {id: 56278, title: 'T27 Unidad Z', url: '/home/T27__Unidad__Z'}, 
                    {id: 55451, title: 'Profiles Plans TAP 2018', url: '/home/profiles__plans__TAP__2018'}, 
                    {
                        id: 76419, 
                        title: 'Artefactos', 
                        url: '#', 
                        submenu: [
                            {id: 32131, title: 'Cerámica', url: '/artefacto/ceramica'},
                            {id: 43249, title: 'Lítica', url: '/artefacto/litica'}
                        ]
                    },
                    {id: 56234, title: 'Unidades', url: '/unit'},
                ]}
                logo={{title: 'DReD-PAT', url: '/', photo: 'http://logo/arqueologia.jpg'}}
            />

            <div>
                <Routes>
                    <Route exact path='/' element={<HomeView />} />
                    <Route exact path='/artefacto/:item' element={<ArtefactoView />} />
                    <Route exact path='/home/:item' element={<RecordsView />} />
                    <Route exact path='/unit' element={<MainView />} />
                    <Route exact path='/unit/:item' element={<UnitView /> }/>
                    <Route path="*" element={<HomeView />} />
                </Routes>
            </div>
        </Router>
    )
}