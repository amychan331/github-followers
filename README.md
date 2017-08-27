# Github Followers <small>[Hosted at Heroku](https://github-followers-amy.herokuapp.com/)</small>
## Description
How do I use Github's API to build a quality web app that provided a easy to view followers data of a searched account in 5 days? That is the question encountered when I got Shipt's challenge to build a platform that search a Github name and output the account's follower image, with a "Load More" buttom will appear if user would like to see more.

## Technical
Main library chosen was React installed with create-react-app. Most of the code that I created are in './src'. React was chosen because the app's UI is generated from external API, so it will be generated views dynamically from user interaction, often resulting in numerouse image loading. As a UI library known for efficient update due to its virtual DOM feature, React is particularly suited for those purposes.

In addition, I wanted its build-in testing feature, since I only recently learned Mocha and have not yet implemented it in a project. Here, I went with build-in Jest to reduce configuration time. I also installed enzyme and sino, though sino was later remove because I ran out of time. Sino is definitely something I hope to touch on if there is more time.

To ensure responsiveness, I went with mobile-first methology where I started with the smallest  screen. Image loading speed is another concern. Examining Github's thumbnails, I realize I can reduce resolution and size by query.

## Architecture
Part of the reason I chose React was because it was component based, so it was easy to keep the code organize. I organize by function, placing files that display static codes in "components" and file that focus in content generation such as API calls in "containers".

## More
[Profile](http://craftplustech.com)
[Resume](https://drive.google.com/file/d/0B1KQv3Seffs9YUlmTVE1cEJyM0U/view?usp=sharing)
Code listed in resume:
* [Bubblewrap](https://github.com/amychan331/bubblewrap/public_html)
* [NextBus Compare](https://github.com/amychan331/nextbus-compare)
* [Safe Route](https://github.com/amychan331/safe-route/db/)

## Installation
```
git clone git@github.com:amychan331/github-followers.git
npm start
```