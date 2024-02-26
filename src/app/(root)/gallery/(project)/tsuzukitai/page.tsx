import React from 'react'
import Image_grid from '../../../../../../components/gallery/Image_grid';
import Hero_gallery from '../../../../../../components/gallery/Hero_gallery';

function page() {
  return (
    <div>
      <Hero_gallery title="Trapped memories" c1="Tsuzukitai" c2="2016 - 2018" c3="Japan"/>
      <Image_grid currentDir='tsuzukitai'/>
    </div>
  )
}

export default page