import {Request, Response} from 'express';

import CreateCourseService from './CreateCourseService';

export function createCourse(request: Request, response: Response) {
  CreateCourseService.execute({
    name: "Node js",
    duration: 10,
    educator: "Teste"
  })

  return response.send()
}