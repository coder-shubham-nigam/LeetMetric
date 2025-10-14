# LeetMetric

LeetMetric is a clean and simple web application that allows users to instantly fetch and visualize their LeetCode problem-solving statistics. 

By entering a LeetCode username, the application communicates with a public API to retrieve the user's data and presents it in an easy-to-understand dashboard. This provides coders with a quick snapshot of their progress and standing on the platform.

## Key Features
User Stat Lookup: Fetches real-time data for any valid LeetCode username.

Visual Progress Bars: Displays the number of solved problems versus the total available for each difficulty (Easy, Medium, Hard) using animated circular progress bars.

Detailed Stats Card: Shows key metrics including total problems solved, overall acceptance rate, global ranking, and reputation points.

Responsive Design: The interface is clean, modern, and functional on different screen sizes.

Dynamic UI: The stats container appears only after a successful search, and the application provides clear feedback for loading states and user-not-found errors.

## Technology Stack
HTML: Provides the fundamental structure and content of the web page.

CSS: Styles the application with a modern dark theme, creates the layout, and powers the conic-gradient animations for the circular progress bars.

JavaScript: Handles all the application logic, including:

Capturing user input.

Making async/await API calls with fetch to retrieve user data.

Dynamically updating the HTML (DOM manipulation) to display the fetched statistics.

Calculating percentages and updating CSS variables to animate the progress circles.
