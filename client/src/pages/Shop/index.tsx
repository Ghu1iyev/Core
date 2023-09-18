import CoverImg from '../../assets/images/Cover photo.png'
import styled from './shop.module.css'
import ProductAvatar from '../../assets/images/Product avatar.svg'
import {FaXTwitter} from 'react-icons/fa6'
import {BsInstagram} from 'react-icons/bs'
import {FaPinterestP} from 'react-icons/fa'
import {IoIosArrowDown} from 'react-icons/io'
import {BiFilterAlt} from 'react-icons/bi'
import ProductCard from '../../components/ProductCard'
import { useQuery } from '@tanstack/react-query'
import { getProducts } from '../../service/Api'


const Shop = () => {
  const {data: products} = useQuery({
    queryKey: ["products"],
    queryFn: getProducts
  })
  console.log(products);
  
  return (
    <div className='bg-black h-[1697px]'>
        <div>
          <img className='w-full h-[400px]' src={CoverImg} alt="" />
        </div>
        <div className={styled.product_overview}>
          <div className='flex justify-between items-start border-b-2 pb-[40px] border-[#272B30]'>
            <div className='flex items-center gap-4'>
                <img src={ProductAvatar} alt="" />
                <div>
                  <h4 className='text-[32px] font-semibold'>Chelsie Haley</h4>
                  <p className='text-[20px] text-[#6F767E] font-semibold'>Dream big. Think different. Do great!</p>
                </div>
            </div>
            <div className='text-[#6F767E] flex items-center gap-8'>
                <FaXTwitter fontSize={22}/>
                <BsInstagram fontSize={22}/>
                <FaPinterestP fontSize={22}/>
                <button className={styled.follow_btn}>Follow</button>
            </div>
          </div>
          <div className='flex justify-between items-center mt-[48px]'>
            <div className='flex gap-2 '>
              <button className='rounded-lg bg-[#272B30] px-[16px] py-[8px] font-semibold'>Products</button>
              <button className='px-[16px] py-[8px] text-[#6F767E] font-semibold'>Followers</button>
              <button className='px-[16px] py-[8px] text-[#6F767E] font-semibold'>Following</button>
            </div>
            <div className='flex gap-4'>
              <button className={styled.most_recent_btn}>Most recent<IoIosArrowDown /></button>
              <button className='p-[8px] border-2 border-[#272B30] rounded-lg text-[#6F767E]'><BiFilterAlt fontSize={20}/></button>
            </div>
          </div>
          <div className='mt-[32px] flex gap-[30px] flex-wrap'>
              {
                products && products.data.map((product: ProductProps, index: number) => (
                  <ProductCard key={index} name={product.attributes.name} image={product.attributes.image} price={product.attributes.price}/>
                ))
              }
          </div>
          <div className='flex justify-center mt-[40px]'>
            <button className={styled.load_more_btn}>Load more</button>
          </div>
        </div>
    </div>
  )
}

export default Shop