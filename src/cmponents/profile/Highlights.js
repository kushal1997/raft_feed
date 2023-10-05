import React, { Fragment } from 'react'
import twitter from "../../assets/images/twitter.png"
const Highlights = () => {
  return (
    <Fragment>
      <div className="flex flex-row content-center mb-8 space-x-2 md:space-x-10 text-sm font-semibold w-full overflow-auto">
        <div className="w-30">
          <a href="">
            <div className="border p-1 rounded-full">
              <img
                width="80"
                src={twitter}
                alt="twitter-circled"
                className='rounded-full'
              />
            </div>
            <div className="text-center overflow-hidden text-ellipsis">
              Twitter
            </div>
          </a>
        </div>
        <div className="w-30">
          <a href="">
            <div className="border p-1 rounded-full">
              <img
                width="80"
                src={twitter}
                alt="twitter-circled"
                className='rounded-full'
              />
            </div>
            <div className="text-center overflow-hidden text-ellipsis">
              Twitter
            </div>
          </a>
        </div>
        <div className="w-30">
          <a href="">
            <div className="border p-1 rounded-full">
              <img
                width="80"
                src={twitter}
                alt="twitter-circled"
                className='rounded-full'
              />
            </div>
            <div className="text-center overflow-hidden text-ellipsis">
              Twitter
            </div>
          </a>
        </div>
      </div>
    </Fragment>
  )
}

export default Highlights