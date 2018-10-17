import React from "react";
import FilmCard from "./FilmCard";

class Films extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            films: []
        };
    }

    componentWillMount() {
        fetch ('https://ghibliapi.herokuapp.com/films')
        .then(res => res.json())
        .then(films => this.setState({films }))
        .catch(e => console.log(`Messed up: ${e}`));
    }
    renderFilms()   {
    return this.state.films.map(film => {
        return <FilmCard film={film} key={film.id} />
        });
    }




    render () {
    return(
        <div className="container-fluid">
            <div className="row">
        {this.renderFilms()}
            </div>
        </div>
        );
    }
};

export default Films;