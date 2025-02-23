/*
 * @file        app/api/health/route.ts
 * @author      David @dvhsh (https://dvh.sh)
 * @description Simple health check endpoint using App Router
 *
 * @project     loom.software
 * @created     Feb 23, 2025
 */

import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json(
    {
      status: 'healthy',
      timestamp: new Date().toISOString(),
      environment: process.env.NODE_ENV,
      version: process.env.npm_package_version,
    },
    { status: 200 }
  );
}

// Path: src/app/api/health/route.ts
