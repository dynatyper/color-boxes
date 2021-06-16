import React, { Component } from 'react';
import { choice } from './helpers';
import './Box.css'

class Box extends Component {
    static defaultProps = {
        allColors: ['purple', 'magenta', 'violet', 'pink']
    }
    constructor(props) {
        super(props);
        this.state = { color: choice(this.props.allColors) };
        this.handleClick = this.handleClick.bind(this);
    }
    pickColor() {
        let newColor = choice(this.props.allColors);
        this.setState({ color: newColor });
    }
    handleClick() {
        this.pickColor()
    }
    render() {
        return (
            <div className="Box"
                style={{ backgroundColor: this.state.color }}
                onClick={this.handleClick}>
            </div>
        )
    }
}

export default Box;