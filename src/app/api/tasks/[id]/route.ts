import { NextResponse } from "next/server";

export function GET(request: Request, { params }) {
  return NextResponse.json({
    message: `getting task ${params.id}...`,
  });
}

export function DELETE(request: Request, { params }) {
  return NextResponse.json({
    message: `deleting task ${params.id}...`,
  });
}

export function PUT(request: Request, { params }) {
  return NextResponse.json({
    message: `updating task ${params.id}...`,
  });
}


