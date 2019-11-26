import React from 'react';
import '../App.css';

import Assessments from '../components/assessments';

class SubjectItem extends React.Component {

    render() {
        return (
            <div>
                {/* <h1>SUBJECT_ITEM COMPONENT</h1> */}
                <p>{this.props.subject.Title}</p>
                <Assessments myAssessments={this.props.subject.Assessments}></Assessments>
                <hr></hr>
            </div>
            
        );
    }



}

export default SubjectItem;