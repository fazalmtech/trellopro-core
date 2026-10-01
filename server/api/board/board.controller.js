const List = require('../../models/List');
const Card = require('../../models/Card');


// 1. READ: Fetch the entire Kanban board structure (Columns + Tasks)
const getBoardData = async (req,res) => {
    try {
    const lists = await List.find().sort('position');
    const cards = await Card.find().sort('position');
    
    res.status(200).json({lists, cards});
} catch(error) {
    res.status(500).json({error: 'Failed to aggregate workspace data metrics' + error.message})
    }
}

// 2. CREATE: Initialize and preserve a new vertical column (List)
const createList = async (req,res) => {
    try {
        const { title, position } = req.body;

        const newList = new List({title, position});
        await newList.save();

        res.status(201).json(newList);       
    }  catch(error) {
        res.status(400).json({error: 'Database document preservation rejection: ' + error.message })
    }    
}

// 3. UPDATE: Persist Drag-and-Drop column/card spatial updates inside the database
const moveCard = async (req,res) => {
    try {
       const {cardId, newListId, newPosition } = req.body;

       const updatedCard = await Card.findByIdAndUpdate(
        cardId,
        { list: newListId, position: newPosition },
        { new: true }
       );

     res.(200).json(updatedCard);  
    } catch(error){
      res.(400).json({error: 'Index structural mutation failure: ' + error.message })
    } 
}


module.exports = {
    getBoardData,
    createList,
    moveCard
};
