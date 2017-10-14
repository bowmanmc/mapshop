import React, { Component } from 'react';
import { connect } from 'react-redux';


class ProjectDetails extends Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div className='ProjectDetails'>
                <label>Title</label>
                { this.props.project.title }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        project: state.project
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchEditProject: (changes) => {
            dispatch(actions.editProject(changes));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectDetails);
