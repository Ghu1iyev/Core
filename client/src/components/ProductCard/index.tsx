import { AiOutlineStar } from "react-icons/ai";
import Img from '../../assets/images/49cefdfd8f15e49bc047c798998d0c25.jfif'

const ProductCard: React.FC<ProductProps> = ({name, image, price}) => {
  return (
    <div className="w-[328px]">
      <img
        className="w-full h-[200px] object-cover rounded-xl"
        src={Img}
        alt=""
      />
      <div className="flex justify-between mt-[15px]">
        <p className="w-[220px] text-[15px] font-semibold">
          {name}
        </p>
        <span className="bg-[#B5E4CA] px-2 py-1 text-black rounded-md font-semibold w-[46px] h-[32px]">
          ${price}
        </span>
      </div>
      <div className="flex gap-2 items-center text-[#6F767E] font-semibold mt-[8px]">
        <AiOutlineStar fontSize={22} />
        <p>No ratings</p>
      </div>
    </div>
  );
};

export default ProductCard;
