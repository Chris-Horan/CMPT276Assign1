const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .get('/', (req, res) => res.render('.'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
