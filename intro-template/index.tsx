'use client'
import Image from 'next/image'
import Link from 'next/link'
import { memo, useEffect, useState } from 'react'

import cover from './cover.png'

export default memo(function IntroTemplate() {
  const [studioURL, setStudioURL] = useState('')
  const [isLocalHost, setIsLocalhost] = useState(false)

  const hasEnvFile = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
  const hasRepoEnvVars =
    process.env.NEXT_PUBLIC_VERCEL_GIT_PROVIDER &&
    process.env.NEXT_PUBLIC_VERCEL_GIT_REPO_OWNER &&
    process.env.NEXT_PUBLIC_VERCEL_GIT_REPO_SLUG
  const repoURL = `https://${process.env.NEXT_PUBLIC_VERCEL_GIT_PROVIDER}.com/${process.env.NEXT_PUBLIC_VERCEL_GIT_REPO_OWNER}/${process.env.NEXT_PUBLIC_VERCEL_GIT_REPO_SLUG}`
  const removeBlockURL = hasRepoEnvVars
    ? `https://${process.env.NEXT_PUBLIC_VERCEL_GIT_PROVIDER}.com/${process.env.NEXT_PUBLIC_VERCEL_GIT_REPO_OWNER}/${process.env.NEXT_PUBLIC_VERCEL_GIT_REPO_SLUG}/blob/main/README.md#how-can-i-remove-the-next-steps-block-from-my-blog`
    : `https://github.com/sanity-io/template-nextjs-clean#how-can-i-remove-the-next-steps-block-from-my-blog`

  const [hasUTMtags, setHasUTMtags] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setStudioURL(`${window.location.origin}/studio`)
      setIsLocalhost(window.location.hostname === 'localhost')
      setHasUTMtags(window.location.search.includes('utm'))
    }
  }, [])

  if (hasUTMtags || !studioURL) {
    return null
  }

  return (
    <div className="flex justify-center border border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-950">
      <div className="mt-20 mb-4 grid max-w-screen-2xl grid-cols-1 gap-y-20 md:grid-cols-2 md:gap-x-16 md:gap-y-32 lg:gap-x-32 ">
        <div className="self-center">
          <Image
            alt="An illustration of a browser window, a terminal window, the Sanity.io logo and the NextJS logo"
            src={cover}
          />
          
        </div>

        <div className="mx-6 md:mx-0 md:mr-24">
          <h2 className="mb-5 text-xl font-bold tracking-wide md:text-5xl">
            Next steps
          </h2>

          {!hasEnvFile && (
            <div
              className="mb-6 rounded-lg bg-yellow-100 p-4 text-sm text-yellow-700"
              role="alert"
            >
              {`It looks like you haven't set up the local environment variables.`}
              <p>
                <a
                  href={
                    'https://github.com/sanity-io/template-nextjs-clean#step-2-set-up-the-project-locally'
                  }
                  className={`mx-1 underline hover:text-blue-800 dark:hover:text-blue-200`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {`Here's how to set them up locally`}
                </a>
              </p>
            </div>
          )}

          <ol>
            <Box
              circleTitle="1"
              element={
                <div>
                  <div className="col-span-2 mt-1 mb-2 font-semibold">
                    Create a schema
                  </div>

                  {isLocalHost ? (
                    <div className="text-xs text-gray-700 dark:text-gray-300">
                      Start editing your content structure in
                      <div className="bg-slate-200 w-fit px-2 inline-block">
                        <pre>sanity.config.ts</pre>
                      </div>
                    </div>
                  ) : (
                    <>
                      <div className="text-xs text-gray-700 dark:text-gray-300">
                        Your code can be found at
                        <a
                          className="mx-1 underline hover:text-blue-800 dark:hover:text-blue-200"
                          href={repoURL}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {repoURL}
                        </a>
                      </div>

                      <div className="mt-3">
                        <a
                          className="inline-flex rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-800 dark:hover:text-blue-200"
                          href={repoURL}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Go to {getGitProvider()} repo
                        </a>
                      </div>
                    </>
                  )}
                </div>
              }
            />

            <Box
              circleTitle="2"
              element={
                <div>
                  <div className="col-span-2 mt-1 mb-2 font-semibold">
                    Create content with Sanity Studio
                  </div>
                  <div className="text-xs text-gray-700 dark:text-gray-300">
                    Your Sanity Studio is deployed at
                    <Link
                      className="mx-1 underline hover:text-blue-800 dark:hover:text-blue-200"
                      href={studioURL}
                    >
                      {studioURL}
                    </Link>
                  </div>

                  <div className="mt-3">
                    <Link
                      className="inline-flex rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-800 dark:hover:bg-blue-200 dark:hover:text-blue-800"
                      href={studioURL}
                    >
                      Go to Sanity Studio
                    </Link>
                  </div>
                </div>
              }
            />

            <Box
              circleTitle="3"
              element={
                <div>
                  <div className="col-span-2 mt-1 mb-3 font-semibold">
                    Learn more and get help
                  </div>
                  <ul>
                    <li className="mb-2">
                      <BlueLink
                        href="https://www.sanity.io/docs"
                        text="Documentation for Sanity"
                      />
                    </li>
                    <li className="mb-2">
                      <BlueLink
                        href="https://nextjs.org/docs"
                        text="Documentation for Next.js"
                      />
                    </li>
                    <li className="mb-2">
                      <BlueLink
                        href="https://slack.sanity.io/"
                        text="Join the Sanity Community"
                      />
                    </li>
                  </ul>
                </div>
              }
            />
          </ol>
        </div>
      </div>
    </div>
  )
})

function Box({
  circleTitle,
  element,
}: {
  circleTitle: string
  element: JSX.Element
}) {
  return (
    <li className="mt-2 grid grid-flow-col grid-rows-1 place-content-start gap-3">
      <div className="row-span-3 select-none">
        <div className="relative flex h-5 w-5 select-none items-center justify-center rounded-full bg-gray-200 p-3 text-center dark:bg-gray-700">
          {circleTitle}
        </div>
      </div>
      {element}
    </li>
  )
}

function BlueLink({ href, text }: { href: string; text: string }) {
  return (
    <a
      href={href}
      className="text-blue-500 underline hover:text-blue-800 dark:hover:text-blue-200"
      target="_blank"
      rel="noreferrer"
    >
      {text}
    </a>
  )
}

function getGitProvider() {
  switch (process.env.NEXT_PUBLIC_VERCEL_GIT_PROVIDER) {
    case 'gitlab':
      return 'GitLab'
    case 'bitbucket':
      return 'Bitbucket'
    default:
      return 'GitHub'
  }
}
