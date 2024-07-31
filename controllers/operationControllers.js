import Operation from "../models/Operation.js";

const getOperations = async (req, res) => {
    try {
        const operations = await Operation.find({ creator: req.usuario._id });
        res.json(operations);
    } catch (error) {
        res.status(500).json({ message: 'Error getting operations', error });
    }
};

const newOperation = async (req, res) => {
    const operation = new Operation(req.body);
    operation.creator = req.usuario._id;

    try {   
        const operationSaved = await operation.save();
        res.json(operationSaved);
    } catch (error) {
        console.log(error);
    };
};

const deleteOperation = async (req, res) => {
    const { id } = req.params;
  
    try {
      const operation = await Operation.findById(id);
  
      if (!operation) {
        const error = new Error('Project not found');
        return res.status(404).json({ msg: error.message });
      }
  
      if (operation.creator.toString() !== req.usuario._id.toString()) {
        const error = new Error('Invalid action');
        return res.status(401).json({ msg: error.message });
      }
  
      operation.isDeleted = true;
      await operation.save();
  
      res.json({ msg: `Project whose result is ${operation.calcResult} successfully deleted` });
    } catch (error) {
      return res.status(500).json({ msg: 'Error deleting project', error });
    }
  };


export {
  getOperations,
  newOperation,
  deleteOperation,
}