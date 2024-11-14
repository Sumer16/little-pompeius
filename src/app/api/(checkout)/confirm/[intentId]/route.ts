import { NextRequest, NextResponse } from 'next/server';

import { prisma } from '@/utils/connect';

export const PUT = async (req: NextRequest, { params }: { params: { intentId: string } }) => {
  const { intentId } = await params;

  // Check if intentId is valid
  if (!intentId) {
    return NextResponse.json({ message: 'Missing intent ID' }, { status: 400 });
  }

  try {
    await prisma.order.update({
      where: {
        intent_id: intentId,
      },
      data: { status: 'Being prepared!' },
    });

    return new NextResponse(JSON.stringify({ message: 'Teri Maaya Chode sab milke' }), { status: 200 });
  } catch (err) {
    console.error(err);
    return new NextResponse(JSON.stringify({ message: 'Something went wrong!' }), { status: 500 });
  }
};
