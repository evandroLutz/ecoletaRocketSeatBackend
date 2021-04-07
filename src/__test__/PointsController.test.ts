import request from "supertest";

import express from "express";
import cors from "cors";

import path from "path";
import routes from "../routes";

const app = express();

app.use(cors());

app.use(express.json());

app.use(routes);

app.use("/uploads", express.static(path.resolve(__dirname, "..", "uploads")));

const server = app.listen(3444);

describe("POST /users", () => {
  it("should responds with json", (done) => {
    request(app)
      .post("/points")
      .send({
        name: "teste",
        email: "teste@teste.com.br",
        whatsapp: "5199999999",
        latitude: 0,
        longitude: 0,
        city: "Porto Alegre",
        uf: "RS",
        items: [1, 2],
      })
      .expect("Content-Type", /json/)
      .end(function getError(err) {
        if (err) return done(err);
        return done();
      });
    server.close();
  });
});

describe("POST /users", () => {
  it("should responds with status 200", (done) => {
    request(app)
      .post("/points")
      .send({
        name: "teste",
        email: "teste@teste.com.br",
        whatsapp: "5199999999",
        latitude: 0,
        longitude: 0,
        city: "Porto Alegre",
        uf: "RS",
        items: [1, 2],
      })
      .expect(200)
      .end(function getError(err) {
        if (err) return done(err);
        return done();
      });
    server.close();
  });
});

describe("POST /users", () => {
  it("should return message não registrado", (done) => {
    request(app)
      .post("/points")
      .send({
        name: "teste",
        email: "teste@teste.com.br",
      })
      .expect(
        {
          error: "requisição incompleta",
        },
        done
      );
    server.close();
  });
});
