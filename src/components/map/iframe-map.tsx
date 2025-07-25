type IframeMapProps = {
  src: string;
  height?: string;
  className?: string;
  title?: string;
};

export function IframeMap({
  src,
  height = '400px',
  className = '',
  title = 'Mapa',
}: IframeMapProps) {
  return (
    <div className={className} style={{ height }}>
      <iframe
        src={src}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={title}
        className="rounded-lg"
      ></iframe>
    </div>
  );
}
