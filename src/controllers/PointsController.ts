/* eslint-disable consistent-return */
/* eslint-disable class-methods-use-this */
import { Request, Response } from "express";

import knex from "../database/connection";

import { isValidName } from "../services/nameValidator";

import { isValidEmail } from "../services/emailValidator";

class PointsController {
  async index(request: Request, response: Response) {
    const { city, uf, items } = request.query;

    const parsedItems = String(items)
      .split(",")
      .map((item) => Number(item.trim()));

    const points = await knex("points")
      .join("point_items", "points.id", "=", "point_items.point_id")
      .whereIn("point_items.item_id", parsedItems)
      .where("city", String(city))
      .where("uf", String(uf))
      .distinct()
      .select("points.*");

    return response.json(points);
  }

  async show(request: Request, response: Response) {
    const { id } = request.params;

    const point = await knex("points").where("id", id).first();

    if (!point) {
      return response.status(400).json({ message: "Point not found." });
    }

    const items = await knex("items")
      .join("point_items", "items.id", "=", "point_items.item_id")
      .where("point_items.point_id", id)
      .select("items.title");

    return response.json({
      point,
      items,
    });
  }

  async create(request: Request, response: Response) {
    const {
      name,
      email,
      whatsapp,
      latitude,
      longitude,
      city,
      uf,
      items,
    } = request.body;

    if (!isValidName(name) || !isValidEmail(email)) {
      return;
    }

    const trx = await knex.transaction();

    const point = {
      image: "image-fake",
      name,
      email,
      whatsapp,
      latitude,
      longitude,
      city,
      uf,
    };

    try {
      const insertedIds = await trx("points").insert(point);
      const pointId = insertedIds[0];

      const pointItems = items.map((itemId: number) => {
        return {
          item_id: itemId,
          point_id: pointId,
        };
      });

      await trx("point_items").insert(pointItems);

      await trx.commit();

      return response.json({
        id: pointId,
        ...point,
      });
    } catch {
      return response.json({
        error: "requisi????o incompleta",
      });
    }
  }
}

export default PointsController;
