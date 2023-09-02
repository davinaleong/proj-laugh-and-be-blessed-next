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
  console.log(`jokes`, jokes)

  return (
    <div className="wrapper wrapper-aligned-center | flow">
      <HeaderComponent heading={Config.title} content={Config.description} />

      <main className="flow">
        <HelpComponent content={Config.help} />

        <section>
          <div className="card-grid">
            <CardComponent heading="Lorem ipsum dolor" />
          </div>
        </section>
      </main>

      <FooterComponent
        title={Config.title}
        author={Config.author}
        year={Config.year}
      />
    </div>
  )
}
