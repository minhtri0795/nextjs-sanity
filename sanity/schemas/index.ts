import { SchemaTypeDefinition,defineField, defineType } from 'sanity'
import Pages from "./Content/Page"
import Hero from './Blocks/Hero'
import Feature from './Blocks/Feature'
import Testimonials from './Blocks/Testimonials'
import FeatureItem from './Shared/FeatureItem'
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [Pages, Hero,Feature,Testimonials,FeatureItem],
}
