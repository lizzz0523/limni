// A helpers function copy from chart.js
function controlPointCalc (c, p, n, t = 0.36) {
  p = p || c
  n = n || c

  const d01 = Math.sqrt(Math.pow(c[0] - p[0], 2) + Math.pow(c[1] - p[1], 2))
  const d12 = Math.sqrt(Math.pow(n[0] - c[0], 2) + Math.pow(n[1] - c[1], 2))

  let s01 = d01 / (d01 + d12)
  let s12 = d12 / (d01 + d12)

  s01 = isNaN(s01) ? 0 : s01
  s12 = isNaN(s12) ? 0 : s12

  const fa = t * s01
  const fb = t * s12

  return {
    cs: [c[0] + fa * (n[0] - p[0]), c[1] + fa * (n[1] - p[1])],
    ce: [c[0] - fb * (n[0] - p[0]), c[1] - fb * (n[1] - p[1])]
  }
}

export function renderBezierCurve (points) {
  return points.reduce((acc, e, i, a) => {
    if (i > 0) {
      const { cs } = controlPointCalc(a[i - 1], a[i - 2], e)
      const { ce } = controlPointCalc(e, a[i - 1], a[i + 1])
      return `${acc} C ${cs[0]},${cs[1]} ${ce[0]},${ce[1]} ${e[0]},${e[1]}`
    } else {
      return `${acc} L ${e[0]},${e[1]}`
    }
  }, '')
}
