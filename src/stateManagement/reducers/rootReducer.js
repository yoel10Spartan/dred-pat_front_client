import { combineReducers } from 'redux';
import { artefactosReducer } from './artefactosReducer';
import { loadingReducer } from './loadingReducer';
import { recordsReducer } from './recordsReducer';
import { unitsReducer } from './unitsReducer';

export const rootReducer = combineReducers({
    artefactos: artefactosReducer,
    records: recordsReducer,
    loading: loadingReducer,
    units: unitsReducer
});