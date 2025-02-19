const jwt = require('jsonwebtoken');
const User = require('../database/models/User');

const UserController = {
    async create(req, res){
        try{
            const user = await User.create({...req.body});
            return res.status(201).json(user);
        }catch(error){
            res.status(500).json({message: error})
        }
    },
    async login(req, res){
        const {email, password} = req.body;
        try{
            const user = User.findOne({where: {email: email}});
            if(!user){
                return res.status(400).json({message: 'Invalid Data'})
            }

            const isPasswordValid = brcypt.compareSync(password, user.password);
            if(!isPasswordValid){
                return res.status(400).json({message: 'Invalid Data'});
            }

            const token = jwt.sign(
                {
                    email: user.email,
                    role: user.role
                },
                'secret key trops bien sécrète',
                {
                    expiresIn: '1h'
                }
            );

            return res.status(200).json({token});
        }catch(error){
            res.status(500).json({message: error})
        }
    }
}

module.exports = UserController;