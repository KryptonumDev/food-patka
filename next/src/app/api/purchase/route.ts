import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import Stripe from 'stripe';
import sanityFetch from '@/utils/sanity.fetch';
import SendPromoCode from '@/emails/send-promo-code';
import type { RequestTypes } from './route.types';

const DOMAIN = 'https://food-patka-git-dev-kryptonum.vercel.app'; // TODO: Change to production domain

const stripe = new Stripe(process.env.STRAPI_API_KEY!);
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { isPromoCodeAfterPurchase } = await query();

  if (!isPromoCodeAfterPurchase) return;

  if (request.headers.get('x-forwarded-for') !== '138.68.104.42') {
    return NextResponse.json({
      success: false,
      message: 'You are not authorized to access this endpoint'
    }, { status: 401 });
  }

  const {
    event,
    customer_email,
    customer_first_name,
  } = await request.json() as RequestTypes;

  if (event !== 'single_product_bought' || !customer_email || !customer_first_name) {
    return NextResponse.json({
      success: false,
      message: 'Invalid request data'
    }, { status: 400 });
  }

  try {
    const { code } = await stripe.promotionCodes.create({
      coupon: 'wsJNbjk8',
      max_redemptions: 1,
      // expires_at: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 90, // 90 days
      expires_at: Math.floor(Date.now() / 1000) + 5 * 60 // 5 minutes for testing
    });

    await resend.emails.send({
      from: 'FoodPatka <sklep@foodpatka.pl>',
      reply_to: 'wspolpraca@foodpatka.pl',
      to: customer_email,
      subject: 'Twój kod rabatowy od FoodPatka!',
      react: SendPromoCode({
        name: customer_first_name,
        code: code,
      }),
    });

    await fetch(`${DOMAIN}/api/newsletter`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: customer_first_name,
        email: customer_email,
        legal: true,
      }),
    });

    return NextResponse.json({
      success: true,
      message: 'Promo code successfully generated and sent. Newsletter subscription added.',
    }, { status: 200 });
  } catch {
    return NextResponse.json({
      success: false,
      message: 'Something went wrong with generating promo code or with sending it via email, or with adding newsletter subscription.'
    }, { status: 500 });
  }
}

async function query(): Promise<{ isPromoCodeAfterPurchase: boolean; }> {
  return await sanityFetch<{ isPromoCodeAfterPurchase: boolean; }>({
    query: /* groq */ `
      *[_id == "global"][0] {
        isPromoCodeAfterPurchase,
      }
    `,
    tags: ['global'],
  });
}