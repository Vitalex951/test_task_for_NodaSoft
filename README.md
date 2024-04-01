# Project Overview

This project focuses on optimizing performance and enhancing user experience by implementing various techniques in React development.

## Components Decomposition
The project starts with thorough component decomposition, where each component is broken down into separate files. Additionally, memoization is applied to components to minimize unnecessary re-renders.

## Function Optimization
To ensure optimal performance, `useCallback` is employed for functions, preserving their references during re-renders. This helps in avoiding unnecessary function re-creations.

## Data Caching
A custom function for data caching is introduced, storing user data in the local storage based on the user's ID. Upon subsequent requests, the data is retrieved from the cache, as evidenced in the console logs.

## Throttling Requests
To mitigate excessive request spamming or local storage accesses, a custom hook called `useThrottle` is implemented. This prevents multiple rapid requests or accesses when rapidly clicking the button to fetch a random user.

## Address Typing
An interface for user address is added to enhance type safety and improve code readability.

## Loader and Error Handling
To provide a seamless user experience, a loader is displayed during request processing, and error handling is implemented to gracefully handle any errors that may occur.
