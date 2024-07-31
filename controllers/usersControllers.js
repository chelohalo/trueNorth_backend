import Usuario from "../models/User.js";
import generateId from "../helpers/generateId.js";
import generateJWT from "../helpers/generateJWT.js";

const register = async (req, res) => {
    const { email } = req.body;
    const existeUsuario = await Usuario.findOne({ email });

    if(existeUsuario){
        const error = new Error ('User already exist') 
        return res.status(400).json({ msg: error.message})
    }

    try{
        const usuario = new Usuario(req.body);
        usuario.token = generateId();
        await usuario.save();

        res.json({msg: `User ${email} successfully created`});
    } catch(error) {
        console.log(error);
    };
} 

const authenticate = async (req, res) => {
  const { email, password } = req.body;

  const usuario = await Usuario.findOne({ email });
  if (!usuario) {
    const error = new Error('User does not exist');
    return res.status(404).json({msg: error.message});
  };
  
  if (await usuario.verifyPassword(password)) {
    res.json({      
      _id: usuario._id, 
    name: usuario.name,
    email: usuario.email,
    confirmado: usuario.confirmado,
    token: generateJWT(usuario._id),
    });
  } else {
    const error = new Error('Authentication data is incorrect');
    return res.status(403).json({ msg: error.message });
  }
}

const profile = async (req, res) => {
  const { usuario } = req
  res.json(usuario);
};

const updateBalance = async (req, res) => {
  const { userId, amount } = req.body;

  try {
      const user = await Usuario.findById(userId);
      if (!user) {
          return res.status(404).json({ msg: 'User not found' });
      }
      user.credit -= amount;
      await user.save();
      res.json(user);
  } catch (error) {
      console.log(error);
      res.status(500).json({ msg: 'Server error' });
  }
};

export {
    register,
    authenticate,
    profile,
    updateBalance,
};


