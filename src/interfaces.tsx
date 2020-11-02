export type Dispatch = React.Dispatch<IAction>

export interface IState {
    pictures: Array<IPicture>
    seenPictures: Array<IPicture>
}

export interface IAction {
    type: string,
    payload: Array<IPicture> | any
}

export interface IPicture {
    allowComments: any,
    author: any,
    authorId: string,
    authorScreenName: string,
    bookmark: false,
    categories: any,
    contentBucket: any,
    contentCounter: any,
    contentMimeType: string,
    contentUrls: any,
    createdOn: string,
    customThumbnailUrls: any,
    description: string,
    errors: any,
    groupNewProjectMembers: any,
    id: string,
    like: boolean,
    modifiedOn: string,
    positionByAuthor: number,
    positionByCategory: number,
    profilePictureUrls: any,
    projectMembers: any,
    published: boolean,
    publishedOn: string,
    tags: Array<string>,
    thumbnailUrls: { imedia_300: string, imedia_1024: string, imedia_2048: string },
    title: string,
    type: string,
    userCounter: any,
    visibleTo: string
}

export interface IPictureProps {
    pictures: Array<IPicture>,
    store: { state: IState, dispatch: Dispatch },
    toggleSeen: (state: IState, dispatch: Dispatch, picture: IPicture) => IAction,
    hidePicture: (state: IState, dispatch: Dispatch, picture: IPicture) => IAction,
    seenPictures: Array<IPicture>
}