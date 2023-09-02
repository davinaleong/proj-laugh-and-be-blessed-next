import styles from "./page.module.css"
import { createClient } from "contentful"

import { Config } from "./config"

import { CardComponent } from "./components/card"
import { FooterComponent } from "./components/footer"
import { HeaderComponent } from "./components/header"
import { HelpComponent } from "./components/help"

export async function getData() {
  const client = createClient({
    space: `${process.env.CONTENTFUL_SPACE_ID}`,
    environment: `${process.env.CONTENTFUL_ENVIRONMENT_ID}`,
    accessToken: `${process.env.CONTENTFUL_ACCESS_TOKEN}`,
  })

  const response = await client.getEntries({
    content_type: `${process.env.CONTENT_TYPE_ID}`,
  })

  return response.items
}

export default async function Index() {
  const jokes = await getData()

  return (
    <main className="flow">
      <HelpComponent content={Config.help} />

      <section>
        <div className="card-grid">
          {jokes.map((joke, index) => (
            <CardComponent
              key={joke.sys.id}
              heading={`${index + 1}. ${joke.fields.title}`}
            />
          ))}
        </div>
      </section>
    </main>
  )
}
