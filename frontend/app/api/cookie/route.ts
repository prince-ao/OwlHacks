import { cookies } from "next/headers";

export async function GET(request: Request) {
  const cookieValue = cookies().get("appSession")?.value;
  return new Response(cookieValue, {
    status: 200,
  });
}
