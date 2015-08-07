html-gulp-skeleton
=====================================
Current version: 1.0.0


## Introduction

A boilerplate using Gulp, SASS with concatenation and minification process for both development and deployment.
It's also the skeleton we use for our projects in laukatu.com

---

### Get started!

We assume that you have nodejs (and therefore npm) installed in your computer, be it Linux, Mac, or Windows.

1. Clone this repo from `https://github.com/laukatu/html-gulp-laukatu-skeleton.git`
2. Run `npm install` from the root directory of the cloned repo (where this README.md is located). This will install all the dependencies (Gulp, SASS, etc...)
3. Run `gulp dev` (may require installing Gulp globally: `npm install gulp -g`)
4. All the contents in the folder `app` will be processed in development mode and will output in the `deploy` folder, so you can access your project there in the browser. No minification occurs with `gulp dev`.
6. Run `gulp deploy` to achieve the same as in #3, but with minification both for CSS and JS.

Any changes you make in the `app` folder during the #3 `gulp dev` process will be watched and automatically injected into `deploy` folder. You have to reload your browser manually (F5) to see the changes as for now there is not live-reload.

### Directory Tree

Basic explanation of important files and folders in this skeleton:

```
/app                       (your development folder)
   /images                 (all the images there and in the /images subfolders will be compressed when deployed)
   /js
      /vendors             (third party javascript libraries)
         /autoinclude      (the files placed here will be automatically included -in no special order, but before "/development" folder-)
         jquery.js         (if you place the files outside /autoinclude folder, you can define its executing order in /gulp/config.js)
      /development         (your javascript)
         /autoinclude      (the files placed here -such as your own classes- will be automatically included -in no special order, but before "main.js" file)
         main.js           (your main javascript file | it is the last .js included/executed)
  /styles
      /vendors             (third party CSS, SASS, such as bootstrap)
         /autoinclude      (the files placed here will be automatically included -in no special order, but before "/development" folder-)
      /development         (your SASS, CSS)
         _clearfix.scss    (clearfix fix. it's included by main.scss on the top of the file)
         _reset.scss       (reset fix. it's included by main.scss on the top of the file)
         _vars.scss        (variable file. just if you need it.)
         main.scss         (your main style file, you can include other files in there using @import | it is the last scss executed.)
   index.php               (file where the CSS/JS files are injected to | you can create as many .php, .html, etc. as you wish, but you have to include the injection comments inside in order to get the CSS/JS injected.)
/deploy                    (folder where the compiled project will be deployed)
/gulp                      (the Gulp folder, where the Gulp configuration and scripts are located)
package.json               (npm dependencies of this skeleton)
```

### How to include third party JS libraries (jQuery, hammer.js, etc.)

There are two ways to include third party javascript libraries.

1. Include the files inside folder ``/app/js/vendors/autoinclude/``. They will automatically be included before any other file. But use it only for files/libraries where the inclusion order doesn't matter, as you can't controll the order this way (they are included alphabetically), so, if for example, you include in this folder ``aCoolPluginThatRequiresjQuery.js`` and ``jquery.js`` - the plugin won't work as it is included before jQuery. So in order to avoid a file-name-changing-to-include HELL, we are going to use the #2 way of including JS files and dependencies.
2. Include the files inside folder ``/app/js/vendors/``. You need to define the order of the inclusion in ``/gulp/config.js``, for example:

```
// config.js file
'use strict';

module.exports = {
  // -- some other config here -- 
  'scripts': {
    'srcfolder': 'app/js',
    'src' : [
              'vendors/jquery.js',           (this is the first included file, in this case, we included jquery)
                                             (you can include more files here, and the order will be respected)
              'vendors/autoinclude/*',       (..then the /vendors/autoinclude/ folder is included)
              'development/autoinclude/*',   (... self explanatory...)
              'development/main.js'          (... and finally your script file, you can also include more lines with more scripts.)
            ],
    'dest': 'deploy/js'
  },
  // -- some other config here -- 
};
```

### How to include my own javascript code? do I have to put everything in ``main.js``?

No, you don't. You can put your JS classes inside ``/app/js/development/autoinclude/`` and they will be automatically included and injected into your html/php/whatever files, then you can use ``main.js`` for the main JS code of the App. The same as in the previous section applies regarding order of inclusion, so please read it carefully.

### How to include third party CSS/SASS?

It's very similar to how you include JS (check the previous sections), but with a main difference; There is not a `/app/styles/development/autoinclude/` folder. Because we take Sass as a base for developing, you should include your own development files using @import so the Sass preprocessor will have a reference to the functions you are using there. Otherwise it won't get the references and will throw an error to the console. There is a ``/app/styles/vendor/autoinclude/`` folder though, so you can include Bootstrap or any other third app libraries or dependencies of plugins for your website there.
Note that all the files included via @import should start with a underscore, like ``_something.scss``, this way they will be ignored by Gulp and will not be included twice. We recommend ``main.scss`` to be the only file without underscore in ``/app/styles/``.

---

## FAQ

**Question: Why are some images not showing in the website?**
Answer: It's probably due to one of this reasons:

1. Your image path in your CSS is wrong. Bear in mind that when compiled, the path of your images in CSS relative to your .php/.html will be ``../images/yourimage.png``
2. You added the images in ``/app/images/`` while executing ``gulp dev``. The ``/app/images/`` folder is not watched, so everytime you add an image to it, you should re-execute ``gulp dev`` or ``gulp deploy`` so the images will be copied to ``/deploy/images/``.


**Question: Why am I not seeing the CSS changes when I reload my browser?**
Answer: Your SASS or JS probably has a syntax error and Gulp closed. Check CMD console, fix the syntax error, and re-execute ``gulp dev`` or ``gulp deploy``.

## To do

1. Add live-reload, browser sync
2. Minify html code
3. ...

---
