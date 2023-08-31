"use client"

import styles from "./page.module.css"
import { Config } from "./config"

import { CardComponent } from "./components/card"
import { FooterComponent } from "./components/footer"
import { HeaderComponent } from "./components/header"
import { HelpComponent } from "./components/help"
import { useState } from "react"

export default function Index() {
  return (
    <div className="text-gray-50 bg-full position-relative p-v-y-400">
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
    </div>
  )
}
