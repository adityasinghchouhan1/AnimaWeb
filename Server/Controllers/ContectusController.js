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
    const data = await contectus.find({})
    res.status(200).json(data)
  } catch (err) {
    console.error(err)
  }
}

const UpdateContectForm = async (req, res) => {
  try {
    const updatedata = await contectus.findByIdAndUpdate({})
    res.status(200).json(updatedata)
  } catch (err) {
    console.error(err, 'failed to update Data')
  }
}

const DeleteContectForm = async (req, res) => {
  try {
    const deldata = await contectus.findByIdAndDelete({})
    res.status(200).json(deldata)
  } catch (err) {
    console.error(err, 'failed to delete data')
  }
}
module.exports = {
  ContectusControllerdata,
  getContectusdata,
  UpdateContectForm,
  DeleteContectForm,
}
