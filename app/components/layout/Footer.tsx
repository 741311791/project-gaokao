import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-white border-t mt-12 w-full" data-oid="ajm:ab7">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8" data-oid="mo9xt8i">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8" data-oid=":0998gg">
                    <div data-oid=".frwpng">
                        <h3 className="text-lg font-semibold mb-4" data-oid="-5nhee.">
                            关于我们
                        </h3>
                        <p className="text-gray-600" data-oid="ej-bn_i">
                            河北高考志愿填报服务平台致力于为河北考生提供专业、精准的高考志愿填报服务。
                        </p>
                    </div>
                    <div data-oid="kncv1d-">
                        <h3 className="text-lg font-semibold mb-4" data-oid="_6l:9cy">
                            快速链接
                        </h3>
                        <ul className="space-y-2 text-gray-600" data-oid="izy6diu">
                            <li data-oid="i13kk1k">
                                <Link
                                    href="/universities"
                                    className="hover:text-blue-600"
                                    data-oid="7738tx1"
                                >
                                    高校信息查询
                                </Link>
                            </li>
                            <li data-oid="2756e-8">
                                <Link
                                    href="/score-lines"
                                    className="hover:text-blue-600"
                                    data-oid="f8cv6k_"
                                >
                                    历年分数线
                                </Link>
                            </li>
                            <li data-oid="mh50nt3">
                                <Link
                                    href="/score-rankings"
                                    className="hover:text-blue-600"
                                    data-oid=".lx_sux"
                                >
                                    一分一档查询
                                </Link>
                            </li>
                            <li data-oid="fg-c48b">
                                <Link
                                    href="/admission-plans"
                                    className="hover:text-blue-600"
                                    data-oid="g0i5smw"
                                >
                                    招生计划查询
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div data-oid="fxa3uz.">
                        <h3 className="text-lg font-semibold mb-4" data-oid="4t3zs_b">
                            联系方式
                        </h3>
                        <ul className="space-y-2 text-gray-600" data-oid="zya7uv6">
                            <li data-oid="e96yb7f">电话：0311-12345678</li>
                            <li data-oid=":m241e1">邮箱：info@hebeivolunteer.com</li>
                            <li data-oid="pcbl58j">地址：河北省石家庄市桥西区</li>
                        </ul>
                    </div>
                    <div data-oid="0ax0zwi">
                        <h3 className="text-lg font-semibold mb-4" data-oid="84icr4r">
                            关注我们
                        </h3>
                        <div className="flex space-x-4" data-oid="s_ws6ir">
                            <a
                                href="#"
                                className="text-gray-600 hover:text-blue-600"
                                data-oid="zbljilm"
                            >
                                <span className="sr-only" data-oid="7s8mp5r">
                                    微信
                                </span>
                                <svg
                                    className="h-6 w-6"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    data-oid="0:epya6"
                                >
                                    <path
                                        d="M8.4,15.2c-0.4,0-0.8-0.1-1.2-0.2l-2.2,1.2l0.6-1.8C4.6,13.6,4,12.6,4,11.4c0-2.2,1.9-4,4.2-4c2.3,0,4.2,1.8,4.2,4 C12.4,13.4,10.5,15.2,8.4,15.2z M14.4,20.8c-0.5,0-1-0.1-1.5-0.3l-2.8,1.5l0.8-2.3c-1.1-0.8-1.9-2.1-1.9-3.5c0-2.8,2.4-5,5.4-5 c3,0,5.4,2.2,5.4,5C19.8,18.6,17.4,20.8,14.4,20.8z"
                                        data-oid="m-dhf8y"
                                    ></path>
                                </svg>
                            </a>
                            <a
                                href="#"
                                className="text-gray-600 hover:text-blue-600"
                                data-oid="zafe4na"
                            >
                                <span className="sr-only" data-oid="dq1cu_m">
                                    微博
                                </span>
                                <svg
                                    className="h-6 w-6"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    data-oid="5h_z3t7"
                                >
                                    <path
                                        d="M10.8,11.2c-2.5,0-4.5,1.7-4.5,3.8c0,2.1,2,3.8,4.5,3.8c2.5,0,4.5-1.7,4.5-3.8C15.3,12.9,13.3,11.2,10.8,11.2z M12.3,16.5 c-0.5,0.7-1.5,1-2.5,0.6c-1-0.4-1.3-1.2-0.8-1.9c0.5-0.7,1.4-0.9,2.4-0.5C12.4,15,12.8,15.8,12.3,16.5z M10.9,14.6 c-0.2,0.3-0.6,0.4-0.9,0.3c-0.3-0.1-0.4-0.4-0.3-0.7c0.2-0.3,0.6-0.4,0.9-0.3C11,14,11.1,14.3,10.9,14.6z M20,9.9 c-0.4-1.8-1.9-3-3.6-3.2c-0.6-0.1-1,0.3-1.1,0.9c-0.1,0.6,0.3,1,0.9,1.1c1,0.1,1.9,0.8,2.1,1.8c0.1,0.6,0.7,0.9,1.3,0.8 C20.2,11.1,20.5,10.5,20,9.9z M18.9,5.5c-1.9-2.1-4.7-2.9-7.3-2.4c-0.7,0.1-1.2,0.8-1,1.5c0.1,0.7,0.8,1.2,1.5,1 c1.9-0.4,3.9,0.2,5.3,1.7c1.3,1.5,1.7,3.5,1.1,5.3c-0.2,0.7,0.2,1.4,0.9,1.6c0.7,0.2,1.4-0.2,1.6-0.9C21.8,10.3,21.2,7.9,18.9,5.5z"
                                        data-oid="5hvwu:x"
                                    ></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="border-t mt-8 pt-8 text-center text-gray-500" data-oid="4zh92mr">
                    <p data-oid="0k-vh:o">© 2023 河北高考志愿填报服务平台 版权所有</p>
                </div>
            </div>
        </footer>
    );
}
