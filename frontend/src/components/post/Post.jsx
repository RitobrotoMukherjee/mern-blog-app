import React from 'react';
import PropType from 'prop-types';
import './post.css';

export default function Post(details) {

    const { id, image, title, description, categories } = details;

    return (
        <div id={id} className="Post">
            <div className="PostImageHolder">
                <img src={image} alt={title} />
            </div>
            <div className="PostInfo">
                <ul className='PostCategories'>
                    {categories.map(category =>
                        <li className='PostCategoryItems' key={category}>
                            {category}
                        </li>
                    )}
                </ul>
                <h3 className='PostTitle'>{title}</h3>
                <p>{description}</p>
            </div>
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
