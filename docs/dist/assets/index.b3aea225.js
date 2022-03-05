const s = function () {
  const t = document.createElement('link').relList
  if (t && t.supports && t.supports('modulepreload')) return
  for (const e of document.querySelectorAll('link[rel="modulepreload"]')) i(e)
  new MutationObserver((e) => {
    for (const o of e)
      if (o.type === 'childList')
        for (const r of o.addedNodes)
          r.tagName === 'LINK' && r.rel === 'modulepreload' && i(r)
  }).observe(document, { childList: !0, subtree: !0 })
  function l(e) {
    const o = {}
    return (
      e.integrity && (o.integrity = e.integrity),
      e.referrerpolicy && (o.referrerPolicy = e.referrerpolicy),
      e.crossorigin === 'use-credentials'
        ? (o.credentials = 'include')
        : e.crossorigin === 'anonymous'
        ? (o.credentials = 'omit')
        : (o.credentials = 'same-origin'),
      o
    )
  }
  function i(e) {
    if (e.ep) return
    e.ep = !0
    const o = l(e)
    fetch(e.href, o)
  }
}
s()
const c = () => +new Date(),
  n = c(),
  u = () => {
    console.log('hello, rollup'), console.log(n)
  }
u()
console.log(n)
document.body.innerHTML = n.toFixed()
