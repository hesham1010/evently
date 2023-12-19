import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <section className='bg-primary-50 b-dotted-pattern bg-contain py-5 md:py-10'>
        <div className='wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0'>
          <div className='flex flex-col justify-center gap-8'>
            <h1 className='h1-bold'>
              Host, Connect, Celebrate: Your Events, Our platform!
            </h1>
            <p className='p-regular-20 md:p-regular-24'>
              Book and learn helpful tips from 3168+ mentors in world-class companies with our global community
            </p>
            <Button size={"lg"} asChild className='button w-full sm:w-fit'>
              <Link href={"#events"}>Explore Now</Link>
            </Button>
          </div>
          <Image src="/assets/images/hero.png" alt="hero" width={1000} height={1000} className='mx-h-[70vh] object-center 2xl:max-h-[50vh]' />
        </div>
      </section>
      <section id='events' className='wrapper my-8 flex flex-col gap-8 md:gap-12'>
        <h2 className='h2-bold'>Trustred by <br /> Thousands of Events</h2>
        <div className='flex w-full flex-col gap-5 md:flex-row'>
          search
          Category Filter
        </div>
      </section>
    </>
  )
}
