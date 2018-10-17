import React from 'react';

class SingleFilm extends React.Component {
    constructor (props) {
        super(props);
        this.state ={
            film: {}
        };
    }

        componentWillMount() {
            fetch (`https://ghibliapi.herokuapp.com/films/${this.props.match.params.id}`)
            .then(res => res.json())
            .then(film => this.setState({film}))
            .catch(e => console.log(`Omfg:${e}`));
        }
    
    render() {
        return (
           <div className="card">
            <p className="card-text"> {this.state.film.description}</p>
            </div>

        );


    }
};

export default SingleFilm;