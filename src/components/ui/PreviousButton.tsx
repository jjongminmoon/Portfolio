"use client";

import { useRouter } from "next/navigation";
import BackIcon from "../icons/BackIcon";

export default function PreviousButton() {
  const router = useRouter();

  return (
    <button
      className="fixed bottom-12 right-12 p-1 bg-teal-400 rounded-xl hover:shadow-md"
      onClick={() => router.back()}
    >
      <div className="flex items-center gap-2 border-2 border-white p-2 rounded-xl hover:border-black">
        <BackIcon /> 프로젝트로 돌아가기
      </div>
    </button>
  );
}
