import React  from 'react'

export default function layout({children} : {
    children : React.ReactNode
}) {


  return (
    <div>
        <h1>Posts Layout</h1>
        <input type="text" name="" id="" />
        <button >Send</button>
        {children}
    </div>
  )
}
