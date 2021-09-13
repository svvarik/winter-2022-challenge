This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Shopify Winter 2022 Challenge

The challenge was to build a site using one of NASA's Open APIs to gather and display images. 

## Base Requirements Met
- Users are able to like and unlike pictures
- Pictures show a title, date captured, and a small description

## Additional Features
- Users' likes will be saved even upon refreshing the page
    - Since this is a purely front-end app, I ended up using the browser's localstorage feature to manage this
- For UI Features, I made heavy use of React Material UI's library, allowing me to quickly implement a user-friendly heart button to like images, and a loading indicator

## Future Considerations
- Loading time - Since the loading time is considerable, I would likely use pagination to split up the API calls. While the specific API I used doesn't have pagination as a feature, I could call ranges of dates to get a certain number of images per page
- Lazy loading images - The other feature I would implement is loading images only as they come within the viewport. This would reduce the number of images loaded by the browser in total, hopefully speeding things up
