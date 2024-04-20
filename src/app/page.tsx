'use client'

import axios from 'axios'

const ipScanUrl = 'https://ip-scan.adspower.net/sys/config/ip/get-visitor-ip?ip='

import Link from "next/link"
import {
    Package2,
    PanelLeft,
    Settings,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Sheet, SheetTrigger } from "@/components/ui/sheet"
import { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export default function Dashboard() {
    const [data, setData] = useState({
        ip: '',
        result: {}
    })
    const handleSearchIp = async () => {
        const res  = await axios.get(ipScanUrl + data.ip )
        setData({...data, result: res.data.data})
    }
    const handleInputChange = (event: any) => {
        setData({...data, ip: event.target.value})
    }
    return (
        <div className="flex min-h-screen w-full flex-col bg-muted/40">
            <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
                <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
                    <Link
                        href="#"
                        className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
                    >
                        <Package2 className="h-4 w-4 transition-all group-hover:scale-110" />
                        <span className="sr-only">Acme Inc</span>
                    </Link>
                </nav>
                <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
                    <Link
                        href="#"
                        className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                    >
                        <Settings className="h-5 w-5" />
                        <span className="sr-only">Settings</span>
                    </Link>
                </nav>
            </aside>
            <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
                <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button size="icon" variant="outline" className="sm:hidden">
                                <PanelLeft className="h-5 w-5" />
                                <span className="sr-only">Toggle Menu</span>
                            </Button>
                        </SheetTrigger>
                        {/* <SheetContent side="left" className="sm:max-w-xs">
                            <nav className="grid gap-6 text-lg font-medium">
                                <Link
                                    href="#"
                                    className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
                                >
                                    <Package2 className="h-5 w-5 transition-all group-hover:scale-110" />
                                    <span className="sr-only">Acme Inc</span>
                                </Link>
                                <Link
                                    href="#"
                                    className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                                >
                                    <Home className="h-5 w-5" />
                                    Dashboard
                                </Link>
                                <Link
                                    href="#"
                                    className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                                >
                                    <ShoppingCart className="h-5 w-5" />
                                    Orders
                                </Link>
                                <Link
                                    href="#"
                                    className="flex items-center gap-4 px-2.5 text-foreground"
                                >
                                    <Package className="h-5 w-5" />
                                    Products
                                </Link>
                                <Link
                                    href="#"
                                    className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                                >
                                    <Users2 className="h-5 w-5" />
                                    Customers
                                </Link>
                            </nav>
                        </SheetContent> */}
                    </Sheet>
                </header>
                <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
                    <Tabs defaultValue="all">
                        <div className="flex items-center">
                            <TabsList>
                                <TabsTrigger value="all">IP</TabsTrigger>
                            </TabsList>
                        </div>
                        <TabsContent value="all">
                            <Card x-chunk="dashboard-06-chunk-0">
                                <CardHeader>
                                    <CardTitle>IP查询</CardTitle>
                                    <CardDescription>
                                        世界最牛逼IP查询服务
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className='flex'>
                                        <Input
                                            value={data.ip}
                                            onChange={handleInputChange}
                                            type="search"
                                            placeholder="请输入IP"
                                            className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px] mr-2"
                                        />
                                        <Button onClick={handleSearchIp}>提交</Button>
                                    </div>
                                </CardContent>
                                <CardFooter>
                                <div className="my-6 w-full overflow-y-auto">
                                    <table className="w-full">
                                        <thead>
                                        <tr className="m-0 border-t p-0 even:bg-muted">
                                            <th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
                                                事项
                                            </th>
                                            <th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
                                                结果
                                            </th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                Object.keys(data.result).map((item) => {
                                                    return (
                                                        <tr key={item} className="m-0 border-t p-0 even:bg-muted">
                                                            <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                                                            {item}
                                                            </td>
                                                            <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                                                            <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                                                            {typeof data.result[item] === 'string' ? data.result[item] : Object.keys(data.result[item]).map((childItem) => {
                                                                return (
                                                                    <li key={childItem}>{childItem}: {typeof data.result[item][childItem] === 'string' ? data.result[item][childItem] : JSON.stringify(data.result[item][childItem])}</li>
                                                                    
                                                                )
                                                            })}
                                                            </ul>
                                                            </td>
                                                        </tr>
                                                    )
                                                })
                                            }
                                            
                                        </tbody>
                                    </table>
                                    </div>
                                    {/* <div>{data.result.data || ''}</div> */}
                                </CardFooter>
                            </Card>
                        </TabsContent>
                    </Tabs>
                </main>
            </div>
        </div>
    )
}
