// 上傳前壓縮：長邊縮到 1600px、轉 JPEG，盡量壓到 600KB 以下（bucket 上限 2MB）。
const MAX_EDGE = 1600
const TARGET_BYTES = 600 * 1024

export async function compressImage(file) {
  const bitmap = await createImageBitmap(file)
  const scale = Math.min(1, MAX_EDGE / Math.max(bitmap.width, bitmap.height))
  const canvas = document.createElement('canvas')
  canvas.width = Math.round(bitmap.width * scale)
  canvas.height = Math.round(bitmap.height * scale)
  canvas.getContext('2d').drawImage(bitmap, 0, 0, canvas.width, canvas.height)
  bitmap.close?.()

  let blob
  for (const quality of [0.85, 0.75, 0.65, 0.55]) {
    blob = await new Promise(resolve => canvas.toBlob(resolve, 'image/jpeg', quality))
    if (blob.size <= TARGET_BYTES) break
  }
  return blob
}
