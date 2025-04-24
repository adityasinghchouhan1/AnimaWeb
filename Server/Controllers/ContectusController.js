const contectus = require('../Model/ContectUsSchema')

const ContectusControllerdata = async (req, res) => {
  console.log(req.body)
  const { name, mail, contact, message } = req.body
  try {
    const data = new contectus({ name, mail, contact, message })

    await data.save()
    res.status(200).json({ message: 'Message received' })
  } catch (err) {
    console.log(err)
  }
}

const getContectusdata = async (req, res) => {
  try {
    const getdata = contectus.find({})
  } catch (err) {
    console.error(err)
  }
}
module.exports = { ContectusControllerdata, getContectusdata }
