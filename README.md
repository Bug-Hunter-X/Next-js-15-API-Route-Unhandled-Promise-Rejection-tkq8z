# Next.js 15 API Route Unhandled Promise Rejection

This repository demonstrates a common error in Next.js 15 API routes where an unhandled promise rejection within an asynchronous function leads to a silent 500 error without detailed error messages.

## Bug

The `pages/api/data.js` file contains an API route that fetches data asynchronously.  The `fetchData` function simulates an error by throwing an exception.  This unhandled promise rejection is not properly caught, resulting in a generic 500 error.

## Solution

The solution involves using `try...catch` block to handle the potential errors during asynchronous operations in the API route. This will provide better error handling and more informative responses to the client.