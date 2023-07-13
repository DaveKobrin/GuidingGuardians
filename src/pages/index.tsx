import Image from 'next/image'
import NavBar from '@/components/NavBar/NavBar'
import InputBanner from '@/components/InputBanner/InputBanner'
import SubBanner from '@/components/SubBanner/SubBanner'


export default function Home() {
  return (
    <div className=''>
      <NavBar />
      <InputBanner />
      <SubBanner />
    </div>
  )
}
