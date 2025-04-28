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
    const data = await new Sliderdata.findByIdAndDelete(id)
    res.status(200).json(data)
  } catch (err) {
    console.log(err)
  }
}

module.exports = { SliderDatafunction, getSliderDatafunction, SliderDataDelete }
