import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { Pagination } from '../../components/common/Pagination';
import { Table } from '../../components/common/Table';
import { NotFound } from '../../components/layout/NotFound';
import { tableID } from '../../const/tableID';
import { getColumnsTable, getRowsTable } from '../../stateManagement/actions/artefactos';
import { Load } from '../../components/common/Load';
import { useForm } from '../../hook/useForm';
import { range } from '../../utils/helpers';
import { Seeker } from '../../components/common/Seeker';
import { RoutesBanner } from '../../components/layout/RoutesBanner';
import image3 from '../../assets/img/3.jpeg';

const numberItems = 5;
const valid_items = ['litica', 'ceramica'];

export const ArtefactoView = () => {

    const { item } = useParams();
    const dispatch = useDispatch();
    const { load } = useSelector(state => state.loading);
    const { columnsTable, rowsTable, elementsTable } = useSelector(state => state.artefactos);
    const [ formValues, handleInputChange ] = useForm({ search: '' });
    const [ rangeHandler, setRangeHandler ] = useState(range(1, numberItems));
    const [ active, setActive ] = useState(1);
    const itemsShow = useRef(elementsTable);

    const { search } = formValues;
    const search_item = valid_items.includes(item);

    // ================= Table Elements ======================
    useEffect(() => {
        dispatch( getColumnsTable(tableID[item]) );
    }, [dispatch, item]);

    useEffect(() => {
        const operation = active*10;
        dispatch( getRowsTable( tableID[item], (operation-10), operation, search ) );
    }, [dispatch, item, search, active]);

    // ================== Pagination =========================
    useEffect(() => {
        itemsShow.current = Math.ceil(elementsTable/numberItems);
    }, [elementsTable]);

    useEffect(() => {
        setRangeHandler(range(1, numberItems));
        setActive(1);
    }, [item, search]);

    const handleItem = (numID) => {
        setActive(numID);
    }
    
    // ================ Table not available ==================
    if(!search_item){
        return <NotFound />
    }

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column'
        }}>
            <img className='back__img' src={ image3 } alt='backgroun__front' style={{
                height: '800px'
            }}/>
            <RoutesBanner mainElement={{title: 'artefacto', url: '/'}} />
            <Seeker
                handleChange={ handleInputChange }
                value={ search }
                placeholder={ 'Buscar por lote' }
            />
            {load.loadTable && load.loadColumns ? <Load />: <Table itemsHead={columnsTable} itemsBody={rowsTable} />}
            <Pagination 
                numberItems={numberItems}
                rangeItems={[ rangeHandler, setRangeHandler ]}
                activeElement={ active }
                totalElements={ itemsShow }
                handlerFunction={ handleItem }
            />
        </div>
    )
}