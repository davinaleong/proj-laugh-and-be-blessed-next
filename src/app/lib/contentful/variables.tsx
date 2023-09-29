import { LibContentfulEnvVarsInterface } from "./interfaces"

export const CONTENTFUL_CDN: string = `${process.env.CONTENTFUL_CDN}`
export const CONTENTFUL_SPACE_ID: string = `${process.env.CONTENTFUL_SPACE_ID}`
export const CONTENTFUL_ENVIRONMENT_ID: string = `${process.env.CONTENTFUL_ENVIRONMENT_ID}`
export const CONTENTFUL_ACCESS_TOKEN: string = `${process.env.CONTENTFUL_ACCESS_TOKEN}`
export const CONTENT_TYPE_ID: string = `${process.env.CONTENT_TYPE_ID}`

// https://cdn.contentful.com/spaces/9v840dm5l6au/environments/master/entries
export const CONTENTFUL_DELIVERY_API_URL: string = `${CONTENTFUL_CDN}/spaces/${CONTENTFUL_SPACE_ID}/environments/${CONTENTFUL_ENVIRONMENT_ID}/entries`

const LibContentfulEnvVars: LibContentfulEnvVarsInterface = {
  CONTENTFUL_CDN,
  CONTENTFUL_SPACE_ID,
  CONTENTFUL_ENVIRONMENT_ID,
  CONTENTFUL_ACCESS_TOKEN,
  CONTENT_TYPE_ID,
  CONTENTFUL_DELIVERY_API_URL,
}

export default LibContentfulEnvVars
