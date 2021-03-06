/* eslint-disable class-methods-use-this */
import { Request, Response } from "express";

import knex from "../database/connection";

class ItemController {
  async index(_request: Request, response: Response) {
    const items = await knex("items").select("*");

    const serializedItems = items.map((item) => {
      return {
        id: item.id,
        title: item.title,
        imageUrl: `http://localhost:3333/uploads/${item.image}`,
      };
    });

    response.json(serializedItems);
  }
}

export default ItemController;
