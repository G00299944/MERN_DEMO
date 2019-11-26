import React from 'react';
import '../App.css';
import SubjectItem from '../components/SubjectItem';


class Subjects extends React.Component {
    
    render() {
        return this.props.mySubjects.map((subject) => {
            return <SubjectItem subject={subject}></SubjectItem>
        })
    }
}

export default Subjects