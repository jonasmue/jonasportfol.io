---
title: 'LOCALL: Support Your Local Business'
date: '2020-04-15'
category: "Society"
image: "locall-logo.png"
teaser: "As part of the #WirVsVirus Hackathon of the German Federal Government, we built an interactive online application to help support local businesses."
---

[LOCALL](https://locall-map.de) is an online platform that allows you to bring your coffee-table gossip and after-work beer feeling with your 
friends into your living room. And even better than that: You can support your local gastronomic businesses through donations by 
buying virtual drinks. LOCALL emerged as a project of the [#WirVsVirus hackathon](https://wirvsvirushackathon.org) of the 
German Federal Government in March 2020. 

I was the technical lead of the project. Apart from managing 
a team of highly motivated volunteer developers, I developed frontend and backend modules for our live event system as well 
as the voice chat. The app is built in React.js, running on a node.js express server. For data persistence, we use MongoDB, socket.io handles 
interactive events such as the voice chat and the chat for live events.

## Features
### Voice Chat
To stay in touch with your friends or to meet new people, you can step inside your favorite local (or any other registered)  
business and take a seat at a virtual table. People sitting at the same table can talk to each other via a WebRTC-based
voice chat.

![](/images/posts/locall-live-chat.png)
<div class="caption">You can voice chat with your friends at your favorite location and support the business by buying virtual drinks.</div>

### Supporting Businesses
Once you have entered the business of your choice, you can support it by buying digital drinks.

### Live Events
We integrated a module allowing businesses to host live events at at their virtual location. Our first live event
featured three popular German poetry slammers.

![](/images/posts/locall-live.png)
<div class="caption">Our first live event was a poetry slam with popular German slammers. (Please ignore the broken avatar images 😅) </div>

## Project Video
<div class="video-wrapper">
<iframe src="https://www.youtube.com/embed/aZse2DgRUNk" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>


## Resources

* [LOCALL Website](https://locall-map.de)
* Project Repository on Github ([Frontend](https://github.com/valentindiehl/locall_frontend) — [Backend](https://github.com/valentindiehl/locall_backend))
* [Project on Devpost](https://devpost.com/software/locall)
* Design by [Franziska Uch](https://franziska-uch.com/?portfolio=locall)
