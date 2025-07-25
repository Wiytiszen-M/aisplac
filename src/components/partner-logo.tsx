import Image from 'next/image';

type PartnerLogoProps = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

export function PartnerLogo({
  src,
  alt,
  width = 128,
  height = 64,
}: PartnerLogoProps) {
  return (
    <div className="flex flex-shrink-0 items-center justify-center px-4">
      <div
        className="relative"
        style={{ width: `${width}px`, height: `${height}px` }}
      >
        <Image
          src={src || '/placeholder.svg'}
          alt={alt}
          fill
          className="object-contain"
          sizes={`${width}px`}
        />
      </div>
    </div>
  );
}
