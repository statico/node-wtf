import fetch from "node-fetch"

;(async () => {
  const res = await fetch("https://statico.link/ip")
  const text = await res.text()
  console.log(text)
})().then(() => {})
