import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import Dependents from '../models/Dependents';

export default {
  async index(request: Request, response: Response) {
    const dependentsRepository = getRepository(Dependents);

    const dependents = await dependentsRepository.find();

    return response.json(dependents);
  },

  async show(request: Request, response: Response) {
    const { id } = request.params;

    const dependentsRepository = getRepository(Dependents);

    const dependent = await dependentsRepository.findOneOrFail(id);

    return response.json(dependent);
  },


  async delete(request: Request, response: Response){
    const { id } = request.params;

    const dependentsRepository = getRepository(Dependents);

    await dependentsRepository.delete(id);

    return response.json({ message: 'Dependente Deletado'});
  },

  async create(request: Request, response: Response) {
    const {
        id,
        name,
        birthdate,
        konship_degree,
        id_functionary,
   } = request.body;
   
   const dependentsRepository = getRepository(Dependents);
   
   const requestImages = request.files as Express.Multer.File[];

   const images = requestImages.map(image => {
      return { path: image.filename}
   
  })

   const dependents = DependentsRepository.create ({
        id,
        name,
        birthdate,
        konship_degree,
        id_functionary,
        images
   });


await dependentsRepository.save(dependents);

   return response.status(201).json(Dependents);
  }

};