export enum userType {
    ADD_USER = 'ADD_USER',
    SHOW_USER = 'SHOW_USER',
}

export interface stateType {
    userName: string;
}

interface nameUserAdd {
    type: userType.ADD_USER;
    payload: string;
}

interface nameUserShow {
    type: userType.SHOW_USER;
    payload: string;
}

export type actionTypes = nameUserAdd | nameUserShow;
