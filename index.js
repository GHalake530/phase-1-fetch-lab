function fetchBooks() {
    // send Fetch request to the Game of Thrones API
  return fetch("https://anapioficeandfire.com/api/books")
    .then((response) => {
      // Check if the response status is OK (200)
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      // Parse the JSON response and return it
      return response.json();
    })
    .then((data) => {
      // Call the renderBooks function with the fetched data
      renderBooks(data);
    })
    .catch((error) => {
      // Handle any errors that occurred during the fetch
      console.error('Error fetching books:', error);
    });
}
  // Implement the renderBooks function to display the data on the web page
  function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach((book) => {
    const h2 = document.createElement('h2');
    h2.textContent = book.name;
    main.appendChild(h2);
  });
}
document.addEventListener('DOMContentLoaded', function () {
  // Call the fetchBooks function when the DOM is loaded
  fetchBooks();
});
