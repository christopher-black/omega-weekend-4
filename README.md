# OMEGA WEEKEND 4 CHALLENGE
The Gallery of My Life and Glacier National Park

## TODO
- [x] Create project folder, init and add .gitignore
- [x] Get our index page to show up and folder structure
- [x] Create static HTML
- [x] Add bootstrap to make responsive
- [x] Add Angular controller
- [x] Replace HTML with ng-repeat and ng-src
- [x] Swap image with the description
- [ ] Add like button and functionality (views)

**Stretch**
- [ ] Heroku
- [ ] Server side routes ($http)

## Initial setup

**In Terminal**

1. Create a directory for your project
2. `npm init`
3. `npm install express body-parser angular pg bootstrap --save`

**In Atom**

4. Folder structure

> NOTE: `node_modules/` & `package.json` are auto generated

```
weekend-4-challenge/
├── node_modules/
│   └── ...
├── server/
│    ├── modules/
│    ├── public/
│    │    ├── scripts/
│    │    │   └── client.js
│    │    ├── vendors/
│    │    │   └── ...
│    │    ├── styles/
│    │    │   └── style.css
│    │    └── index.html
│    ├── routes/
│    └── app.js
├── .gitignore
└── package.json
```

**.gitignore**

```
node_modules/
.DS_Store
*.log
```

> Commit our changes

## Spin up server

**app.js**

```JavaScript
var express = require('express');
var app = express();
var port = process.env.PORT || 5000;

app.use(express.static('server/public'));

app.listen(port, function() {
  console.log('Localhost running on port', port);
});
```

**Copy vendor files**

Copy `angular` and `bootstrap` files into the projects vendors folder.

**Add HTML to the index file**
```HTML
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>The Gallery of My Life</title>
    <script type="text/javascript" src="vendors/angular/angular.js"></script>
    <script type="text/javascript" src="scripts/data.js"></script>
    <script type="text/javascript" src="scripts/client.js"></script>
    <link rel="stylesheet" href="vendors/bootstrap/css/bootstrap.css">
    <link rel="stylesheet" href="styles/styles.css">
  </head>
  <body ng-app="app">
    <div class="container">
      <header>
        <h1>Glacier National Park</h1>
      </header>
    </div>
  </body>
</html>
```

> Commit our changes

## Add some static content

Having some static content will make it easier to build out our HTML in Angular.

> Commit our changes

## Add our controller

**data.js**

_Example placeholder data_

```JavaScript
var placeholder = {};
placeholder.data = [
  {id: 1, path: 'images/goat_medium.jpg', description:'This is a goat.', likes: 0, views: 0, showText: false},
  {id: 2, path: 'images/river_medium.jpg', description:'River running from a glacier.', likes: 0, views: 0, showText: false},
  {id: 3, path: 'images/sign_medium.jpg', description:'Sign.', likes: 0, views: 0, showText: false},
];
```

**client.js**

```JavaScript
var app = angular.module('myApp', []);

app.controller('GalleryController', function(){
  console.log('gallery controller running');
  var gallery = this;
  // Placeholder data is in data.js
  gallery.photos = placeholder.data;
}]);
```

**index.html**

```HTML
<!-- Under our header tag, add the following -->
<div ng-controller="GalleryController as gallery" ng-cloak>

<div>
```

> Commit our changes

## ng-repeat our data

**index.html**

Next we'll output all images and descriptions to the screen. Hide and show will come later.

```HTML
<!-- Update our HTML controller -->
<div class="row" ng-controller="GalleryController as gallery" ng-cloak>
  <!-- 'entry' here could be anything, gallery.photos is from our controller -->
  <div class="col-sm-6 col-lg-4" ng-repeat="entry in gallery.photos">
    <!-- for each entry, print out the description and image -->
    <span class="quote">"{{entry.description}}"</span>
    <img class="img-responsive"
         ng-src="{{entry.path}}"
         alt="{{entry.description}}">
  </div>
</div>
```

> Commit our changes
