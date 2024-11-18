// //Part 1
// The cafe’s title is a bit too long. Select the #main-title id element and change the text to “Welcome to the Cozy Cafe”. 
// Let’s also improve our page’s appearance by changing the text-align to center on the title as well.


const mainTitle = document.getElementById('main-title');
mainTitle.style.textAlign = 'center';
mainTitle.textContent = 'Welcome to the Cozy Cafe';



// Part 2
// Select the body element and change the background color to a soothing pastel shade of your choice. 
// (If you can’t think of a color, bisque, lightsteelblue, and pink are good choices.)



const body = document.body;

body.style.backgroundColor = 'bisque'


// Part 3
// Select the <p> element which is meant to hold the quote of the day. 
// Update it’s content so that it displays a quote of your choice (or use this classic: “Life happens, coffee helps.”).


const quoteElement = document.getElementById('quote-of-the-day');
quoteElement.textContent = 'Life Happens, Coffee Helps.!';


// Part 4
// Select all elements with the class highlight-title and change their font-style to italic.
//  Remember, you might need to iterate through a collection of elements.


highlightTitles.forEach(title => {
    title.style.fontStyle = 'italic';
  });
  
const highlightTitles = document.querySelectorAll('.highlight-title');


// Part 5
// Let’s add a new item to the Past Menu Items list. 
// Create a new <li> element, set the text to “Rose Cake”, and append it to the list.


const pastMenuList = document.getElementById('past-menu-items');

const newMenuItem = document.createElement('li');

newMenuItem.textContent = 'Rose Cake';


pastMenuList.appendChild(newMenuItem);



// Part 6
// Select the list of Cafe Specialties and add a list item. 
// Be sure to add content to your newly created <li></li> tags (maybe Karak Tea is on offer now?).

const cafeSpecialtiesList = document.getElementById('cafe-specialties');


const newSpecialtyItem = document.createElement('li');

newSpecialtyItem.textContent = 'Karak Tea';


cafeSpecialtiesList.appendChild(newSpecialtyItem);


// Part 7
// Create a new blog post for a recent cafe event. 
// You will need to create a new <div> element with the class 
// .blog-post, a new <h3> with a relevant event title (e.g., “Karak Tea Tasting Event”), and a new <p> with some text describing the event.
//  Make sure the new post matches the style and structure of the other blog posts. Think carefully about the order of element creation and appending.


const blogsSection = document.getElementById('blogs');


const newBlogPost = document.createElement('div');
newBlogPost.classList.add('blog-post'); 


const eventTitle = document.createElement('h3');
eventTitle.textContent = 'Karak Tea Tasting Event';

const eventDescription = document.createElement('p');
eventDescription.textContent = 'dont miss the kark tea'

newBlogPost.appendChild(eventTitle);
newBlogPost.appendChild(eventDescription);

blogsSection.appendChild(newBlogPost);




