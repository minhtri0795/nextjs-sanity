import dynamic from 'next/dynamic'

const HeroBlock = dynamic(() => import('./Hero'), { ssr: true })
const Feature = dynamic(() => import('./Feature'), { ssr: true })
const Testimonial = dynamic(() => import('./Testimonial'), { ssr: true })
export default function PageBuilder({ blocks }) {
 return blocks.map(({ _type,_key, ...rest }) => {
    if(!blocks) return null 
    let Block
    switch (_type) {
      case 'hero': {
        Block = HeroBlock
        break
      }
      case 'feature': {
        Block = Feature
        break
      }
      case 'testimonials': {
        Block = Testimonial
        break
      }
    }
    return <Block {...rest} key={_key}/> 
  })
}
