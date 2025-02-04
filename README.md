# Movies Search App

## Description

Develop a full-featured movie search application using React that integrates with the OMDB API. 
The application should allow users to search for movies, view detailed information, and manage a list of favorites.

---

## Requirements

1. **Use the OMDB API to fetch movies.**
2. **Implement API service functions** to fetch movie data, including search results and detailed movie information.
3. **Implement a search bar** for users to enter movie titles or keywords.
4. **Display search results** in a grid or list format, showing movie posters, titles, and brief descriptions.
5. **Implement pagination** for handling large sets of search results.
6. **Implement a detailed view for each movie**, including:
   - Larger poster
   - Title
   - Release year
   - Genre
   - Plot summary
   - Ratings
   - Cast
7. **Include a dropdown filter** which filters the movies based on their type. Use the API endpoint for the filter, **but do not use JavaScript's `filter` method** (e.g., `array.filter()`).
8. **Set up React Router** to handle navigation between the search page and the movie details page.
9. **Implement error handling** for API requests and display user-friendly messages when necessary.
   - Handle cases where no results are found or the API returns an error.
10. **Clean, readable, and well-documented code**.
11. **A brief README file explaining the project.**

---

## Tech Stack

- **React.js**: For building the UI and managing application state.
- **React Router**: For handling navigation between different pages.
- **Tailwind CSS**: For styling the application with a utility-first CSS framework.
- **HTML/CSS**: For basic page structure and custom styling.
- **JavaScript**: For the overall functionality and logic.

---

## How to Run the Project Locally

1. Clone this repository:
   git clone https://github.com/AgilaThiruchelvam18/B13-Task7-MovieApp.git

## Navigate into the project directory:

cd B13-Task7-MovieApp
## Install the required dependencies:

npm install
## Start the development server:

npm start

## API Used
**OMDB API**: All movie data is fetched using the OMDB API.
