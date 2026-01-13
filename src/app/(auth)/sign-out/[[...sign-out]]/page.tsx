import { SignOutButton } from "@clerk/nextjs";

export default function SignOutPage() {
  return (
    <div className="flex h-screen items-center justify-center">
      <SignOutButton redirectUrl="/">
        <button className="px-4 py-2 bg-red-500 text-white rounded">
          Log Out
        </button>
      </SignOutButton>
    </div>
  );
}
