
import Stripe from "stripe";

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error("Stripe secret key is not defined");
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2024-12-18.acacia",
});

interface LineItem {
  id: number;
  price: number;
  quantity: number;
}

export async function POST(request: Request): Promise<Response> {
  try {
    const { cartItems }: { cartItems: LineItem[] } = await request.json();

    // Validate cart items
    if (!cartItems || cartItems.length === 0) {
      return new Response(
        JSON.stringify({ error: "Invalid request: cartItems are required." }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const isValid = cartItems.every(
      (item) =>
        typeof item.id === "number" &&
        typeof item.price === "number" &&
        typeof item.quantity === "number" &&
        item.price > 0 &&
        item.quantity > 0
    );

    if (!isValid) {
      return new Response(
        JSON.stringify({ error: "Invalid cartItems format." }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // Prepare line items for Stripe
    const lineItems = cartItems.map((item) => ({
      price_data: {
        currency: "usd",
        product_data: {
          name: `Product ${item.id}`, // Customize product names
        },
        unit_amount: Math.round(item.price * 100), // Convert to cents
      },
      quantity: item.quantity,
    }));

    // Create a Stripe Checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cart`,
    });

    return new Response(
      JSON.stringify({ id: session.id, url: session.url }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    if (error instanceof Error) {
      console.error("Stripe session error:", error.message);
      return new Response(
        JSON.stringify({ error: "Failed to create checkout session." }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    } else {
      console.error("An unexpected error occurred:", error);
      return new Response(
        JSON.stringify({ error: "An unexpected error occurred." }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }
  }
}
