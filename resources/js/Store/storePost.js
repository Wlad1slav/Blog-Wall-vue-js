import {createStore} from 'vuex';
import axios from 'axios';

import {config} from "@/Utils/loadConfig";

async function load() {
    // Gets all posts from the posts.json file
    const response = await fetch('posts.json');
    return await response.json();
}

const storePost = createStore({
    state: {
        posts: [] // Initially an empty array
    },
    actions: {
        async fetchPosts({ commit }) {

            try {
                // Loading all posts via API
                const response = await axios.get('/api/posts');
                const data = await response.data;
                commit('setPosts', data); // Installation of all posts
            } catch (error) {
                console.error(error);
            }

        },

        callSort({ commit }) {
            // Action to call sorting of all posts
            commit('sortPosts');
        }
    },
    mutations: {
        async setPosts(state, posts) {
            // Update variable with posts
            // Posts before that are filtered by the time of posting
            state.posts = posts;
            await storePost.dispatch('callSort'); // call sortPosts action
        },

        async addPost(state, newPost) {
            // Add new post

            try {
                // Post creation via API
                await axios.post('/api/post/create', {
                    postContent: newPost
                });
            } catch (error) {
                console.error(error);
            }

            // Get the current date
            const currentDate = new Date().toLocaleString(config.dateFormat.locales, config.dateFormat);

            state.posts.push({
                content: newPost, // The content of the new post
                created_at: currentDate // Date and time of post creation
            });

            await storePost.dispatch('callSort'); // call sortPosts action
        },

        async removePost(state, postId) {
            // Remove a certain post
            try {
                // Post deletion via API
                await axios.post('/api/post/delete', {
                    postId: postId
                });

                // Finding and deleting a post locally
                for (let i = 0; i < state.posts.length; i++) {
                    if (state.posts[i]['id'] === postId) {
                        state.posts.splice(i, 1);
                        break;
                    }
                }

            } catch (error) {
                console.error(error);
            }
        },

        async sortPosts(state) {
            state.posts = [...state.posts].sort(function(a, b) {
                // Convert the date strings to Date objects
                let dateA = new Date(a.created_at);
                let dateB = new Date(b.created_at);

                // Subtract the dates to get a value that is either negative, positive, or zero
                return dateB - dateA;
            });
        }
    },

});

storePost.dispatch('fetchPosts'); // Installation of all posts

export default storePost;
