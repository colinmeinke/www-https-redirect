const express = require('express')

const app = express()

app.get('*', ({ host, url }, res) => {
  res.redirect(301, `https://${ host.replace('www.', '') }${ url }`)
})

app.listen(3000)
