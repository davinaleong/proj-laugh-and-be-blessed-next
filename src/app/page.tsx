import styles from "./page.module.css"
import Link from "next/link"

import { Config } from "./config"
import { HelpComponent } from "./components/help"
import logValue from "./lib/log/log-value"
import { getJokesData } from "./lib/contentful/graphql"

async function getData() {
  return getJokesData()
}

export default async function Index() {
  const jokes = await getData()
  logValue(`jokes`, jokes)

  return (
    <main className="flow">
      <HelpComponent content={Config.help} />

      {/* <section>
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
      </section> */}
    </main>
  )
}
