import Image from "next/image";

type ProductFeatureProps = {
  imageSrc: string;
  imageAlt: string;
  line1: string;
  line2: string;
};

export function ProductFeature({
  imageSrc,
  imageAlt,
  line1,
  line2,
}: ProductFeatureProps) {
  return (
    <div className="flex flex-col items-center text-center">
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={76}
        height={76}
        className="mb-4 h-[76px] w-[76px] object-contain"
      />
      <p className="text-sm font-medium leading-snug text-mesocore-gray-900">
        {line1}
        <br />
        {line2}
      </p>
    </div>
  );
}
