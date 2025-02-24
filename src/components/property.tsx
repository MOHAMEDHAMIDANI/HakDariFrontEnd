import Image from "next/image";

const Property = ({
  imageSrc,
  houseName,
  price,
  description,
  city,
  bed,
  bath,
  meters,
  isPopular,
}) => {
  return (
    <div className="flex capitalize relative justify-center items-start flex-col gap-4 p-3 font-Poppins max-w-96 min-w-56 shadow-custom border-Landingpages-card-color rounded-xl border-solid bg-Landingpages-card-color border-2">
      <div className="overflow-hidden w-full h-44 rounded-xl bg-slate-600">
        <Image
          src={imageSrc}
          alt="img"
          width={4000}
          height={4000}
          className="w-full h-full object-cover hover:scale-110 transition-all ease-in-out duration-1000"
        />
      </div>

      <div className="flex flex-col justify-start h-[60%] items-start gap-2 w-full ">
        <h3 className="text-paragraph font-medium">{houseName}</h3>
        <div className="flex flex-row justify-between items-center w-full gap-16 ">
          <h4 className="text-paragraph font-normal ">{price}</h4>
          <div className="flex justify-end items-center flex-row flex-nowrap gap-1 w-fit">
            <span className="text-smaller">{city}</span>
            <Image
              src="/images/icons/location.svg"
              alt="search"
              width={2000}
              height={2000}
              className="w-5"
            />
          </div>
        </div>
        <p className="text-smaller font-Poppins font-normal">{description}</p>
      </div>

      <div className="flex flex-row justify-between items-center w-full ">
        <div className="flex justify-end items-center flex-row-reverse flex-nowrap gap-1 w-fit">
          <span className="text-tag">{bed}</span>
          <Image
            src="/images/icons/bed.svg"
            alt="search"
            width={2000}
            height={2000}
            className="w-5"
          />
        </div>
        <div className="flex justify-end items-center flex-row-reverse flex-nowrap gap-1 w-fit">
          <span className="text-tag">{bath}</span>
          <Image
            src="/images/icons/bath.svg"
            alt="search"
            width={2000}
            height={2000}
            className="w-5"
          />
        </div>
        <div className="flex justify-end items-center flex-row-reverse flex-nowrap gap-1 w-fit">
          <span className="text-tag">{meters}</span>
          <Image
            src="/images/icons/Meters.svg"
            alt="search"
            width={2000}
            height={2000}
            className="w-5"
          />
        </div>
      </div>

      {isPopular && (
        <Image
          src="/images/icons/popular.svg"
          alt="Popular Property"
          width={4000}
          height={4000}
          className="w-[40%] absolute top-40 -left-[3.5%]"
        />
      )}
    </div>
  );
};

export default Property;
