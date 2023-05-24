import { log } from "console";
import { getConnection, sql, querys } from "../database/export";

import fs from "fs";
import path from "path";

// import Article from '../models/article';

export const Controller = {
  getArticles: async (req, res) => {
    try {
      const pool = await getConnection();
      const result = await pool.request().query(querys.getArticles);

      res.send({ articles: result.recordset });
    } catch (error) {
      res.status(500).send("Error al realizar la petición...");
    }
  },

  getArticlesLast: async (req, res) => {
    try {
      const pool = await getConnection();
      const result = await pool.request().query(querys.getArticlesLast);

      res.send({ articles: result.recordset });
    } catch (error) {
      res.status(500).send("Error al realizar la petición...");
    }
  },

  save: async (req, res) => {
    try {
      const { titulo, contenido } = req.body;
      let { file0 } = req.body;
      if (titulo == null || contenido == null) {
        return res
          .status(400)
          .json({ msg: "Por favor llenar todos los campos!!" });
      }

      const pool = await getConnection();
      pool
        .request()
        .input("titulo", sql.VarChar, titulo)
        .input("contenido", sql.VarChar, contenido)
        .input("imagen", sql.VarChar, file0)
        .input("fecha", sql.DateTime, new Date())
        .query(querys.save);

      res.status(200).send({
        titulo,
        contenido,
        file0,
      });
    } catch (error) {
      res.status(500).send({
        msg: "Error al realizar la petición...",
      });
    }
  },

  getArticleId: async (req, res) => {
    try {
      const { id } = req.params;

      const pool = await getConnection();
      const result = await pool
        .request()
        .input("id", id)
        .query(querys.getArticleId);

      res.send({ article: result.recordset });
    } catch (error) {
      res.send("Error al realizar la petición...");
    }
  },

  delete: async (req, res) => {
    try {
      const { id } = req.params;

      const pool = await getConnection();
      const result = await pool.request().input("id", id).query(querys.delete);

      res.send( id );
    } catch (error) {
      res.send("Error al realizar la petición...");
    }
  },

  update: async (req, res) => {
    try {
      const { id } = req.params;
      const { titulo, contenido } = req.body;

      let { file0 } = req.body;

      const pool = await getConnection();
      const result = await pool
        .request()
        .input("id", id)
        .input("titulo", titulo)
        .input("contenido", contenido)
        .input("imagen", file0)
        .input("fecha", new Date())
        .query(querys.update);

      res.send({ msg: "Articulo actualizado correctamente!" });
    } catch (error) {
      res.send({ mdg: "Error, el articulo probablemente no existe..." });
    }
  },

  upload: async (req, res) => {
    // Configurar modulo Connect Multiparty en router

    // Recoger el fichero de la petición

    const file_err = "Imagen no subida...";

    if (!req.files) {
      return res.send(file_err);
    }
    // Conseguir nombre y extension del archivo
    const file_path = req.files.file0.path;
    const file_split = file_path.split("\\");

    // Obtener nombre del archivo
    const file_name = file_split[3];

    // Obtener extensión del archivo
    const ext_split = file_name.split(".");
    const file_ext = ext_split[1];

    // Comprobar la ext, si es valida borra el fichero
    if (
      file_ext != "png" &&
      file_ext != "jpg" &&
      file_ext != "jepg" &&
      file_ext != "gif"
    ) {
      //Borrar archivo si la ext es invalida
      fs.unlink(file_path, (err) => {
        res.send("La extensión de la imagen no es valida...");
      });
    } else {
      //Busca el articulo, asigna nombre a la img y actualiza.
      var articleId = req.params.id;

      try {
        if (articleId) {
          const { id } = req.params;
          const { titulo, contenido } = req.body;
          const file = file_name;

          const pool = await getConnection();
          const result = await pool
            .request()
            .input("id", id)
            .input("titulo", titulo)
            .input("contenido", contenido)
            .input("imagen", file)
            .input("fecha", new Date())
            .query(querys.uploadId);

          res.send("Imagen guardada...");
        } else {
          res.send({
            msg: "Imagen guardada...",
            image: file_name,
          });
        }
      } catch (error) {
        res.send("Error, no se pudo guardar la imagen...");
      }
    }
  },

  getImage: async (req, res) => {
    const file = req.params.image;
    const path_file = "src/upload/articles/" + file;

    fs.exists(path_file, (exists) => {
      if (exists) {
        res.sendFile(path.resolve(path_file));
      } else {
        res.send("La imagen no existe...");
      }
    });
  },

  search: async (req, res) => {
    try {
      //Dato a buscar
      const { search } = req.params;
      const pool = await getConnection();
      const result = await pool
        .request()
        .input("dato", `%${search}%`)
        .query(querys.search);

      if (result.recordset == "") {
        res.send("No hay artuculos que coincidan con la búsqueda...");
      } else {
        res.send({ articles: result.recordset });
      }
    } catch (error) {
      res.send("Error al realizar la petición...");
    }
  },
};
