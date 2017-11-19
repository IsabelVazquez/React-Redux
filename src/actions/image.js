import ImageApi from './imageAPI';

export function likeImage(credentials) {
  return ImageApi.createImage(credentials)
}
