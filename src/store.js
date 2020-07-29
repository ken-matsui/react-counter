import { createStore } from 'redux';
import reducer from './reducer';

export default function configureStore() {
    const STORE = createStore(reducer);
    return STORE;
}