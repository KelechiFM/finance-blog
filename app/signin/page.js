"use client";

import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { toast } from "react-toastify";
import { Eye, EyeOff } from "lucide-react";

export default function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const { signIn } = useAuth();
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email || !password) {
            toast.error("Please fill in all fields");
            return;
        }

        try {
            await signIn(email, password);
            // Redirect to Dashboard after successful login
            toast.success("Welcome back!");
            router.push("/dashboard");
        } catch (err) {
            // Customize error messages for better UX
            if (err.message.includes("auth/invalid-credential")) {
                toast.error("Invalid email or password. Please try again.");
            } else {
                toast.error(err.message);
            }
        }
    };

    return (
        <div className="flex min-h-[100dvh] items-center justify-center bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-md space-y-8 bg-white p-8 shadow-lg rounded-2xl border border-slate-200">
                <div>
                    <h2 className="mt-2 text-center text-3xl font-bold tracking-tight text-slate-900">
                        Sign in to your account
                    </h2>
                    <p className="mt-2 text-center text-sm text-slate-600">
                        Or{" "}
                        <Link href="/signup" className="font-medium text-blue-600 hover:text-blue-500 transition-colors">
                            create a new account
                        </Link>
                    </p>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <input type="hidden" name="remember" value="true" />
                    <div className="space-y-4 rounded-md">
                        <div>
                            <label htmlFor="email-address" className="sr-only">
                                Email address
                            </label>
                            <input
                                id="email-address"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="relative block w-full rounded-lg border-0 py-2.5 text-slate-900 ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-blue-600 text-base sm:text-sm sm:leading-6"
                                placeholder="Email address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="relative">
                            <label htmlFor="password" className="sr-only">
                                Password
                            </label>
                            <input
                                id="password"
                                name="password"
                                type={showPassword ? "text" : "password"}
                                autoComplete="current-password"
                                required
                                className="relative block w-full rounded-lg border-0 py-2.5 pr-10 text-slate-900 ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-blue-600 text-base sm:text-sm sm:leading-6"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <button
                                type="button"
                                className="absolute inset-y-0 right-0 flex items-center pr-3"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? (
                                    <EyeOff className="h-5 w-5 text-slate-400 hover:text-slate-600 transition-colors" />
                                ) : (
                                    <Eye className="h-5 w-5 text-slate-400 hover:text-slate-600 transition-colors" />
                                )}
                            </button>
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="group relative flex w-full justify-center rounded-lg bg-blue-600 py-2.5 px-3 text-sm font-semibold text-white hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors shadow-sm"
                        >
                            Sign in
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
