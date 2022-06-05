const getTime = () => {
  const date = new Date()
  const day = date.toLocaleDateString().replace(/\//g, '-')
  const hour = date.getHours().toString().padStart(2, '0')
  const minute = date.getMinutes().toString().padStart(2, '0')
  const second = date.getSeconds().toString().padStart(2, '0')

  return `${day} ${hour}-${minute}-${second}`
}

export default getTime
