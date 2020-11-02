import React from 'react'
import { IAction, IState } from './interfaces';

const initialState: IState = {
    pictures: [],
    seenPictures: []
}

export const Store = React.createContext<IState | any>(initialState)

function reducer(state: IState, action: IAction): IState {
    switch (action.type) {
        case 'FETCH_DATA':
            return { ...state, pictures: action.payload }
        case 'ADD_SEEN':
            return { ...state, seenPictures: [...state.seenPictures, action.payload] }
        case 'REMOVE_SEEN':
            return { ...state, seenPictures: action.payload }
        case 'HIDE':
            return { ...state, pictures: action.payload }
        default:
            return state
    }
}

export function StoreProvider({ children }: JSX.ElementChildrenAttribute): JSX.Element {
    const [state, dispatch] = React.useReducer(reducer, initialState)
    return <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
}