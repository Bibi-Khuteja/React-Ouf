import React from 'react'

import { Images } from "../../assets/images/images";

const Profile = () => {
  return (
    <div>
        <div className="d-flex ml-4">
                    <div>
                        <img
                        src={Images.Profile}
                        width="70px"
                        height="70px"
                        alt="no profile img"
                        />
                    </div>
                    <div className="alignItems ml-3">
                        <h6 className="mb-0 name">Joe Smith</h6>
                        <p className="mb-0 name desc">CEO at Flatty</p>
                    </div>
                </div>
                <div>
                    <p className="name para ml-4">
                    Upload a file or share a link to your design, whether it's a Figma file or a
                     live website Upload a file or share a link to your design, whether it's a Figma file or a live website
                    </p>
                </div>
    </div>
  )
}

export default Profile