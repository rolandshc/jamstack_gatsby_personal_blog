---
title: "My AR Development Toolkits"
date: "2021-06-03"
draft: false
path: "/blog/My-AR-Development-Toolkits"
---

## Toolkits

Software:

<b>Unity</b> - the game engine that I used for game development.

It is just easy to use and powerful with its asset management systems and Scriptable Objects.

<b>AR Foundation</b> - a wrapper of ARKit and ARCore in Unity. It is relatively new and the AR performance depends on the underlying frameworks (ARKit and ARCore).

Tried Vuforia before and Vuforia is easier to use and with better performance in general but it requires third-party license. I mainy used the ```ARTrackedImageManager``` for developing Futuclass AR.

AR Foundation is free but it is having some limitations.

<b>C#</b> - the programming language of scripting in Unity.

I have several years of working experience with it so I do not have any problem with that it is just another OOP language, or you can say it is the Java of M$.

<b>Visual Studio</b> - the IDE used for C# programming with Unity.

Nothing special, just the best IDE for Microsoft language development.

<b>ARKit</b> - the AR development framework for Apple devices including both MacOS and iOS.

It is the core framework providing the AR functionality for AR Foundation. The environmental reflection of this kit is just too perfect. The image tracking is also very fast. It is noted that the maximum moving number of images for active tracking is limited to be 4 and it could not be modified through AR Foundation API ```requestedMaxNumberOfMovingImages```.

<b>ARCore</b> the AR development framework for Android devices.

The AR framework for the Android devices. Unlike the ARKit, the maximum moving number of images for active tracking could be up to 20. However, the tracking quality is comparatively poorly in general. And the performance vary a lot on different devices with different hardware specifications and Android OS versions. It runs well on my Sony Xperia Z2 Premium but failed on Xiaomi Redmi 9A for the latest build.

Hardware:

<b>iPhone 11</b> - the iOS device for internal testing.

<b>Sony Xperia Z2 Premium</b> - the Android device for internal testing.

<b>ASUS ROG Strix Scar 15 Gaming Laptop 2018</b> - the laptop for early developemnt using Unity and Android Studio SDK.

<b>Macbook Pro M1</b> the laptop for later development and ios builds and deployments with Unity and Xcode.


Recommended reading:

[My Master Thesis - Futuclass AR](https://comserv.cs.ut.ee/ati_thesis/datasheet.php?id=72253&year=2021)

[Futuclass AR Development Blog](https://sites.google.com/view/futuclassi-koosloome/arendusblogi)

[AR Foundation](https://docs.unity3d.com/Packages/com.unity.xr.arfoundation@4.1/manual/)

[ARCore](https://developers.google.com/ar)

[ARKit](https://developer.apple.com/augmented-reality/)

Last edited: 03/06/2021
