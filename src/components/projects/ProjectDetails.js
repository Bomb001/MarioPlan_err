import React from 'react'

const ProjectDetails = (props) => {
    const id = props.match.params.id;
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">
                        Project Title - {id}
                    </span>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus nam illum ratione, ea non, repellendus ex sit delectus perspiciatis sequi earum quam veniam tempore saepe consequuntur rerum possimus necessitatibus odit.</p>
                </div>
                <div className="card-action gret lighten-4 grey-text">
                    <div>Posted by bomb+</div>
                    <div>25th April 2020, 2:30 AM</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails
