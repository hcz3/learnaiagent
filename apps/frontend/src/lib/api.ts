import axios from "axios";

export interface TestResponse {
  message: string;
}

export async function getBackendTest(): Promise<TestResponse> {
  // Use environment variable for backend URL if available, fallback to localhost
  const baseUrl = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:8000";
  const res = await axios.get<TestResponse>(`${baseUrl}/test`);
  return res.data;
} 