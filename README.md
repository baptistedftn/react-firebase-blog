# Searching about maintainer, please open an issue to help

~~~
~~~


# Firebase Blog for React.js

Blog component powered by Firebase realtime database
Markdown supported

## Install

```sh
npm i react-firebase-blog
```
or
```sh
yarn add react-firebase-blog
```


## How to use

```jsx
import FireBlog from 'react-firebase-blog';

const config = {

  // Firebase Config
  
  apiKey: "API_KEY",
  authDomain: "PROJECT_ID.firebaseapp.com",
  databaseURL: "https://PROJECT_ID.firebaseio.com",
  projectId: "PROJECT_ID",
  storageBucket: "PROJECT_ID.appspot.com",
  messagingSenderId: "SENDER_ID",
  appId: "APP_ID",
  measurementId: "G-MEASUREMENT_ID",

}

render() {
  return (
    <FireBlog config={config} />   
  );
}
```
### Content of the database
```json
{
  "posts" : {
    "-M8tXyXVeD81ks4f4XtF" : {
      "body" : "Body of the *First Post*",
      "date_edited" : 1591177117017,
      "slug_name" : "first-post",
      "title" : "First Post",
      "user" : "John Doe",
      "user_pic" : "https://picsum.photos/200/300"
    },
    "-M8tXyXVeD81ks4f4XtF" : {
      "body" : "Body of the *Second Post*",
      "date_edited" : 1591177117017,
      "slug_name" : "second-post",
      "title" : "Second Post",
      "user" : "John Doe Jr",
      "user_pic" : "https://picsum.photos/200/300"
    },
  }
}
```

## Copyright
&copy; *baptistedftn* https://github.com/baptistedftn

[License](https://baptistedftn.mit-license.org/ "license")

