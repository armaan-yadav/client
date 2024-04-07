import React from 'react'
import { Triangle, Vortex } from 'react-loader-spinner'

const Spinner = () => {
    return (
        // <Vortex
        //     visible={true}
        //     height="80"
        //     width="80"
        //     ariaLabel="vortex-loading"
        //     wrapperStyle={{}}
        //     wrapperClass="vortex-wrapper"
        //     colors={['red', '#10B981', 'blue', 'yellow', 'orange', 'purple']}
        // />
        <Triangle
            visible={true}
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="triangle-loading"
            wrapperStyle={{}}
            wrapperClass=""
        />
    )
}

export default Spinner