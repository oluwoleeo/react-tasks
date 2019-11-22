import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import Checkbox from '@material-ui/core/Checkbox';

class Filter extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <div className="checkboxes">
            <Checkbox onChange={(event) => this.props.onNameClick(event)}/>
            <label>Name</label>
            <Checkbox onChange={(event) => this.props.onAgeClick(event)}/>
            <label>Age</label>
        </div>
        );
    }
}

export default Filter;