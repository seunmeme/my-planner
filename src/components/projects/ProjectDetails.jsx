import React from 'react';

const ProjectDetails = (props) => {
    const id = props.match.params.id;

    return ( 
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title - {id}</span>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo, illo! Repellendus pariatur doloremque cupiditate inventore vel tenetur id qui? Numquam totam et necessitatibus dolorem ipsum enim eligendi ab consequatur temporibus?</p>
                </div>
                <div className="card-action grey-lighten-4 grey-text">
                    <div>Posted by Seun Odewale</div>
                    <div>6th April, 5:04pm</div>
                </div>
            </div>
        </div>
     );
}
 
export default ProjectDetails;