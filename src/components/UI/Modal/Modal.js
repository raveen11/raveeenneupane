import React, { Component } from 'react';

class Modal extends Component {
    render() {
        return (
            <div className="Modal" >
                {this.props.children}
            </div>
        );
    }
}

export default Modal;