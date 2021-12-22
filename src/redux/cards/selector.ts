import { createSelector } from 'reselect';

interface ICard {
    cards: [
        {
            cardId: string;
            header: string;
            description: string;
            boardId: string;
        },
    ];
}

const selectSelf = (state: any) => state;

export const selectCardByBoard = (indexBoard: string, card: any) => {
    const unsafeSelector = createSelector(selectSelf, (state) =>
        state.filter((state: { boardId: string }) => state.boardId === indexBoard),
    );
    console.log(indexBoard, 'unsafeSelector', unsafeSelector(card));
    return unsafeSelector(card);
};
