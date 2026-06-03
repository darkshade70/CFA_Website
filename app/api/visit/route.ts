import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

const TO   = process.env.CONTACT_EMAIL ?? "jeffman661@gmail.com";
const FROM = process.env.RESEND_FROM   ?? "CFA Website <onboarding@resend.dev>";

export async function POST(req: Request) {
  try {
    const { name, phone, email, facility, timing, comments } = await req.json();

    if (!name || !email) {
      return NextResponse.json({ error: "Name and email are required." }, { status: 400 });
    }

    const { error } = await resend.emails.send({
      from: FROM,
      to: [TO],
      replyTo: email,
      subject: `Free visit request — ${name}`,
      html: `
        <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;max-width:580px;margin:0 auto;border-radius:8px;overflow:hidden;border:1px solid #eee;">
          <div style="background:#800017;padding:28px 32px;">
            <p style="color:#fff;font-size:12px;font-weight:700;letter-spacing:1.2px;text-transform:uppercase;margin:0 0 6px;">Canadian Fencing Academy</p>
            <p style="color:#fff;font-size:22px;font-weight:700;margin:0;">Free visit request</p>
          </div>
          <div style="padding:32px;background:#fff;">
            <table style="width:100%;border-collapse:collapse;font-size:15px;line-height:1.6;">
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;font-weight:600;color:#555;width:140px;">Name</td>
                <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;color:#111;">${name}</td>
              </tr>
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;font-weight:600;color:#555;">Email</td>
                <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;"><a href="mailto:${email}" style="color:#800017;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;font-weight:600;color:#555;">Phone</td>
                <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;color:#111;">${phone || "—"}</td>
              </tr>
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;font-weight:600;color:#555;">Facility</td>
                <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;color:#111;">${facility}</td>
              </tr>
              <tr>
                <td style="padding:10px 0;${comments ? "border-bottom:1px solid #f0f0f0;" : ""}font-weight:600;color:#555;">When</td>
                <td style="padding:10px 0;${comments ? "border-bottom:1px solid #f0f0f0;" : ""}color:#111;">${timing || "—"}</td>
              </tr>
              ${comments ? `<tr><td style="padding:10px 0;font-weight:600;color:#555;vertical-align:top;">Comments</td><td style="padding:10px 0;color:#111;">${comments.replace(/\n/g, "<br>")}</td></tr>` : ""}
            </table>
            <div style="margin-top:24px;padding:14px 16px;background:#fafafa;border-radius:6px;border:1px solid #eee;">
              <p style="margin:0;font-size:13px;color:#888;">Reply to this email to reach ${name} directly at ${email}.</p>
            </div>
          </div>
        </div>
      `,
    });

    if (error) throw error;
    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error("Resend visit error:", err);
    return NextResponse.json({ error: "Failed to send. Please try again." }, { status: 500 });
  }
}
