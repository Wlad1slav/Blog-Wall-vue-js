// Getting the CSRF value of the token from the meta tag
export const token = document.head.querySelector('meta[name="csrf-token"]');

if (token) {
    // Setting the default header for each request via axios
    axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
} else {
    console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
}
