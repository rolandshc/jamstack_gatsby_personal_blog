---
title: "C++ OpenGL Shaded Chopper"
date: "2020-10-08"
draft: false
path: "/blog/c++-OpenGL-shadedChopper"
---

## C++ OpenGL Shaded Chopper

[github repo](https://github.com/rolandshc/shadedChopper)

`youtube:https://www.youtube.com/embed/Qavs0x_usBU`


## Draw Hanger

```js
void initWalls()
  {
    leftWallVAO = createWall(glm::vec3(0.66, 0.66, 0.66));
    rightWallVAO = createWall(glm::vec3(0.4, 0.4, 0.4));
    backWallVAO = createWall(glm::vec3(0.52, 0.52, 0.52));
    ceilingVAO = createWall(glm::vec3(0.33, 0.33, 0.33));
    floorVAO = createWall(glm::vec3(0.22, 0.22, 0.22));
  }
```



Description:

It is a course practice. In the video, the scene has been rendered with walls and a flying chopper with blades rotating.

I have made use of the C++ OpenGL Mathematics (glm) to create those objects as array buffers.

And their position information will be passed from CPU to GPU to let the GPU calculate camera space vertices, fragments and colors.

I use the OpenGL Shading Language (GLSL) for the vertex shader and fragment shader to calculate the resulting colors.

As you see, a lightsource is rotating around the scene.

I have implemented the Phong reflection model so the GPU will run and calculate the color changes simultaneously when running the program.

The lighting model takes care of the Ambient, Diffuse, and Specular Lighting.

If you want to know more about the light and shadow, please check the links below =)

Recommended reading:

[Learn opengl - Basic Lighting](https://learnopengl.com/Lighting/Basic-Lighting)

[Phong reflection model](https://en.wikipedia.org/wiki/Phong_reflection_model)

Last edited: 08/10/2020
