import React from 'react';
import PropType from 'prop-types';
import './post.css';

export default function Post (details) {

    const { id, image, title, description, categories } = details;

    return (
        <div id={id} className="Post">
            <h6>{title}</h6>
            <img src={image} />
            <p>{description}</p>
            <ul>
                {categories.map(category => 
                    <li key={category}>
                        {category}
                    </li>
                )}
            </ul>
        </div>
    );
}

Post.propTypes = {
    id: PropType.number.isRequired,
    image: PropType.string.isRequired,
    title: PropType.string.isRequired,
    description: PropType.string.isRequired,
    categories: PropType.arrayOf(PropType.string).isRequired
}
