import React from 'react'
import { Icon } from 'semantic-ui-react'


export default function Videos({video, title, views, uploadDate, upvotes, downvotes}) {
  return (
    <div>
      <iframe
    width="919"
    height="525"
    src={video}
    frameBorder="0"
    allowFullScreen
    title="Thinking in React"/>
    <h1>{title}</h1>
    <p>{views} Views | Uploaded {uploadDate}</p>
    <button>{upvotes} <Icon size='small' name='thumbs up' /></button>
    <button>{downvotes}<Icon size='small' name='thumbs down' /></button>
    </div>
  )
}
