"use client";
import { useEffect, useState } from "react";
// Remove Card import for now, fallback to div
import { getBackendTest, TestResponse } from "../lib/api";

export default function Home() {
  const [data, setData] = useState<TestResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    getBackendTest()
      .then((res) => {
        setData(res);
        setError(null);
      })
      .catch((err) => {
        setError(err?.message || "请求失败");
        setData(null);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-black p-4">
      <div className="max-w-md w-full p-8 shadow-lg rounded-lg bg-white dark:bg-neutral-900">
        <h1 className="text-2xl font-bold mb-4 text-center">后端连通性测试</h1>
        {loading && <div className="text-gray-500 text-center">加载中...</div>}
        {error && <div className="text-red-500 text-center">{error}</div>}
        {data && (
          <div className="text-green-600 text-center text-lg font-mono">{data.message}</div>
        )}
      </div>
    </div>
  );
}
