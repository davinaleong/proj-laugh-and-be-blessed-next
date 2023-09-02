import styles from "./page.module.css"
import { createClient } from "contentful"
import Link from "next/link"

import { Config } from "./config"
import { HelpComponent } from "./components/help"

export async function getData() {
  const client = createClient({
    space: `${process.env.CONTENTFUL_SPACE_ID}`,
    environment: `${process.env.CONTENTFUL_ENVIRONMENT_ID}`,
    accessToken: `${process.env.CONTENTFUL_ACCESS_TOKEN}`,
  })

  const { items } = await client.getEntries({
    content_type: `${process.env.CONTENT_TYPE_ID}`,
  })

  return items
}

export default async function Index() {
  const jokes = await getData()

  return (
    <main className="flow">
      <HelpComponent content={Config.help} />

      <section>
        <div className="card-grid">
          {jokes.map((joke, index) => (
            <Link
              key={joke.sys.id}
              href={`${joke.fields.slug}`}
              className="card bg-full shadow-v-br-400"
            >
              <h3 className="fz-500">
                {index + 1}. {joke.fields.title}
              </h3>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
