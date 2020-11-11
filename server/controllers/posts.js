import mongoose from 'mongoose'
import PostMessage from '../models/postMessage.js'

export const getPosts = async (request, response) => {
    try {
        const postMessages = await PostMessage.find()

        response.status(200).json(postMessages)
    } catch (error) {
        response.status(404).json({ message: error.message })
    }
}

export const createPost = async (request, response) => {
    const post = request.body

    const newPost = new PostMessage(post)

    try {
        await newPost.save()

        response.status(201).json(newPost)
    } catch (error) {
        response.status(409).json({ message: error.message })
    }
}

export const updatePost = async (request, response) =>{
    const { id: _id } = request.params
    const post = request.body

    if (!mongoose.Types.ObjectId.isValid(_id)) return response.status(404).send('No post with that id')

    const updatedPost = await PostMessage.findByIdAndUpdate(_id, { ...post, _id }, { new: true })

    response.json(updatedPost)
}