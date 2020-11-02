import { IAction, IPicture, IState } from './interfaces';

export const fetchData = async (dispatch: any) => {
    const URL = 'https://api-dev.insidetrak.interactive1.com/homepage/get-latest-images'
    const data = await fetch(URL)
    const dataJSON = await data.json();
    return dispatch({
        type: 'FETCH_DATA',
        payload: dataJSON.data
    })
}

export const toggleSeen = (state: IState, dispatch: any, picture: IPicture | any): IAction => {

    const pictureInSeen = state.seenPictures.includes(picture)

    let dispatchObj = {
        type: 'ADD_SEEN',
        payload: picture
    }

    if (pictureInSeen) {
        const seenWithoutPicture = state.seenPictures.filter((seen: IPicture) => seen.id !== picture.id)
        console.log(seenWithoutPicture)
        dispatchObj = {
            type: 'REMOVE_SEEN',
            payload: seenWithoutPicture
        }
    }

    return dispatch(dispatchObj)

}

export const hidePicture = (state: IState, dispatch: any, picture: IPicture | any): IAction => {

    const picturesWithoutPicture = state.pictures.filter((epi: IPicture) => epi.id !== picture.id)

    let dispatchObj = {
        type: 'HIDE',
        payload: picturesWithoutPicture
    }

    return dispatch(dispatchObj)

}