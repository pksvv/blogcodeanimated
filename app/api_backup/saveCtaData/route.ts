export const dynamic = 'force-dynamic' // Ensure Next.js treats this as a dynamic API route

import fs from 'fs'
import path from 'path'
import { NextResponse } from 'next/server'

type FormData = {
  name: string
  email: string
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as FormData

    const filePath = path.join(process.cwd(), 'cta_captured_data.json')

    let existingData: FormData[] = []
    if (fs.existsSync(filePath)) {
      const fileData = fs.readFileSync(filePath, 'utf-8')
      existingData = JSON.parse(fileData || '[]')
    }

    const newData = [...existingData, body]

    fs.writeFileSync(filePath, JSON.stringify(newData, null, 2))

    return NextResponse.json({ message: 'Data saved successfully' }, { status: 200 })
  } catch (error) {
    return NextResponse.json(
      {
        message: 'Failed to save data',
        error: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    )
  }
}

// Explicitly export OPTIONS to satisfy TypeScript
export function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: {
      Allow: 'POST, OPTIONS',
    },
  })
}
