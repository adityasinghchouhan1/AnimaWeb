const ServicesSchema = require('../Model/ServicesModel')

const ServicesData = async (req, res) => {
  try {
    const data = new ServicesSchema({
      file: req.file.filename, // Corrected here
      Title: req.body.Title,
      description: req.body.description, // Corrected typo (you wrote desdescription)
    })
    await data.save()
    res.status(201).json({ message: 'Image uploaded successfully' })
  } catch (err) {
    console.log(err)
    res
      .status(500)
      .json({ message: 'Something went wrong', error: err.message })
  }
}

const Servisesget = async (req, res) => {
  try {
    const data = await ServicesSchema.find()
    res.status(200).json(data)
  } catch (err) {
    console.error(err)
    res
      .status(500)
      .json({ message: 'Something went wrong', error: err.message })
  }
}

module.exports = { ServicesData, Servisesget }
