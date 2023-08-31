import { FooterComponent } from "./components/footer"
import { HeaderComponent } from "./components/header"
import { HelpComponent } from "./components/help"
import { Config } from "./config"
import styles from "./page.module.css"

export default function Index() {
  return (
    <div className="wrapper wrapper-aligned-center | flow text-gray-50 bg-full position-relative p-v-y-400">
      <HeaderComponent heading={Config.title} content={Config.description} />

      <main className="flow">
        <HelpComponent content={Config.help} />

        <section>
          <div className="card-grid">
            <a href="#" className="card bg-full shadow-v-br-400">
              <h3 className="fz-500">Lorem ipsum dolor</h3>
            </a>

            <a href="#" className="card bg-full shadow-v-br-400">
              <h3 className="fz-500">Lorem ipsum dolor</h3>
            </a>

            <a href="#" className="card bg-full shadow-v-br-400">
              <h3 className="fz-500">Lorem ipsum dolor</h3>
            </a>

            <a href="#" className="card bg-full shadow-v-br-400">
              <h3 className="fz-500">Lorem ipsum dolor</h3>
            </a>

            <a href="#" className="card bg-full shadow-v-br-400">
              <h3 className="fz-500">Lorem ipsum dolor</h3>
            </a>

            <a href="#" className="card bg-full shadow-v-br-400">
              <h3 className="fz-500">Lorem ipsum dolor</h3>
            </a>

            <a href="#" className="card bg-full shadow-v-br-400">
              <h3 className="fz-500">Lorem ipsum dolor</h3>
            </a>

            <a href="#" className="card bg-full shadow-v-br-400">
              <h3 className="fz-500">Lorem ipsum dolor</h3>
            </a>

            <a href="#" className="card bg-full shadow-v-br-400">
              <h3 className="fz-500">Lorem ipsum dolor</h3>
            </a>

            <a href="#" className="card bg-full shadow-v-br-400">
              <h3 className="fz-500">Lorem ipsum dolor</h3>
            </a>

            <a href="#" className="card bg-full shadow-v-br-400">
              <h3 className="fz-500">Lorem ipsum dolor</h3>
            </a>

            <a href="#" className="card bg-full shadow-v-br-400">
              <h3 className="fz-500">Lorem ipsum dolor</h3>
            </a>

            <a href="#" className="card bg-full shadow-v-br-400">
              <h3 className="fz-500">Lorem ipsum dolor</h3>
            </a>

            <a href="#" className="card bg-full shadow-v-br-400">
              <h3 className="fz-500">Lorem ipsum dolor</h3>
            </a>

            <a href="#" className="card bg-full shadow-v-br-400">
              <h3 className="fz-500">Lorem ipsum dolor</h3>
            </a>

            <a href="#" className="card bg-full shadow-v-br-400">
              <h3 className="fz-500">Lorem ipsum dolor</h3>
            </a>

            <a href="#" className="card bg-full shadow-v-br-400">
              <h3 className="fz-500">Lorem ipsum dolor</h3>
            </a>

            <a href="#" className="card bg-full shadow-v-br-400">
              <h3 className="fz-500">Lorem ipsum dolor</h3>
            </a>

            <a href="#" className="card bg-full shadow-v-br-400">
              <h3 className="fz-500">Lorem ipsum dolor</h3>
            </a>

            <a href="#" className="card bg-full shadow-v-br-400">
              <h3 className="fz-500">Lorem ipsum dolor</h3>
            </a>
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
