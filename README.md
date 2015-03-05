# Laser-assisted ink picker
This project was made to address the problem of finding a particular pack of ink from among a wall full of them. This was done over a span of 8 hours on March 4, 2015.

The Android app or website sends GET requests to a node.js server with a position parameter corresponding to a certain position on the grid of ink. The node server does a lookup of the position across a preset list of (x,y) coordinates. It passes these coordinates, along with a laser intensity and time to complete the movement to a server running off a Raspberry Pi. 

The Raspberry Pi relayed this information to an AMTEL USB peripheral, which translated the information to a hardware level for the two servos and the laser attached to them.

##The ink wall##
![The ink wall](/pics/Ink wall.jpg?raw=true)

##The laser setup##
![The laser shines bright](/pics/Laser1.jpg?raw=true "The laser shines bright")

![Hot glue, clamps and a ladder to set it up](/pics/Laser2.jpg?raw=true "Hot glue, clamps and a ladder to set it up")

##Android app##
![This page is displayed when a NFC tag with the default position as data is read](/pics/NFC read home page.png?raw=true "This page is displayed when a NFC tag with the default position as data is read")

![Simple interface for picking an item in the grid](/pics/Pick an ink.png?raw=true "Simple interface for picking an item in the grid")

##Mobile version of responsive website##

![Layout similar to the Android app](/pics/Mobile website.png?raw=true "Layout similar to the Android app")

