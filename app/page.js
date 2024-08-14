// app/page.js
import React from "react";
import Link from "next/link";
import TruncatedText from "@/app/components/helper/TruncatedText";
import CommentActions from "@/app/components/model/Comments";
import Writecomment from "@/app/components/model/Writecomment";
import timeSince from "@/app/components/helper/timeSince";
import NavigationMenu from "./components/model/navigationMenu";
import RightSide from "./components/model/rightSide";
import PostList from "./pagi/page";
import StatusUpdate from "./components/client/router/StatusUpdate";

export default async function Home() {
  return (
    <>
      <main>
        <div className="flex container mx-auto max-w-6xl gap-2 mt-[120px] md:mt-14">
          <div className="hidden md:block">
            <NavigationMenu />
          </div>
          {/* middle */}
          <div className="px-2 ml-0 md:ml-2 md:px-0 ">
            {/* <StatusClick /> */}
            <StatusUpdate />
            <PostList />
            {/* <React.Suspense fallback={<Loading />}> */}

            {/* </React.Suspense> */}
          </div>
          {/* right side */}
          <div className="hidden md:block">
            <RightSide />
          </div>
        </div>
      </main>
    </>
  );
}
