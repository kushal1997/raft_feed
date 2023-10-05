import React, { Fragment } from 'react'
import Stories from '../cmponents/Stories'
import BasicProfile from '../cmponents/BasicProfile'

const Home = () => {
    return (
        <Fragment>
            <div className="container pt-8 max-w-5xl">
                <div className="grid grid-cols-3">
                    <div className="md:px-12 lg:px-0 col-span-3 lg:col-span-2">
                        <Stories />
                    </div>
                    <div className="col-span-1 hidden lg:block">
                        <BasicProfile/>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Home