import IntroTemplate from 'intro-template'
import Hero from 'components/Hero'
import Feature from 'components/Feature'
import Testimonial from 'components/Testimonial'
import { getAllPageSlugs, getPageBySlugs } from '../lib/api'
import NotFound from "./404";
export default function IndexPage({ page }) {
  if (page === null) {
    return <NotFound />;
  }
  return (
    <>
      {/* Start something new 💖 */}
      <IntroTemplate />
      <div className="p-10">
        <h1 className="mb-6 text-3xl font-bold">
          This section to demo Page builder feature:{' '}
        </h1>
        <div className="border-spacing-2 rounded-lg border-4 border-dashed border-red-500">
          <Hero />
          <Feature />
          <Testimonial />
        </div>
      </div>
    </>
  )
}
export async function getStaticPaths() {
    const paths = await getAllPageSlugs()
    let finalPaths = paths.map((slug:string)=>{
      if(slug === 'home') {
        return {params: {slug:[]}}
      }else {
        return {params: {slug:[slug]}}
      }
    })
  return {
    paths: finalPaths,
    fallback: true,
  }
}
export async function getStaticProps(context:any) {
  // It's important to default the slug so that it doesn't return "undefined"
  let slug = ''
  if (context.params.slug){
    slug = context.params.slug[0]
  }else {
    slug ='home'
  }
  const page = await getPageBySlugs(slug)

  return {
    props: {
      page: page || null,
    },
  }
}
