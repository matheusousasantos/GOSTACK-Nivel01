import { Request, Response } from 'express';
import createUser from './services/CreateUser';

export default function helloWord(request: Request, response: Response) {
    createUser({ 
        name: 'Matheus Sousa',
        password: '123456',
        email: 'matheus@gmail.com',
        techs: [
            'Node', 
            'React JS', 
            'React Native', 
            {title: 
            'Java', 
            experience: 100
            }
        ]     
    });
}