#MediacenterJS Plugins template


The easist way create plugins for MediacenterJS is to use the mediacenterjs-plugin-generator. [View the documentation][5] for more information 

```
npm install mediacenterjs-template-generator
node template-generator.js
```  


There are a few requirements that your plugins must adhere to.  It is required that your plugin have a `public` and `views` folder and an `index.js` file located in the root of the plugin folder.  

###The public folder

The public folder will contain any front end static content such as any CSS, JavaScript, or image files.  You can structure this folder however you see fit.  The only requirement for this folder is that it contains a `tile.png` image in the root of the folder. This image will become the icon that users will click on to open your plugin.  The recommended image size is 160px by 169px.

###The views folder

The `views` folder will contain your [Jade][1] template files.  Jade is a NodeJS Template Engine which aims to simplify and reduce the amount of HTML code needed to write in order to create HTML web pages.  Please view the [Jade website][2] to learn more.  
To get started with the `template.jade` file rename it to match your plugin's name.  As is, this file will contain the basic structure for a plain HTML document.  It is important to keep a reference to the core dependencies.  These dependencies will ensure that you have access core functionality and styling so that your plugin will give the user a consistent experience through the entire MediacenterJS application.

**Required JavaScript and CSS:**
```
script(src="/core/js/jquery-1.8.2.min.js")       // jQuery library 

script(src="/core/js/plugins/jquery.idle-timer.js") // small jQuery plugin to get the screensaver to work

script(src="/core/js/jquery.mcjs.core.js") // the jQuery core plugin for all basic features like keyboard support, screensaver etc

link(rel='stylesheet', href='/core/css/style.css')
```

**Optional JavaScript libraries and CSS files**
```
script(src="/core/js/jquery-ui-1.10.3.min.js")  // jQuery UI library (for modal popups/error messages)

script(src="/core/js/plugins/jquery.i18n.properties.-1.0.9.js") // jQuery plugin for frontend translations

script(src="/core/js/plugins/jquery.prettyForm.js") // jQuery plugin to use custom checkboxes

script(src="/core/js/plugins/jquery.keyboard.min.js") // jQuery plugin for onscreen keyboard

script(src="/core/js/plugins/validation/jquery.validate.min.js")  // jQuery validation plugin

script(src="/core/js/plugins/validation/jquery.validate.defaults.js") // jQuery validation plugin

script(src="/core/js/plugins/validation/jquery.validate.rules.js") // jQuery validation plugin

link(rel='stylesheet', href='/core/css/jquery-ui-1.10.3.custom.min.css')  // jQuery UI CSS

link(rel='stylesheet', href='/themes/'+selectedTheme)    // selected theme CSS
```

Other than the core dependencies feel free to add any references to your CSS, JavaScript, or image files that you have stored in the public folder.  You can get a reference to your plugins public folder by using `/mediacenterjs-<your-plugin-name>/...'`.  Were the `...` is the same file and folder structure contained in your `public` folder. 



###index.js
At the root of your plugins folder you must have an index.js file. This file will contain most of your plugins logic. The file requires two exports.

First the `exports.engine`.  Currently the only supported template engine is Jade so you can leave the default `exports.engine = 'jade';`

The second is `exports.index`.  This is what gets called when a user click on your plugin.  This is a JavaScript function that gets passed an ExpressJS `request`, `response`, and `next` parameter.  See the [ExpressJS][3] web site to learn more about these parameter.  

When you are ready to push data to and render your plugin's Jade file then you will call the `response.render()` function passing it two parameters; 1) the name of your view and 2) the data object to render on the screen.  If your `.jade` file is at the root of the views folder then you will only need to pass the name of the jade file without the `.jade` extension as the first parameter.  

Example
```
response.render('name-of-jade-file', {data: toPass} );
```


###Local Testing
Testing your plugin is as easy as coping your plugin's folder to the `node_modules` folder of your MediacenterJS application. After starting (or restarting) the MediacenterJS application you will see a route being created at in the console for your plugin and no error messages. If you included a tile.png file then your plugin icon should show up on the home screen of MediacenterJS.  If something goes wrong you can check the terminal of MediacenterJS or your browser's console.  If you are stuck and need help then post a message to the mediacenterjs-plugin-templete [Github][4] page and the community will be more than happy to help.


###Publishing.
Publishing your plugin is as easy as updating the package.json file and publishing your application to the NPM repository.  
More info coming soom on this process......


###VideoJS player

JavaScript
```
script(src="http://vjs.zencdn.net/4.0/video.js")

$('.link').click(function(e) {
  e.preventDefault();	

  var link = $(this).attr('href')

  videojs("player").ready(function(){
    var myPlayer = this;
    $('#player').css('bottom','0');
    myPlayer.src(link);
    myPlayer.play();
  });
});

```
CSS
```
link(href="http://vjs.zencdn.net/4.0/video-js.css", rel="stylesheet")
style.
  .vjs-play-progress, .vjs-volume-level { background-color: #d96800!important; }
  .vjs-control-bar, .vjs-big-play-button { background: rgba(171,171,171,0.7)!important; }
  .vjs-slider { background: rgba(171,171,171,0.2333333333333333)!important; }
  .vjs-fade-out { opacity: 1 !important; visibility: visible !important; }
  .vjs-fullscreen-control{visibility:hidden!important;}

```
HTML
```
video#player.video-js.vjs-default-skin(controls, preload="metadata", width="100%", height="33", data-setup="{}") %
				source(src="",type="audio/mp3")		
```


  [1]: http://jade-lang.com/tutorial/
  [2]: http://jade-lang.com/tutorial/
  [3]: http://express.com
  [4]: http://github.com
  [5]: https://github.com/TerryMooreII/mediacenterjs-plugin-generator