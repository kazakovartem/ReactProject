import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from '../redux/rootReducers';

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
