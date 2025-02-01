import React from 'react'

interface WebStoryProps {
  url: string
  title?: string
}

const WebStory: React.FC<WebStoryProps> = ({ url, title }) => {
  if (!url) {
    return null
  }

  return (
    <div className="my-4">
      {title && <h2 className="mb-2 text-xl font-semibold">{title}</h2>}
      <iframe
        src={url}
        title={title || 'Web Story'}
        className="h-[600px] w-full border-none"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        sandbox="allow-scripts allow-same-origin allow-popups"
      >
        Your browser does not support iframes.
      </iframe>
    </div>
  )
}

export default WebStory
