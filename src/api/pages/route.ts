import { NextResponse } from "next/server";
import mockData from "@/data/mockData.json";


  export async function getCategories() {
    try {
      // Simula una espera para practicar async/await
      await new Promise((resolve) => setTimeout(resolve, 500));
  
      return mockData;
    } catch (error) {
      throw new Error("Error al obtener categorías");
    }
  }