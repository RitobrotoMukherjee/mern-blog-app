import React from 'react';
import Post from '../post/Post';
import './posts.css';

export default function Posts () {
    const POSTS = [
        {
            id: 1,
            image: "https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            title: "Harum natus, ab pariatur blanditiis",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum natus, ab pariatur blanditiis voluptatem quo omnis cum tenetur, eaque magnam sit aliquid dolorem reiciendis! Deleniti accusamus quo odit cupiditate amet.",
            categories: ["Computer Science", "Data Science", "DevOps"],
        },
        {
            id: 2,
            image: "https://images.pexels.com/photos/4916559/pexels-photo-4916559.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            title: "Harum natus, ab pariatur blanditiis",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum natus, ab pariatur blanditiis voluptatem quo omnis cum tenetur, eaque magnam sit aliquid dolorem reiciendis! Deleniti accusamus quo odit cupiditate amet.",
            categories: ["Computer Science", "Data Science", "DevOps"],
        },
        {
            id: 3,
            image: "https://images.pexels.com/photos/5490778/pexels-photo-5490778.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            title: "Harum natus, ab pariatur blanditiis",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum natus, ab pariatur blanditiis voluptatem quo omnis cum tenetur, eaque magnam sit aliquid dolorem reiciendis! Deleniti accusamus quo odit cupiditate amet.",
            categories: ["Computer Science", "Data Science", "DevOps"],
        },
        {
            id: 4,
            image: "https://images.pexels.com/photos/6711867/pexels-photo-6711867.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            title: "Harum natus, ab pariatur blanditiis",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum natus, ab pariatur blanditiis voluptatem quo omnis cum tenetur, eaque magnam sit aliquid dolorem reiciendis! Deleniti accusamus quo odit cupiditate amet.",
            categories: ["Computer Science", "Data Science", "DevOps"],
        },
        {
            id: 5,
            image: "https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            title: "Harum natus, ab pariatur blanditiis",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum natus, ab pariatur blanditiis voluptatem quo omnis cum tenetur, eaque magnam sit aliquid dolorem reiciendis! Deleniti accusamus quo odit cupiditate amet.",
            categories: ["Computer Science", "Data Science", "DevOps"],
        },
        {
            id: 6,
            image: "https://images.pexels.com/photos/6758029/pexels-photo-6758029.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            title: "Harum natus, ab pariatur blanditiis",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum natus, ab pariatur blanditiis voluptatem quo omnis cum tenetur, eaque magnam sit aliquid dolorem reiciendis! Deleniti accusamus quo odit cupiditate amet.",
            categories: ["Computer Science", "Data Science", "DevOps"],
        }
    ];

    return (
        <div className="Posts">
            {POSTS.map(post => 
                <Post key={post.id} id={post.id} title={post.title} description={post.description}
                       image={post.image} categories={post.categories}
                />
            )}
        </div>
    )
}