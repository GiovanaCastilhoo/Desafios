import { Router } from 'express';
import { sign } from 'jsonwebtoken';

import { User } from './models/User';

import { Sala } from './models/salas';

import { Agenda } from './models/agendas';

import isAuthenticated from './middlewares/isAuthenticated';

const routes = Router();

routes.get('/', (req, res) => {
    return res.json();
});

routes.get('/room', async (req, res) => {
    const date = req.query.date;

    const agendas = await Agenda.findAll({ where: { estado: 'Disponível', data: date } })          

    return res.json({ agendas });
})

routes.get('/room/:id', async (req, res) =>  {
    const id = req.params.id;

    const sala = await Sala.findOne({ where: { id } });
    
    if (!sala) return res.status(400).json({ err: 'Sala não encontrada' }) 
      
    return res.json({ sala });
})

routes.post('/auth', async (req, res)  => {
    const email = req.body.email;
    const password = req.body.password;

    const user = await User.findOne({ where: { email } });

    if (!user) return res.status(400).json({ err: 'Usuário não encontrado' })

    if (!user.comparePassword(password)) return res.status(401).json({ err: 'Credenciais invalidas' })

    // Gerar token
    const token = sign({ id: (user.toJSON() as any).id }, process.env.JWT_SECRET, { expiresIn: '7d' });

    return res.json({ token });
})  

routes.get('/schedule/:roomId', async (req, res) => {
    const roomId = req.params.roomId;    

    const agendas = await Agenda.findAll({
        where: { 
            estado: 'Disponível',
            sala_id: roomId,
        }  
    }) 

    return res.json({ agendas });
})

routes.post('/schedule', isAuthenticated, async (req: any, res) => {
 
    const body = req.body;  

    const agenda = await Agenda.findOne({ where: { 
        estado: 'Disponível',
        periodo: body.periodo,
        sala_id: body.sala_id,
        data: body.data,
    } });

    if (!agenda) return res.status(400).json({ err: 'Já reservado, escolha outra data!' })

    agenda.set('estado', 'Reservada');
    agenda.set('usuario_id', req.userId);

    await agenda.save();
    
    return res.json(agenda);
})


export default routes;