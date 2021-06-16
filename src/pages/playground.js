import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

let windowWidth = 800
let windowHeight = 400

if(typeof window !== `undefined`){
  if (window.innerHeight / window.innerWidth > 1){
    windowHeight = 400
    windowWidth = 370
  }
  else{
    if (window.innerWidth < 900){
      windowHeight = 350
      windowWidth = 700
    }

  }
}


const Playground = () => (
  <Layout>
    <SEO title="Playground" keywords={[`threejs`, `game`, `ai`]} />
    <h2>A block building game under development. It is done by WebGL with <a href="https://threejs.org/">Three.js</a></h2>
    <iframe src="/scene.html" width={windowWidth} height={windowHeight}></iframe>
  </Layout>
)

export default Playground
