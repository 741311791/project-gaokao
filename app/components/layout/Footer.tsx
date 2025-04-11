import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-white border-t mt-12" data-oid="8-ubvhl">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8" data-oid="29e53ul">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8" data-oid="_klxhq9">
                    <div data-oid="dodjb0d">
                        <h3 className="text-lg font-semibold mb-4" data-oid="rfjgt5n">
                            关于我们
                        </h3>
                        <p className="text-gray-600" data-oid="15:i48t">
                            河北高考志愿填报服务平台致力于为河北考生提供专业、精准的高考志愿填报服务。
                        </p>
                    </div>
                    <div data-oid="tbyy3:9">
                        <h3 className="text-lg font-semibold mb-4" data-oid="kq.kdqo">
                            快速链接
                        </h3>
                        <ul className="space-y-2 text-gray-600" data-oid="dxeyh06">
                            <li data-oid="y7nxxyz">
                                <Link
                                    href="/universities"
                                    className="hover:text-blue-600"
                                    data-oid="q7k3ji5"
                                >
                                    高校信息查询
                                </Link>
                            </li>
                            <li data-oid="5xpdlrp">
                                <Link
                                    href="/score-lines"
                                    className="hover:text-blue-600"
                                    data-oid="4m2og:x"
                                >
                                    历年分数线
                                </Link>
                            </li>
                            <li data-oid="ky186eu">
                                <Link
                                    href="/score-rankings"
                                    className="hover:text-blue-600"
                                    data-oid="w.xo15b"
                                >
                                    一分一档查询
                                </Link>
                            </li>
                            <li data-oid="j80-0wx">
                                <Link
                                    href="/admission-plans"
                                    className="hover:text-blue-600"
                                    data-oid="_4y3dj6"
                                >
                                    招生计划查询
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div data-oid="bg6:.-5">
                        <h3 className="text-lg font-semibold mb-4" data-oid="yyw6xt.">
                            联系方式
                        </h3>
                        <ul className="space-y-2 text-gray-600" data-oid="grxdetw">
                            <li data-oid="na9cwef">电话：0311-12345678</li>
                            <li data-oid="w2f-r8w">邮箱：info@hebeivolunteer.com</li>
                            <li data-oid="o9a27qm">地址：河北省石家庄市桥西区</li>
                        </ul>
                    </div>
                    <div data-oid="u7_xo7f">
                        <h3 className="text-lg font-semibold mb-4" data-oid="7m0bim_">
                            关注我们
                        </h3>
                        <div className="flex space-x-4" data-oid="zwog6ee">
                            <a
                                href="#"
                                className="text-gray-600 hover:text-blue-600"
                                data-oid="edzr46-"
                            >
                                <span className="sr-only" data-oid="ndhiy14">
                                    微信
                                </span>
                                <svg
                                    className="h-6 w-6"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    data-oid="3r6ub4z"
                                >
                                    <path
                                        d="M8.4,15.2c-0.4,0-0.8-0.1-1.2-0.2l-2.2,1.2l0.6-1.8C4.6,13.6,4,12.6,4,11.4c0-2.2,1.9-4,4.2-4c2.3,0,4.2,1.8,4.2,4 C12.4,13.4,10.5,15.2,8.4,15.2z M14.4,20.8c-0.5,0-1-0.1-1.5-0.3l-2.8,1.5l0.8-2.3c-1.1-0.8-1.9-2.1-1.9-3.5c0-2.8,2.4-5,5.4-5 c3,0,5.4,2.2,5.4,5C19.8,18.6,17.4,20.8,14.4,20.8z"
                                        data-oid="k.3utkd"
                                    ></path>
                                </svg>
                            </a>
                            <a
                                href="#"
                                className="text-gray-600 hover:text-blue-600"
                                data-oid="x3qcp3x"
                            >
                                <span className="sr-only" data-oid="bca7foj">
                                    微博
                                </span>
                                <svg
                                    className="h-6 w-6"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    data-oid="7cr1_ih"
                                >
                                    <path
                                        d="M10.8,11.2c-2.5,0-4.5,1.7-4.5,3.8c0,2.1,2,3.8,4.5,3.8c2.5,0,4.5-1.7,4.5-3.8C15.3,12.9,13.3,11.2,10.8,11.2z M12.3,16.5 c-0.5,0.7-1.5,1-2.5,0.6c-1-0.4-1.3-1.2-0.8-1.9c0.5-0.7,1.4-0.9,2.4-0.5C12.4,15,12.8,15.8,12.3,16.5z M10.9,14.6 c-0.2,0.3-0.6,0.4-0.9,0.3c-0.3-0.1-0.4-0.4-0.3-0.7c0.2-0.3,0.6-0.4,0.9-0.3C11,14,11.1,14.3,10.9,14.6z M20,9.9 c-0.4-1.8-1.9-3-3.6-3.2c-0.6-0.1-1,0.3-1.1,0.9c-0.1,0.6,0.3,1,0.9,1.1c1,0.1,1.9,0.8,2.1,1.8c0.1,0.6,0.7,0.9,1.3,0.8 C20.2,11.1,20.5,10.5,20,9.9z M18.9,5.5c-1.9-2.1-4.7-2.9-7.3-2.4c-0.7,0.1-1.2,0.8-1,1.5c0.1,0.7,0.8,1.2,1.5,1 c1.9-0.4,3.9,0.2,5.3,1.7c1.3,1.5,1.7,3.5,1.1,5.3c-0.2,0.7,0.2,1.4,0.9,1.6c0.7,0.2,1.4-0.2,1.6-0.9C21.8,10.3,21.2,7.9,18.9,5.5z"
                                        data-oid="xl2ckd4"
                                    ></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="border-t mt-8 pt-8 text-center text-gray-500" data-oid="q4pymv0">
                    <p data-oid="icph.qm">© 2023 河北高考志愿填报服务平台 版权所有</p>
                </div>
            </div>
        </footer>
    );
}
