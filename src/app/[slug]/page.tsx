import styles from "./page.module.css"
import { createClient } from "contentful"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Link from "next/link"

import { contentfulLib } from "./../lib/contentful"

export const revalidate = 10

const client = createClient({
  space: `${process.env.CONTENTFUL_SPACE_ID}`,
  environment: `${process.env.CONTENTFUL_ENVIRONMENT_ID}`,
  accessToken: `${process.env.CONTENTFUL_ACCESS_TOKEN}`,
})

export async function generateStaticParams() {
  const items = await contentfulLib.getEntries()

  return items.map((item) => ({
    slug: item.fields.slug,
  }))
}

async function getData(slug: String) {
  const items = await contentfulLib.getEntries(slug)
  return items[0]
}

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params
  const { fields } = await getData(slug)
  console.log(params, slug, fields)

  return (
    <main className="flow">
      <section className="flow">
        <header className="entry-header">
          <h2 className="fz-500">{`${fields.title}`}</h2>
          <Link href="/" className="btn btn-slide">
            Back
          </Link>
        </header>

        <div className="flow">{documentToReactComponents(fields.content)}</div>
      </section>
    </main>
  )
}
