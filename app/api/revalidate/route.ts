import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const secret = req.nextUrl.searchParams.get("secret");

  if (!secret || secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
  }

  try {
    // Revalidate all Sanity-driven pages
    revalidatePath("/");
    revalidatePath("/beginners");
    revalidatePath("/coaches");
    revalidatePath("/our-space");
    revalidatePath("/programs/foil");
    revalidatePath("/programs/epee");
    revalidatePath("/programs/sabre");
    revalidatePath("/programs/historical");

    return NextResponse.json({ revalidated: true, now: Date.now() });
  } catch (err) {
    return NextResponse.json({ message: "Error revalidating", err }, { status: 500 });
  }
}
