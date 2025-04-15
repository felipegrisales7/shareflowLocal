import { useState } from 'react'

export function PixelGrid({ rows = 6, cols = 9, soldPixels = [3, 14, 20] }) {
  const total = rows * cols

  const [selected, setSelected] = useState([])

  const isSold = (index) => soldPixels.includes(index)
  const isSelected = (index) => selected.includes(index)

  const togglePixel = (index) => {
    if (isSold(index)) return

    setSelected((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    )
  }

  return (
    <div className="pixel-grid-wrapper">
      {Array.from({ length: total }).map((_, index) => {
        const status = isSold(index)
          ? 'sold'
          : isSelected(index)
          ? 'selected'
          : 'available'

        return (
          <button
            key={index}
            className={`pixel ${status}`}
            onClick={() => togglePixel(index)}
            disabled={status === 'sold'}
            aria-label={`Pixel ${index + 1}`}
          />
        )
      })}
    </div>
  )
}
