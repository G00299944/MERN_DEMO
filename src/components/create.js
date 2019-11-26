import React from 'react';
import '../App.css';

class Create extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            Title: '',
            Credits: 0,
            Assessments: []
        }

        this.handleChangedModuleTitle = this.handleChangedModuleTitle.bind(this);
        this.handleChangedModuleCredits = this.handleChangedModuleCredits.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangedModuleTitle(e) {
        this.setState({Title: e.target.value});
    }

    handleChangedModuleCredits(e) {
        this.setState({Credits: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();

        const newSubject = {
            title: this.state.Title,
            credits: this.state.Credits,
            assessments: this.state.Assessments
        }

        console.log(newSubject);

        this.setState({
            Title: '',
            Credits: 0,
            Assessments: []
        })
    }

    render() {
        return (
            <div className="Create">
                <h1>CREATE COMPONENT!</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Subject:</label>
                        <input type="text" className="form-control" value={this.state.Title} onChange={this.handleChangedModuleTitle} />
                    </div>
                    <div className="form-group">
                        <label>Credits:</label>
                        <input type="text" className="form-control" value={this.state.Credits} onChange={this.handleChangedModuleCredits} />
                    </div>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default Create;