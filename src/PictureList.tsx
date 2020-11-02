import React from 'react'
import { IPicture } from './interfaces'

export default function PictureList(props: any): Array<JSX.Element> {

    const { pictures, toggleSeen, hidePicture, seenPictures, store } = props
    const { state, dispatch } = store

    return pictures.map((picture: IPicture) => {
        return (
            <section key={picture.id} className="picture-box">
                <section className="picture-buttons">
                    <button type="button" onClick={() => toggleSeen(state, dispatch, picture)} className="picture-button-toggle">
                        {seenPictures.find((seen: IPicture) => seen.id === picture.id) ? 'SEEN' : 'UNSEEN'}
                    </button>
                    <button type="button" onClick={() => hidePicture(state, dispatch, picture)} className="picture-button-hide">
                        HIDE
                </button>
                </section>
                <img src={picture.thumbnailUrls.imedia_300} alt={`${picture.title}`} className="picture-thumbnail" />
                <section className="picture-metadata">
                    <div><b>Title:</b> {picture.title} </div>
                    <div><b>Author:</b> {picture.authorScreenName} </div>
                    <div><b>Published:</b> {picture.publishedOn} </div>
                    <div><b>Description:</b>  {picture.description} </div>
                </section>
            </section>
        )
    })
}