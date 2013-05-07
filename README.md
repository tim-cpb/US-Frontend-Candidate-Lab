## CP+B Candidate Lab

Congratulations! If you've made it this far, we like you already.
This lab is an opportunity for us to have a conversation about practices, conventions, and workflow.
It will also help us better understand you as a developer. 
Please use this as a way to communicate through your craft.


# Setup

1. Fork this repo and clone to your computer
2. Setup the project in your prefered IDE
3. View index.html in the browser (/www)
4. Open the psd file in /psd (/psd)


# Development

* Improve semantic structure and content of the HTML
* Incorporate missing design elements (per psd)
* Create an RSVP message onClick of 'Yes' or 'No':
  ** Provide feeback to the user with confirmation of their choice
  ** Design, behavior, and messaging are up to you
  ** Plug-ins, libraries, and frameworks are permitted
* Modify anything and everything you think should be different/improved. Document the reasoning for your changes in the Notes section.


# Workflow

Please make atomic commits (commit often) as you progress. 
Be sure to provide useful commit messages to illustrate milestones and workflow.
Submit a pull request when you are finished and satisfied with your work.

# Notes

Use this area to communicate any thought processes, ideas, or challenges you encountered.

***

## Processes

I've documented my process along the way. With git I normally use a feature branching approach, merging branches with --no-ff (no fast forwarding) to maintain the feature branch existence. This is specifically useful when visually reviewing the project commit history with a tool similar to [SourceTree][http://sourcetreeapp.com/]. Additionally I will set up dev and staging tracking branches with master/production. This apporach is similar to the workflow explained [here][http://nvie.com/posts/a-successful-git-branching-model/].

Note that I utilize SourceTree only for visually viewing historical commits/branches. I utilize the command line as much as possible.

For this project I've kept commits within master. Lets get started.

1. Discovery
  * Looking through the PSD and code to come up with my approach
  * Deciding to go responsive, why not provide an optimized experience for all devices
  * Planning, organizing and sketching (see /images/sketch+organize.jpg)
2. The PSD explodes.
  * Grabbed a [repeatable texture][http://subtlepatterns.com/retina-wood/], closest to that found in the comp, then tweaked to match as close to original as possible.
  * Same as above for the [main content area][http://subtlepatterns.com/white-leather-2/]. Both textures under creative commons license.
  * Saved out the images within the Polaroids, rebuilding the images to match the comp as closely as possible. Most likely would have pushed back on creative with some direction to provide better assets.
  * Pulled out the logo and polaroid text smart objects to save as SVG. Illustrator files used to maintain the copy, normally wouldn't recommend this as it should be in code. Here I wanted to continue to be retina friendly.
    ** Reworked the address copy, chose a font that was close to the original as the font was raserized.
  * Didn't save out retina versions of images as assets were too small to maintian the crops in the comp.
  * Pulled out the color scheme
    ** TEXT: Body copy: #383838, Headings: #3A3A3A
    ** BUTTONS: Orange: #F7993E to #F68533, Black: #3B3B3B to #313131
    ** POLAROIDS: slight variations of #ECEBEC
3. Takeoff integration
  * Takeoff is a Gruntjs configuration with a handful of plugins for automated optimized development
    ** I will be releasing this as an open source project (soon)
  * Removing existing CSS and JS files from the project to be merge back in later
  * Note: If you would like to run the build process you'll need the Grunt CLI plugin installed globally, PhantomJS, SVGO, Sass and Compass installed
    ** Then run 'npm install' to install Grunt with the plugin dependancies local to the project
    ** Run 'grunt', 'grunt minify' or 'grunt icons'
    ** Takeoff is set up to work beautifully with 'grunt watch' and LiveReload or Tincr (Chrome plugin)
  * Front end tooling FTW (For The Win)
4. Initialize Project
  * Set Sass vars, specifically color and typography: /css/sass/_vendor/_vars.scss
    ** Deciding to go with the browser default font size, as creators of mobile devices pick sensibile defaults.
    ** Chrome, Firefox, Safari and most other "desktop" browsers set their default to 16px
  * Take a first pass at typography: /css/sass/01._typography.scss
    ** Using a technique for they typography where the font-size and line-height will grow from mobile to desktop breakpoints for readability 
5. Accessing Semantic Markup
  * Reworking the markup to be more semantic with HTML5 elements, plus aria roles for accessibility
  * Building out the Polaroid markup
  * Looking good without CSS
6. Sassy Decoration
  * Utilizing Sass for styling:
    ** Adding the background texture: 00._global.scss
    ** Building the Polaroids: 02._elements.scss
    ** Styling the main content with the buttons: 03._page.scss and 02._elements.scss
    ** Adding base64 white background texture within Sass/CSS.
  * `grunt icons` ran to optimize SVGs and create PNG fallbacks (see /images/grunt-icons.png)
  * `grunt minify` ran to compress images (see /images/grunt-minify.png)
7. Layout
  * For layout I'm using a grid system I helped create called Extra-Strength Responsive Grids (ESRG). Three things about ESRG:
    ** First, one big advantage is it's self-documenting, so you can quickly tell what's going on when looking at the source or in the web inspector
    ** Second, it keeps the layout "contained" within the grid CSS (true of all grid systems)
    ** Third, a potential disadvantage are extra DIVs and CLASSes, hopefully not excessive
    ** ESRG project page: http://dfcb.github.io/extra-strength-responsive-grids/
  * Using an OOCSS approach to class naming

## Ideas

* Add RSVP link near the top of the page on mobile (and maybe tablet breakpoints) to jump down to the RSVP buttons

## Challenges

* Assets delivered within the PSD
* Copy was rasterized
* Fonts not included
