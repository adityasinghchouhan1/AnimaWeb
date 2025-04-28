const Sliderdata = require('../Model/SliderModel')

const SliderDatafunction = async (req, res) => {
  try {
    const data = new Sliderdata({
      image: req.file.filename,
      Title: req.body.Title,
      description: req.body.description,
    })
    await data.save()
  } catch (err) {
    console.error(err)
  }
}

const getSliderDatafunction = async (req, res) => {
  try {
    const data = await Sliderdata.find()
    res.status(200).json(data)
  } catch (err) {
    console.error(err)
  }
}

const SliderDataDelete = async (req, res) => {
  const { id } = req.params
  try {
    const data = await Sliderdata.findByIdAndDelete(id)
    if (!data) {
      return res.status(404).send('Data not found')
    }

    res.status(200).json({ message: 'Deleted successfully', deletedData: data })
  } catch (err) {
    console.log(err)
  }
}

module.exports = { SliderDatafunction, getSliderDatafunction, SliderDataDelete }
