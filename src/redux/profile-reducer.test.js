import profileReducer, {addPostActionCreator, deletePostAC} from "./profile-reducer";
import React from 'react';


let state = {
    postsData: [
        {id: 5, text: "Hello world!", likes: "5", comments: "17"},
        {id: 4,
            text: "It's my first post here. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit molestias pariatur architecto, ea voluptas nulla modi ut nesciunt adipisci error debitis odit velit a alias omnis. Veniam et placeat voluptatum?",
            likes: "9",
            comments: "16"
        },
        {id: 3, text: 'Anybody hear me?', likes: "6", comments: "0"},
        {id: 2, text: 'Anybody hear me??', likes: "13", comments: "1"},
        {id: 1, text: 'London isn`t the Capital of Great Britain - is the Capital of United Kingdoom', likes: "716", comments: "123"}
    ]
}

it('new post should be added', () => {
    // 1. test data
    let action = addPostActionCreator("testing POST");
    // 2.action
    let newState = profileReducer(state, action);
    // 3.expectation
    expect (newState.postsData.length).toBe(6);
})

it('text of post is right', () => {
    // 1. test data
    let action = addPostActionCreator("testing POST");
    // 2.action
    let newState = profileReducer(state, action);
    // 3.expectation
    expect (newState.postsData[0].text).toBe("testing POST");
})

it('correct delete post', () => {
    // 1. test data
    let action = deletePostAC(0);
    // 2.action
    let newState = profileReducer(state, action);
    // 3.expectation
    expect (newState.postsData.length).toBe(5);
})