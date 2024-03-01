import React from 'react';

function Cards({mobj}) {
  return(
    <div className="flex font-sans">
       <img className="w-24 h-24 rounded-full mx-auto" src="https://picsum.photos/id/237/200/300" alt="" width="384" height="512"/>
  <div class="pt-6 space-y-4">
    <blockquote>
      <p className="text-lg font-medium">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
    <figcaption className="font-medium">
      <div cl>
        {mobj.name}
        <br/>
        {mobj.age}
      </div>
      <div>
        Staff Engineer, Algolia
      </div>
    </figcaption>
  </div>      
    </div>
  )
}

export default Cards