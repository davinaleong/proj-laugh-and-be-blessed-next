import styles from "./page.module.css"
import { Config } from "./config"

import { CardComponent } from "./components/card"
import { FooterComponent } from "./components/footer"
import { HeaderComponent } from "./components/header"
import { HelpComponent } from "./components/help"

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

      <div className="modal">
        <div className="modal__dialog | position-relative">
          <button className="btn btn-slide position-absolute positioning-right positioning-top shadow-v-br-400">
            Close
          </button>

          <header className="border-v-b-solid-50-gray-50 p-v-y-400">
            <h2 className="modal__header__heading | fz-500">Lorem Ipsum</h2>
          </header>

          <div className="flow p-v-t-400">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat
              inventore magni ipsa veritatis dolorem totam vero nulla veniam
              laboriosam? Rerum, sunt incidunt ipsum suscipit, itaque,
              repudiandae porro excepturi assumenda vitae aperiam eligendi
              aliquid quia nemo. Optio eaque cupiditate voluptatem rem beatae.
              Corrupti quasi nemo minus eos omnis architecto aliquid quaerat.
            </p>

            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga
              dicta magni, vero provident animi quam. Neque temporibus facere
              modi. Corrupti ipsa nihil porro deserunt quae cupiditate ducimus!
              Dolor, veritatis maiores.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
