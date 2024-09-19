import { connect } from "mongoose";

export const connectToDatabase = async () => {
  //Ene function mongoDB-tei holboj ugnu
  await connect(
    "mongodb+srv://ochirtor:XWU3fn9FipaUEkEN@cluster0.serqh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  );

  console.log("Connected to database");
};
