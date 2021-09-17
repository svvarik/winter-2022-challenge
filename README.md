This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Shopify Winter 2022 Challenge

The challenge was to build a site using one of NASA's Open APIs to gather and display images. 

## Base Requirements Met
- Users are able to like and unlike pictures
- Pictures show a title, date captured, and a small description

## Additional Features
- "See More"
    - Users can click see more to see an expanded description of the image.
- Infinite scroll
    - Users are able to scroll from a selected date (August 02) all the way to today. A "You've caught up" sign is displayed on the bottom.
- For UI Features, I made heavy use of React Material UI's library, allowing me to quickly implement a user-friendly heart button to like images, and a loading indicator

## Future Considerations
- Improved UI 
    - I would improve the color scheme and make things a little more user friendly
- Lazy loading image
    - I would want images to load only as they come within the viewport. This would reduce the number of images loaded by the browser in total, hopefully speeding things up 
- Code improvements
    - I would use Redux to separate state from the ImageGrid component. This would reduce the component size and make things more manageable.
    - I would separate out functions into respective files / directories. This would be to make things more modular and also improve project readability.
