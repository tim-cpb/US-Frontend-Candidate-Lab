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

1. Discovery
  * Looking through the PSD and code to come up with my approach
  * Deciding to go responsive, why not provide an optimized experience for all devices
  * Planning, organizing and sketching
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

## Ideas

* Add RSVP link near the top of the page on mobile (and maybe tablet breakpoints) to jump down to the RSVP buttons

## Challenges

* Assets delivered within the PSD
* Copy was rasterized
* Fonts not included
