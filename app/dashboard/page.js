"use client";

import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';

export default function Dashboard() {
    const { user, logOut } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!user) {
            router.push("/signin");
        }
    }, [user, router]);

    const handleLogout = async () => {
        try {
            await logOut();
            router.push("/");
        } catch (error) {
            console.error("Failed to log out", error);
        }
    };

    if (!user) {
        return <div className="flex justify-center items-center h-screen">Loading...</div>;
    }

    // Mock Data for Charts
    const dailyViewersData = [
        { name: 'Mon', viewers: 400 },
        { name: 'Tue', viewers: 300 },
        { name: 'Wed', viewers: 550 },
        { name: 'Thu', viewers: 800 },
        { name: 'Fri', viewers: 700 },
        { name: 'Sat', viewers: 900 },
        { name: 'Sun', viewers: 1000 },
    ];

    const adClicksData = [
        { name: 'Mon', clicks: 24 },
        { name: 'Tue', clicks: 18 },
        { name: 'Wed', clicks: 35 },
        { name: 'Thu', clicks: 50 },
        { name: 'Fri', clicks: 42 },
        { name: 'Sat', clicks: 65 },
        { name: 'Sun', clicks: 80 },
    ];

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex justify-between items-center bg-white p-6 rounded-xl shadow-sm mb-8">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-800">Review Dashboard</h1>
                        <p className="text-gray-500">Welcome back, {user.email}</p>
                    </div>
                    <button
                        onClick={handleLogout}
                        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                    >
                        Log Out
                    </button>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-blue-500">
                        <h3 className="text-gray-500 text-sm font-medium uppercase">Total Viewers Today</h3>
                        <p className="text-3xl font-bold text-gray-800 mt-2">1,240</p>
                        <span className="text-green-500 text-sm font-bold">↑ 12%</span> <span className="text-gray-400 text-xs">vs yesterday</span>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-purple-500">
                        <h3 className="text-gray-500 text-sm font-medium uppercase">Ad Clicks</h3>
                        <p className="text-3xl font-bold text-gray-800 mt-2">86</p>
                        <span className="text-green-500 text-sm font-bold">↑ 5%</span> <span className="text-gray-400 text-xs">vs yesterday</span>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-green-500">
                        <h3 className="text-gray-500 text-sm font-medium uppercase">Estimated Revenue</h3>
                        <p className="text-3xl font-bold text-gray-800 mt-2">$42.50</p>
                        <span className="text-green-500 text-sm font-bold">↑ 8%</span> <span className="text-gray-400 text-xs">vs yesterday</span>
                    </div>
                </div>

                {/* Charts Area */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Viewers Chart */}
                    <div className="bg-white p-6 rounded-xl shadow-sm">
                        <h3 className="text-lg font-bold text-gray-800 mb-4">Daily Viewers</h3>
                        <div className="h-64">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={dailyViewersData}>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Bar dataKey="viewers" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    {/* Ad Clicks Chart */}
                    <div className="bg-white p-6 rounded-xl shadow-sm">
                        <h3 className="text-lg font-bold text-gray-800 mb-4">Ad Clicks Performance</h3>
                        <div className="h-64">
                            <ResponsiveContainer width="100%" height="100%">
                                <LineChart data={adClicksData}>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Line type="monotone" dataKey="clicks" stroke="#8b5cf6" strokeWidth={3} dot={{ r: 4 }} />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
