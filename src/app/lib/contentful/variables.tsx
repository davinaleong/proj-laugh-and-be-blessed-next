import { LibContentfulEnvVarsInterface } from "./interfaces"

export const CONTENTFUL_SPACE_ID: string = `${process.env.CONTENTFUL_SPACE_ID}`
export const CONTENTFUL_ENVIRONMENT_ID: string = `${process.env.CONTENTFUL_ENVIRONMENT_ID}`
export const CONTENTFUL_ACCESS_TOKEN: string = `${process.env.CONTENTFUL_ACCESS_TOKEN}`
export const CONTENT_TYPE_ID: string = `${process.env.CONTENT_TYPE_ID}`

const LibContentfulEnvVars: LibContentfulEnvVarsInterface = {
  CONTENTFUL_SPACE_ID,
  CONTENTFUL_ENVIRONMENT_ID,
  CONTENTFUL_ACCESS_TOKEN,
  CONTENT_TYPE_ID,
}

export default LibContentfulEnvVars
