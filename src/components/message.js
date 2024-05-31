import React from 'react'
import { memo } from 'react';
const Message = () => {
  return (
    <div>
        {console.log("message rendaring")}
      hello message component
    </div>
  )
}

export default memo(Message) ;
