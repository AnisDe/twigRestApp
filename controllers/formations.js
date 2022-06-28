const Formation = require('../models/formation');


module.exports.showFormations = async (req, res) => {
   
   
        const formations = await Formation.find({})
        res.render('formations/index', { formations })
}

module.exports.addFormationForm = (req, res) => {
    res.render('formations/new')
}

module.exports.addFormation = async (req, res) => {
    console.log(req.body)
    
    const newFormation = new Formation(req.body);
   
    newFormation.createdAt = Date.now()
    await newFormation.save();
    res.redirect(`/formations`)
}



module.exports.editForm = async (req, res) => {
    const { id } = req.params;
    const formation = await Formation.findById(id);
    res.render('formations/edit', { formation })
}

module.exports.updateFormation =  async (req, res) => {
    const { id } = req.params;
    const formation = await Formation.findById(id);
    formation.title = req.body.title
    formation.description = req.body.description
    formation.startAt = req.body.startAt
    formation.endAt = req.body.endAt
    formation.updatedAt =  Date.now()
    await formation.save();

    res.redirect(`/formations/`);
}

module.exports.deleteFormation =  async (req, res) => {
    const { id } = req.params;
    console.log({ id })
    const deletedFormation = await Formation.findByIdAndDelete(id);
    res.redirect('/formations');
}