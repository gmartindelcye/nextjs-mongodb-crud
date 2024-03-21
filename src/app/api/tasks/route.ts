import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({
    message: "Getting Tasks...",
  });
}

export function POST() {
  return NextResponse.json({
    message: "Creating Task...",
  });
}