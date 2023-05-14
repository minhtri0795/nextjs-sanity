import client from '../client'

export async function getAllPageSlugs() {
    // fetch all Pages and return slug only : string[]
  const  result  = await client.fetch(`*[_type == "pages" && defined(slug.current)][].slug.current`)
  return result
}

export async function getPageBySlugs(slug:string) {
    const  result  = await client.fetch(`*[_type == "pages" && slug.current == $slug][0]`,{ slug:slug })
    return result
  }