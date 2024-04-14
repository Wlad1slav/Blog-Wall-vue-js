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
        },

        async reactionQuery(state, options) {
            try {
                // Post liking via API
                const reactions = await axios.post('/api/post/react', {
                    postId: options.postId,
                    model: options.model
                });

                return await reactions.data;
            } catch (error) {
                console.error(error);
                return null;
            }
        },

        async getReactions(state, postId) {
            try {
                // Getting post reactions via API
                const reactions = await axios.get(`/api/post/reactions?postId=${postId}`);

                return await reactions.data;
            } catch (error) {
                console.error(error);
                return { likes: 0, dislikes: 0 };
            }
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
                let response = await axios.post('/api/post/create', {
                    postContent: newPost
                });

                // Back-end returns the created post after validation
                state.posts.push(response.data);

                await storePost.dispatch('callSort'); // call sortPosts action
            } catch (error) {
                console.error(error);
            }
        },

        async removePost(state, postId) {
            // Remove a certain post
            try {
                // Post deletion via API
                await axios.post('/api/post/delete', {
                    postId: postId
                });

                // Finding and deleting a post locally
                const postIndex = state.posts.findIndex(post => post.id === postId);
                state.posts.splice(postIndex, 1);

            } catch (error) {
                console.error(error);
            }
        },

        async pinPost(state, postId) {
            // Unpins all posts so that only one post can be pinned

            try {
                // Post pinning via API
                await axios.post('/api/post/pin', {
                    postId: postId
                });

                // Pinning visually
                const postIndex = state.posts.findIndex(post => post.id === postId);

                // Unpin past pinned post
                for (let i = 0; i < state.posts.length; i++) {
                    if (i !== postIndex) {
                        state.posts[i]['is_pinned'] = 0;
                    }
                }

                // Pin or unpin certain post
                state.posts[postIndex]['is_pinned'] =
                    state.posts[postIndex]['is_pinned'] === 1 ? 0 : 1;

                // Move a pinned post to the first index
                if (state.posts[postIndex]['is_pinned']) {
                    let pinnedPost = state.posts[postIndex];
                    state.posts.splice(postIndex, 1); // Removes an element from its current position
                    state.posts.unshift(pinnedPost); // Inserting an element at the beginning of an array
                } else {
                    await storePost.dispatch('callSort'); // call sortPosts action
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

            for (let i = 0; i < state.posts.length; i++) {
                if (state.posts[i]['is_pinned']) {
                    let pinnedPost = state.posts[i];
                    state.posts.splice(i, 1); // Removes an element from its current position
                    state.posts.unshift(pinnedPost); // Inserting an element at the beginning of an array
                }
            }
        },
    },

});

storePost.dispatch('fetchPosts'); // Installation of all posts

export default storePost;
