import IntroTemplate from 'intro-template'
import Hero from 'components/Hero'
import Feature from 'components/Feature'
import Testimonial from 'components/Testimonial'
export default function IndexPage() {
  return (
    <>
      {/* Start something new 💖 */}
      <IntroTemplate />
      <div className='p-10'>
        <h1 className='text-3xl font-bold mb-6'>This section to demo Page builder feature: </h1>
        <div className='border-4 border-dashed border-red-500 border-spacing-2 rounded-lg'>
          <Hero/>
          <Feature/>
          <Testimonial/>
        </div>
      </div>
    </>
  )
}
