import React from 'react';
import '../App.css';
import Subjects from './subjects';

class Read extends React.Component {

    state = {
        
        Subjects: [{
            "Title": "Operating Systems",
            "Credits": 5,
            "Assessments": [
                {"Title": "Test", "Weight": 0.2, "Grade": 0},
                {"Title": "Exam", "Weight": 0.6, "Grade": 0},
                {"Title": "Project", "Weight": 0.2, "Grade": 0},
            ]
        },
        {
            "Title": "Object Oriented Programming",
            "Credits": 5,
            "Assessments": [
                {"Title": "Test 1", "Weight": 0.25, "Grade": 0},
                {"Title": "Test 2", "Weight": 0.25, "Grade": 0},
                {"Title": "Project", "Weight": 0.5, "Grade": 0},
            ]
        },
        {
            "Title": "Data Representation & Querying",
            "Credits": 5,
            "Assessments": [
                {"Title": "Project", "Weight": 0.5, "Grade": 0},
                {"Title": "Exam", "Weight": 0.5, "Grade": 0}
            ]
        }]
    }
    



    render() {
        return (
            <div className="Read">
                {/* <h1>READ COMPONENT</h1> */}
                <Subjects mySubjects={this.state.Subjects}></Subjects>
            </div>
        );
    }
}

export default Read;