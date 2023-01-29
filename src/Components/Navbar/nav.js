import React from 'react'
import Uppernav from './uppernav'
import LowerSearch from './lower-search'
function Nav() {
  return (
    <div>
      {console.log("navbar is called...")}
      <Uppernav/>
      <LowerSearch/>
    </div>
  )
}

export default Nav
