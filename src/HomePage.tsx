import React from 'react'
import { Store } from './Store';
import { IPictureProps } from './interfaces';
import { fetchData, toggleSeen, hidePicture } from './Actions';

const EpisodesList = React.lazy<any>(() => import('./PictureList'))

export default function HomePage() {

    const { state, dispatch } = React.useContext(Store)

    React.useEffect(() => {
        state.pictures.length === 0 && fetchData(dispatch)
    })

    const props: IPictureProps = {
        pictures: state.pictures,
        store: { state, dispatch },
        toggleSeen,
        hidePicture,
        seenPictures: state.seenPictures
    }

    return (
        <React.Fragment>
            <React.Suspense fallback={<div>loading...</div>}>
                <section className="picture-layout">
                    {<EpisodesList {...props} />}
                </section>
            </React.Suspense>
        </React.Fragment>
    )
}
