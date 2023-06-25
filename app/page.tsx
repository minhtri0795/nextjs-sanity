import IntroTemplate from 'intro-template';
import PageBuilder from 'components/PageBuilder';
import { getPageBySlugs } from '../lib/api';
import { notFound } from 'next/navigation'
async function getPageData() {
  const res = await getPageBySlugs('home')
  const data = await res
  return data
}

export default async function IndexPage() {

  const page = await getPageData()
  if (!page) {
    notFound()
  }
  let blocks = page?.pageBuilder

  return (
    <>
      {/* Start something new 💖 */}
      <IntroTemplate />
      <div className="p-10">
        <h1 className="mb-4 mt-6 text-3xl font-bold">
          This section to demo Page builder feature:{' '}
        </h1>
        <div className="border-spacing-2 rounded-lg border-4 border-dashed border-red-500">
          {blocks && <PageBuilder blocks={blocks} />}
        </div>
      </div>
    </>
  )
}

