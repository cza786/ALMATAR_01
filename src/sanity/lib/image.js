import { createImageUrlBuilder } from '@sanity/image-url'
import { dataset, projectId } from '../env'

const imageBuilder = createImageUrlBuilder({
  projectId: projectId || '',
  dataset: dataset || '',
})

export const urlForImage = (source) => {
  if (!source || (!source.asset && !source._ref)) return null
  try {
    return imageBuilder.image(source).auto('format').fit('max')
  } catch (err) {
    return null
  }
}

export const getImageUrl = (source, fallback = '') => {
  if (!source) return fallback
  if (typeof source === 'string') return source
  const built = urlForImage(source)
  return built ? built.url() : fallback
}
