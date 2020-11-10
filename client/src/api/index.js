import axios from 'axios'

export const fetchPosts = () => axios.get('http://localhost:5000/posts')