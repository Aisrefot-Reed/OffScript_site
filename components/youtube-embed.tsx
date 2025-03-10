interface YoutubeEmbedProps {
  videoId: string
  title: string
}

export default function YoutubeEmbed({ videoId, title }: YoutubeEmbedProps) {
  return (
    <div className="aspect-video w-full overflow-hidden rounded-lg">
      <iframe
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="border-0"
      ></iframe>
    </div>
  )
}

