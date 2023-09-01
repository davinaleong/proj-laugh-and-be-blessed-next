import styles from "./page.module.css"
import { createClient } from "contentful"

import { Config } from "./config"

import { CardComponent } from "./components/card"
import { FooterComponent } from "./components/footer"
import { HeaderComponent } from "./components/header"
import { HelpComponent } from "./components/help"
import { useState } from "react"

export interface IndexPageProps {
  jokes: any
}

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  })

  const res = await client.getEntries({
    content_type: process.env.CONTENT_TYPE,
  })

  return {
    props: {
      jokes: "Hello",
    },
  }
}

export default function Index(props: IndexPageProps) {
  console.log(`props`, props)
  // console.log(`jokes`, jokes)

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
