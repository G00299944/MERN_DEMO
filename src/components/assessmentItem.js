import React from 'react';
import '../App.css';

class AssessmentItem extends React.Component {
 
    render() {
        return (

            <div>
                {/* <h2>ASSESSMENT_ITEM COMPONENT</h2> */}
                <p>{this.props.asssessment.Title}</p>
            </div>
        );
    }
}

export default AssessmentItem;