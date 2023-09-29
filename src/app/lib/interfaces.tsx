import { LibContentfulInterface } from "./contentful/interfaces"
import { LibLogInterface } from "./log/interfaces"

export interface LibInterface {
  LibContentful: LibContentfulInterface
  LibLog: LibLogInterface
}
