import Image from "next/image";

const Card = ({ imageSrc , userName, userRole, testimonial, extraInfo } : {imageSrc: string, userName: string, userRole: string, testimonial: string, extraInfo: string}) => {
  return (
    <div className="flex justify-start items-start flex-col gap-4 p-3 w-72  lg:w-80 shadow-soft border-Landingpages-card-color rounded-xl border-solid bg-Landingpages-layer2 border-2">
      <div className="flex flex-row justify-start gap-6 items-center w-full p-2 pb-0">
        <Image
          src={imageSrc}
          alt="img"
          width={4000}
          height={4000}
          className="w-10 h-10 rounded-full"
        />
        <div className="flex flex-col justify-between items-start ">
          <h3 className="small">{userName}</h3>
          <h4 className="smaller">{userRole}</h4>
        </div>
      </div>
      <p className="text-smaller font-Poppins font-light">{testimonial}</p>
      <p className="smaller">{extraInfo}</p>
    </div>
  );
};

export default Card;
