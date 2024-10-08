import { NextResponse } from "next/server";
import { connectToDatabase } from "../../../lib/db"; // Asegúrate de ajustar la ruta según sea necesario

export async function POST(request) {
  const body = await request.formData();
  const name = body.get("name");
  const price = parseFloat(body.get("price"));
  const description = body.get("description");
  const portionFull = parseInt(body.get("portionFull"));
  const portionHalf = parseInt(body.get("portionHalf"));
  const pricePerGram = parseFloat(body.get("pricePerGram"));
  const image = body.get("image");

  const db = await connectToDatabase();

  // Aquí debes agregar la lógica para guardar los datos en la base de datos, por ejemplo:
  const newProduct = {
    name,
    price,
    description,
    portionFull,
    portionHalf,
    pricePerGram,
    image,
  };

  try {
    const result = await db.collection("products").insertOne(newProduct);
    return NextResponse.json(result, { status: 201 });
  } catch (error) {
    console.error("Error inserting product:", error);
    return NextResponse.json(
      { message: "Error inserting product" },
      { status: 500 }
    );
  }
}

export async function GET(request) {
  const db = await connectToDatabase();

  try {
    const products = await db.collection("products").find({}).toArray();
    return NextResponse.json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    return NextResponse.json(
      { message: "Error fetching products" },
      { status: 500 }
    );
  }
}

// Para las actualizaciones, debes agregar el manejo de PUT y DELETE como lo consideres necesario.
