import mysql from "mysql2/promise";

export async function query({
  query,
  values = [],
}: {
  query: string;
  values: (number | string)[];
}) {
  const dbconnection = await mysql.createConnection({
    host: "127.0.0.1",
    database: "linkup",
    user: "root",
    password: "",
  });
  try {
    const [results] = await dbconnection.execute(query, values);
    dbconnection.end();
    return results;
  } catch (error) {
    return error;
  }
}
