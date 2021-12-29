import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions } from '../state/ducks/ducks';

export const useActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators({ ...actions.cards, ...actions.boards, ...actions.comments, ...actions.user }, dispatch);
};
