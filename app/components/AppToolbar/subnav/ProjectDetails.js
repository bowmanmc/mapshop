import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../../state/project/actions';
import ExportButton from '../ExportButton';


class ProjectDetails extends Component {

    constructor(props, context) {
        super(props, context);

        this.onFieldChange = this.onFieldChange.bind(this);
    }

    onFieldChange(evt) {
        let changes = {};
        changes[evt.target.name] = evt.target.value;
        this.props.dispatchEditProject(changes);
    }

    render() {
        return (
            <div className="ProjectDetails">
                <div className="ProjectDetails__inputs">
                    <div className="FormInput">
                        <label>Map Title</label>
                        <input onChange={this.onFieldChange}
                            type="text"
                            name="title"
                            placeholder="Map Title"
                            value={this.props.project.title} />
                    </div>

                    <div className="FormInput">
                        <label>Author</label>
                        <input onChange={this.onFieldChange}
                            type="text"
                            name="author"
                            placeholder="Author"
                            value={this.props.project.author} />
                    </div>

                    <div className="FormInput">
                        <label>Email Address</label>
                        <input onChange={this.onFieldChange}
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            value={this.props.project.email} />
                    </div>

                    <div className="FormInput">
                        <label>Company</label>
                        <input onChange={this.onFieldChange}
                            type="text"
                            name="company"
                            placeholder="Company"
                            value={this.props.project.company} />
                    </div>
                </div>
                <div className="ProjectDetails__export">
                    <ExportButton />
                </div>
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
