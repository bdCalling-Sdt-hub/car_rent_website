import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const year = searchParams.get("year");

  if (!year) {
    return NextResponse.json(
      { error: "Missing 'year' query parameter" },
      { status: 400 }
    );
  }

  try {
    // Fetch data from the Car Query API
    // const response = await fetch(`https://www.carqueryapi.com/api/0.3/?year=${year}`);
    const response = await fetch(`https://www.carqueryapi.com/api/0.3/?callback=?&cmd=getMakes&year=${year}`);
    console.log(response);
    const data = await response.text();

    // Return the response to the client
    return new NextResponse(data, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*", 
      },
    });
  } catch (error) {
    console.error("Error fetching data from Car Query API:", error);
    return NextResponse.json(
      { error: "Failed to fetch data from Car Query API"  },
      { status: 500 }
    );
  }
}
