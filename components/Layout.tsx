import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = "SKYCATCHFIRE Mockup" }: Props) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header className="flex font-semibold w-full">
      <div className="relative w-full">
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="w-full max-w-lg border-b"></div>
        </div>
        <div className="relative flex align-middle text-center justify-center">
          <div>
            <span className="flex pl-4 translate-y-[21px]">⬥</span>
            <h1 className="bg-white uppercase px-12 text-sm tracking-widest">
              meet the team
            </h1>
            <span className="flex flex-row-reverse pr-4 -translate-y-[21px]">
              ⬥
            </span>
          </div>
        </div>
      </div>
    </header>
    <div>{children}</div>
    <footer className="mt-10 mb-5 flex justify-center align-center">
      <div className="relative py-4 w-full">
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="w-full mx-4 sm:mx-4 md:mx-52 border-b"></div>
        </div>
        <div className="relative flex justify-center">
          <span className="bg-white px-4 text-sm">⬥</span>
        </div>
      </div>
    </footer>
  </>
);

export default Layout;
