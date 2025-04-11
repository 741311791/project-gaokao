'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function LoginPage() {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would handle the login/register logic
        console.log(isLogin ? 'Logging in' : 'Registering', { email, password, name, phone });
    };

    return (
        <div
            className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8"
            data-oid="ya3na.3"
        >
            <div className="sm:mx-auto sm:w-full sm:max-w-md" data-oid="l7f:lsw">
                <h2
                    className="mt-6 text-center text-3xl font-extrabold text-gray-900"
                    data-oid="en9.kiq"
                >
                    {isLogin ? '登录账户' : '注册新账户'}
                </h2>
                <p className="mt-2 text-center text-sm text-gray-600" data-oid="7_3m_::">
                    {isLogin ? '还没有账户？' : '已有账户？'}
                    <button
                        onClick={() => setIsLogin(!isLogin)}
                        className="font-medium text-blue-600 hover:text-blue-500 ml-1"
                        data-oid="fpzifby"
                    >
                        {isLogin ? '立即注册' : '立即登录'}
                    </button>
                </p>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md" data-oid="o5:_mk9">
                <div
                    className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10"
                    data-oid="cdgbcgu"
                >
                    <form className="space-y-6" onSubmit={handleSubmit} data-oid="ct0vsye">
                        {!isLogin && (
                            <div data-oid="n9_kz6r">
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium text-gray-700"
                                    data-oid="tu4ut1_"
                                >
                                    姓名
                                </label>
                                <div className="mt-1" data-oid="obhm14h">
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        required
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                        data-oid="5ae:1d_"
                                    />
                                </div>
                            </div>
                        )}

                        <div data-oid="z1eehoi">
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700"
                                data-oid="gtnwc4g"
                            >
                                邮箱地址
                            </label>
                            <div className="mt-1" data-oid="m7rj.y8">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                    data-oid="4exf8is"
                                />
                            </div>
                        </div>

                        {!isLogin && (
                            <div data-oid="a_d2elr">
                                <label
                                    htmlFor="phone"
                                    className="block text-sm font-medium text-gray-700"
                                    data-oid="4dq29q3"
                                >
                                    手机号码
                                </label>
                                <div className="mt-1" data-oid="nt6zq6r">
                                    <input
                                        id="phone"
                                        name="phone"
                                        type="tel"
                                        required
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                        data-oid="_hn1-th"
                                    />
                                </div>
                            </div>
                        )}

                        <div data-oid="-ew-uv7">
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-gray-700"
                                data-oid="k-8li:a"
                            >
                                密码
                            </label>
                            <div className="mt-1" data-oid="io__sjg">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete={isLogin ? 'current-password' : 'new-password'}
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                    data-oid="koc16l2"
                                />
                            </div>
                        </div>

                        {isLogin && (
                            <div className="flex items-center justify-between" data-oid="61jdabw">
                                <div className="flex items-center" data-oid="cc7:y32">
                                    <input
                                        id="remember-me"
                                        name="remember-me"
                                        type="checkbox"
                                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                        data-oid="snxn-bj"
                                    />

                                    <label
                                        htmlFor="remember-me"
                                        className="ml-2 block text-sm text-gray-900"
                                        data-oid="9x2t4n_"
                                    >
                                        记住我
                                    </label>
                                </div>

                                <div className="text-sm" data-oid="ieojk.w">
                                    <a
                                        href="#"
                                        className="font-medium text-blue-600 hover:text-blue-500"
                                        data-oid="mbw3qda"
                                    >
                                        忘记密码?
                                    </a>
                                </div>
                            </div>
                        )}

                        <div data-oid="944i0cu">
                            <button
                                type="submit"
                                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                data-oid="ioay-o4"
                            >
                                {isLogin ? '登录' : '注册'}
                            </button>
                        </div>
                    </form>

                    <div className="mt-6" data-oid="9opfz.d">
                        <div className="relative" data-oid="nm61fdo">
                            <div className="absolute inset-0 flex items-center" data-oid="vtwn.ww">
                                <div
                                    className="w-full border-t border-gray-300"
                                    data-oid="y:e12-k"
                                ></div>
                            </div>
                            <div
                                className="relative flex justify-center text-sm"
                                data-oid="qcq5rqz"
                            >
                                <span className="px-2 bg-white text-gray-500" data-oid="xlw-cej">
                                    或通过以下方式{isLogin ? '登录' : '注册'}
                                </span>
                            </div>
                        </div>

                        <div className="mt-6 grid grid-cols-2 gap-3" data-oid="p.oo4kg">
                            <div data-oid="o_15m24">
                                <a
                                    href="#"
                                    className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                                    data-oid="9sbbpid"
                                >
                                    <span className="sr-only" data-oid="62bqemk">
                                        使用微信登录
                                    </span>
                                    <svg
                                        className="w-5 h-5"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid="czrq_7v"
                                    >
                                        <path
                                            d="M8.4,15.2c-0.4,0-0.8-0.1-1.2-0.2l-2.2,1.2l0.6-1.8C4.6,13.6,4,12.6,4,11.4c0-2.2,1.9-4,4.2-4c2.3,0,4.2,1.8,4.2,4 C12.4,13.4,10.5,15.2,8.4,15.2z M14.4,20.8c-0.5,0-1-0.1-1.5-0.3l-2.8,1.5l0.8-2.3c-1.1-0.8-1.9-2.1-1.9-3.5c0-2.8,2.4-5,5.4-5 c3,0,5.4,2.2,5.4,5C19.8,18.6,17.4,20.8,14.4,20.8z"
                                            data-oid="w74mrhp"
                                        ></path>
                                    </svg>
                                </a>
                            </div>

                            <div data-oid="0g5pc54">
                                <a
                                    href="#"
                                    className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                                    data-oid="fm0rxtp"
                                >
                                    <span className="sr-only" data-oid="n5eptce">
                                        使用QQ登录
                                    </span>
                                    <svg
                                        className="w-5 h-5"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid="2gwfg5o"
                                    >
                                        <path
                                            d="M12.003 2c-2.265 0-6.29 1.364-6.29 7.325v1.195S3.55 14.96 3.55 17.474c0 .665.17 1.025.281 1.025.114 0 .902-.484 1.748-2.072 0 0-.18 2.197 1.904 3.967 0 0-1.77.495-1.77 1.182 0 .686 4.078.43 6.29 0 2.239.425 6.287.687 6.287 0 0-.688-1.768-1.182-1.768-1.182 2.085-1.77 1.905-3.967 1.905-3.967.845 1.588 1.634 2.072 1.746 2.072.111 0 .283-.36.283-1.025 0-2.514-2.166-6.954-2.166-6.954V9.325C18.29 3.364 14.268 2 12.003 2z"
                                            data-oid="1aezw_k"
                                        ></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-8 text-center" data-oid="xzvh07e">
                <Link href="/" className="text-blue-600 hover:text-blue-500" data-oid="kkh9347">
                    返回首页
                </Link>
            </div>
        </div>
    );
}
