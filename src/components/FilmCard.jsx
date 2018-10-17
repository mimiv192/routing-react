import React from 'react';
import {Link} from 'react-router-dom';



const FilmCard = (props) => {
    let { id, title} = props.film;
    return (
        <div className="col-md-4">
            <div className="card w-75">
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Id:h {id}</h6>
                    
                    <Link to={`/posts/${id}`} className="btn btn-primary">Show Description</Link>
                </div>
            </div>
        </div>
    );
};

export default FilmCard;