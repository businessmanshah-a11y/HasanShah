// app/workshop/vibe-coding-28khordad/lib/appsScript.ts
import { SCRIPT_URL } from "../config";

export interface Attendee {
  name: string;
  linkedin: string;
  specialty: string;
  bio: string;
  phone?: string;
  registered?: boolean;
}

export interface Comment {
  name: string;
  text: string;
  timestamp: string;
}

export interface FollowupEntry {
  name: string;
  text: string;
  timestamp: string;
}

async function post<T>(body: Record<string, unknown>): Promise<T> {
  if (!SCRIPT_URL) throw new Error("NEXT_PUBLIC_APPS_SCRIPT_URL not configured");
  const res = await fetch(SCRIPT_URL, {
    method: "POST",
    body: JSON.stringify(body),
    redirect: "follow",
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const data = await res.json();
  if (data.error) throw new Error(data.error);
  return data as T;
}

async function get<T>(action: string): Promise<T> {
  return post<T>({ action });
}

export async function hashPassword(password: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const buffer = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(buffer))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

export async function checkPhone(phone: string) {
  return post<{ exists: boolean; isNew?: boolean; name?: string }>({
    action: "checkPhone",
    phone,
  });
}

export async function setPassword(phone: string, password: string) {
  const password_hash = await hashPassword(password);
  return post<{ success: boolean; token?: string; name?: string; error?: string }>({
    action: "setPassword",
    phone,
    password_hash,
  });
}

export async function login(phone: string, password: string) {
  const password_hash = await hashPassword(password);
  return post<{ success: boolean; token?: string; name?: string; error?: string }>({
    action: "login",
    phone,
    password_hash,
  });
}

export async function getAttendees(): Promise<Attendee[]> {
  return get<Attendee[]>("getAttendees");
}

export async function updateProfile(
  phone: string,
  token: string,
  linkedin: string,
  specialty: string,
  bio: string,
  showPhone: boolean
) {
  return post<{ success: boolean; error?: string }>({
    action: "updateProfile",
    phone,
    token,
    linkedin,
    specialty,
    bio,
    show_phone: showPhone,
  });
}

export async function getComments(): Promise<Comment[]> {
  return get<Comment[]>("getComments");
}

export async function editComment(phone: string, token: string, timestamp: string, text: string) {
  return post<{ success: boolean; error?: string }>({ action: "editComment", phone, token, timestamp, text });
}

export async function deleteComment(phone: string, token: string, timestamp: string) {
  return post<{ success: boolean; error?: string }>({ action: "deleteComment", phone, token, timestamp });
}

export async function addComment(phone: string, token: string, text: string) {
  return post<{ success: boolean; error?: string }>({
    action: "addComment",
    phone,
    token,
    text,
  });
}

export async function getFollowup(): Promise<FollowupEntry[]> {
  return get<FollowupEntry[]>("getFollowup");
}

export async function addFollowup(phone: string, token: string, text: string) {
  return post<{ success: boolean; error?: string }>({
    action: "addFollowup",
    phone,
    token,
    text,
  });
}
