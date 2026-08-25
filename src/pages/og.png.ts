import type { APIRoute } from "astro";
import { getAssetPath } from "@/utils/withBase";

export const GET: APIRoute = ({ url }) =>
  Response.redirect(new URL(getAssetPath("default-og.png"), url), 302);
