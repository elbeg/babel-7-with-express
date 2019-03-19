// import {Request, Response, NextFunction} from "express";

function HomePage(request, response, next) {
    response.send('Home Router!');
}

function PostsPage(request, response, next) {
    response.send('Posts Router!');
}

function SinglePostPage(request, response, nex) {
    response.send('Single Posts Router!');
}

function SavePostAction(request, response, nex) {
    response.send('Save Posts Router!');
}

export const AppRoutes = [
    {
        path: "/",
        method: "get",
        action: HomePage
    },
    {
        path: "/posts",
        method: "get",
        action: PostsPage
    },
    {
        path: "/posts/:id",
        method: "get",
        action: SinglePostPage
    },
    {
        path: "/posts",
        method: "post",
        action: SavePostAction
    }
]
