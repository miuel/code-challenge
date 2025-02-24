import { NextResponse } from "next/server";
import mockData from "@/data/mockData.json";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const search = searchParams.get("search")?.toLowerCase().trim() || "";
  if (search.length > 0) {

    const filteredCategories = mockData.categories.filter(category =>
      category.pageTitle.toLowerCase().includes(search)
    );


    if (filteredCategories.length === 0) {
      
      return NextResponse.json([{
        id: 0,
        pageType: "Error - 404",
        pageTitle: "Not Found",
        isActive: false,
        content: "The category you are looking for does not exist. Please try again."
      }]);
    }
    return NextResponse.json(filteredCategories);
  }
  return NextResponse.json(mockData);
}
