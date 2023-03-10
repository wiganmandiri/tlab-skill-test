import React from 'react'
import { NavLink } from 'react-router-dom'
import { baseUrl } from '../../helpers/baseUrl'

const Services = () => {
  return (
    <div className='flex flex-col md:flex-row gap-[35px] items-end max-w-[1200px] m-auto'>
      <div className='md:w-[59%] gap-[64px] flex flex-col'>
        <div className='flex flex-col px-4 md:px-0 space-y-[16px]'>
          <h1 className='md:text-[32px] font-bold md:leading-[48px] max-w-[480.99px]'>
            Rangkaian Proyek
            Menarik TLab
          </h1>
          <h2 className='md:text-[18px] font-normal md:leading-[32.04px] max-w-[607px]'>
            Integritas dan kreativitas menjadi kunci dalam membangun produk digital terbaik untuk bisnis Anda
          </h2>
          <NavLink to={"/"} className='flex items-center w-fit hover:cursor-pointer gap-5 whitespace-nowrap md:text-[16px] font-bold md:leading-[28.88px] text-[#5449D6]'>
            <h1>Lihat Semua Layanan TLab</h1>
            <img src={baseUrl(`/icon/Vector.svg`)} className='w-2 h-2 object-contain' />
          </NavLink>        </div>
        <div className='md:h-[457px] relative rounded-[8px] overflow-hidden'>
          <img src={baseUrl(`/photo/card__cover-1.jpg`)} className='h-full w-full object-cover' />
          <div className='bg-white absolute bottom-0 top-[52.34%] right-[34.85%] left-0 rounded-tr-[8px] p-[24px]'>
            <div className='flex flex-col justify-center h-full gap-2'>
              <h1 className='font-bold md:leading-[180.5%] md:text-[14px]'>IT Managed Services</h1>
              <h1 className='font-bold md:leading-[150%] md:text-[24px] max-w-[332px]'>
                kesan.id - Kedaulatan Santri dan Kepribadian Muslim
                </h1>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full md:w-[41%] flex flex-col gap-[32px] h-full justify-end'>
        <div className='md:h-[321px] relative rounded-[8px] overflow-hidden'>
          <img src={baseUrl(`/photo/card__cover-2.jpg`)} className='h-full w-full object-cover' />
          <div className='bg-white absolute bottom-0 top-[52.34%] right-[34.85%] left-0 rounded-tr-[8px] p-[24px]'>
            <div className='flex flex-col justify-center h-full gap-2'>
              <h1 className='font-bold md:leading-[180.5%] md:text-[14px]'>Appliaction Development</h1>
              <div className='font-bold md:leading-[150%] md:text-[24px] max-w-[332px]'>
                <h1>Anterin.id </h1>
                <h1>Ridesharing company</h1>
              </div>
            </div>
          </div>
        </div>
        <div className='md:h-[321px] relative rounded-[8px] overflow-hidden'>
          <img src={baseUrl(`/photo/card__cover-3.jpg`)} className='h-full w-full object-cover' />
          <div className='bg-white absolute bottom-0 top-[52.34%] right-[34.85%] left-0 rounded-tr-[8px] p-[24px]'>
            <div className='flex flex-col justify-center h-full gap-2'>
              <h1 className='font-bold md:leading-[180.5%] md:text-[14px]'>Artificial intelligence</h1>
              <div className='font-bold md:leading-[150%] md:text-[24px] max-w-[332px]'>
                <h1>Juru.id</h1>
                <h1>Smart Parking</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services