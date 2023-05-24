export const querys = {

    save: 'INSERT INTO Articulos VALUES (@titulo, @contenido, @imagen, @fecha)',

    getArticles: 'SELECT * FROM Articulos ORDER BY fecha DESC',

    getArticlesLast: 'SELECT TOP 5 id, titulo, contenido, file0, fecha FROM Articulos ORDER BY fecha DESC',

    getArticleId: 'SELECT * FROM Articulos WHERE id = @id',

    delete: 'DELETE FROM Articulos WHERE id = @id',

    update: 'UPDATE Articulos SET titulo = @titulo, contenido = @contenido, file0 = @imagen, fecha = @fecha WHERE id = @id',

    uploadId: 'UPDATE Articulos SET titulo = @titulo, contenido = @contenido, file0 = @imagen, fecha = @fecha WHERE id = @id',

    search: 'SELECT * FROM Articulos WHERE titulo LIKE @dato OR contenido LIKE @dato'

}