import { NextResponse } from "next/server";
import mockData from "@/data/mockData.json";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
    const search = searchParams.get("search")?.toLowerCase() || "";

    const filteredCategories = mockData.categories.filter(category =>
        category.pageTitle.toLowerCase().includes(search)
    );

    if (search.length > 0) {
        return NextResponse.json(filteredCategories);      
    }
  return NextResponse.json(mockData);
}
/* 
export async function getArticle(slug: string) {
  try {
    
    await new Promise((resolve) => setTimeout(resolve, 500));

    const article = mockData.categories.find((category) => category.pageTitle === slug);

    return article;
  } catch (error) {
    throw new Error("Error al obtener el artículo");
  }
} */