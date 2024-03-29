import Link from "next/link"

import { Config } from "./config"
import { HelpComponent } from "./components/help"
import { getEntries } from "./lib/contentful/sdk"

async function getData() {
  return getEntries()
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
