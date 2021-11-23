import React, { Component } from 'react'
import spinnerLoader from './spinner.gif'
export class Spinner extends Component {
    render() {
        return (
            <div className="text-center ">
                <img src={spinnerLoader} alt="spinnerLoader"/>
            </div>
        )
    }
}

export default Spinner