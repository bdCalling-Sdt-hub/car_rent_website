import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const make = searchParams.get("make");
  const year = searchParams.get("year");

  if (!make || !year) {
    return NextResponse.json(
      { error: "Missing 'make' or 'year' query parameter" },
      { status: 400 }
    );
  }

  try {
    const response = await fetch(
      `https://www.carqueryapi.com/api/0.3/?callback=?&cmd=getModels&make=${make}&year=${year}`
    );
    const data = await response.text();

    return new NextResponse(data, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
  } catch (error) {
    console.error("Error fetching data from Car Query API:", error);
    return NextResponse.json(
      { error: "Failed to fetch data from Car Query API" },
      { status: 500 }
    );
  }
}
