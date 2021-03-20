import { Response, Request } from "express";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  handle(request: Request, response: Response): Response {
    // Complete aqui
    const { name, email } = request.body;
    let user = {};
    try {
      user = this.createUserUseCase.execute({ name, email });
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }

    return response.status(201).json(user);
  }
}

export { CreateUserController };
