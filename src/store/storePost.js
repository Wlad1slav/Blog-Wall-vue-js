import {createStore} from 'vuex';

import {config} from "@/utils/loadConfig";

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
            // Loading all posts
            const data = await load();
            commit('setPosts', data); // Installation of all posts
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

            // Get the current date
            const currentDate = new Date().toLocaleString(config.dateFormat.locales, config.dateFormat);

            state.posts.push({
                content: newPost, // The content of the new post
                date: currentDate // Date and time of post creation
            });

            await storePost.dispatch('callSort'); // call sortPosts action
        },

        async removePost(state, postIndex) {
            // Remove a certain post
            state.posts.splice(postIndex, 1);
        },

        async sortPosts(state) {
            state.posts = [...state.posts].sort(function(a, b) {
                // Convert the date strings to Date objects
                let dateA = new Date(a.date);
                let dateB = new Date(b.date);

                // Subtract the dates to get a value that is either negative, positive, or zero
                return dateB - dateA;
            });
        }
    },

});

storePost.dispatch('fetchPosts'); // Installation of all posts

export default storePost;
