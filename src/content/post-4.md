---
title: "Multiuser AR"
date: "2021-06-16"
draft: false
path: "/blog/AR-multiuser"
---

I have been doing some research about the latest technologies for creating AR multiuser experience. There are multiple ways for defining multi-user.
The 1st case is that an AR scene is created at Device A and the screen is being shared to Device B. In this case, user A using Device A could share the AR content with user B by real-time screen streaming. An example is the Vuforia Chalk (watch the video below).
<iframe width="873" height="491" src='https://players.brightcove.net/1532789042001/HknUe20R_default/index.html?directedMigration=true&videoId=6164706217001&' allowfullscreen frameborder=0></iframe>


<br/>

The 2nd case is about the sharing of AR scenes themselves. It could be in either real-time or not. This means that after user A created some AR content with device A at a specific location and environment. Then, user B could access the same AR content at the same location and environment with device B. This involves environment understanding and anchor sharing. An anchor is an object that can recognize, to help the program determine the relative location of the AR content (etc. 3D model, video). To share these anchors between devices, this idea comes to the introduction of cloud anchor. The video below visualizes the use of cloud anchors.

<iframe width="873" height="491" src="https://www.youtube.com/embed/Kp2Sm4Fibj0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<br/>
Cloud anchors are necessary information for creating synchronous AR scenes sharing between multiple users through cloud services. In recent years, some tech giants had released their solutions for developers including Google, Apple and Microsoft.

These APIs and SDKs are relatively new and there are not so many applications released using these technologies in the App Store and Play Store at the moment. I am going to try them in the coming days.

Recommended reading:

[Apple Developer - Creating a Multiuser AR Experience](https://developer.apple.com/documentation/arkit/creating_a_multiuser_ar_experience)

[Microsoft Azure - Spartial Anchors](https://docs.microsoft.com/en-us/azure/spatial-anchors/overview)

[Google ARCore - Cloud Anchors](https://developers.google.com/ar/develop/java/cloud-anchors/overview-android)


Last edited: 16/06/2021
