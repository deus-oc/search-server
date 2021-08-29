const Schema = require('../models/Schema');

// description - get all the companies data related to queried company literals
// route - GET /search 
// access - public
// request - contain company names as query
exports.getSearchData = async (req,res,next) => {
    try{
        const searchStr = req.query.q;
        const searchData = await Schema.find({Name: {$regex: searchStr, $options: 'i'}}).select('Name website');
        return res.status(200).json({
            success: true,
            count: searchData.length,
            data: searchData
        }) 
    } catch (err){
        return res.status(500).json({
            success: false,
            error: 'Server error'
        }) 
    }
}


// description - get all info on a certain company
// route - GET /search with query parameters
// access - public
// request - contain single company mongodb document id as param
exports.getIddata = async (req,res,next) => {
    try{
        const _id = req.params.id;
        const companyData = await Schema.findById(_id);
        if(!companyData){
            return res.status(404).json({
                success: false,
                error: 'No object id found'
            })
        }

        return res.status(200).json({
            success: true,
            data: companyData
        }) 
    } catch (err){
        return res.status(500).json({
            success: false,
            error: 'Server error'
        }) 
    }

}