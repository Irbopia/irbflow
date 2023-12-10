import React from "react";
import Image from "next/image";
import Link from "next/link";
import { topQuestions, popularTags } from "@/constants";
import RenderTag from "@/components/shared/RenderTag";

const RightSideBar = () => {
  return (
    <section className="custom-scrollbar background-light900_dark200 light-border sticky right-0 top-0 flex h-screen w-[350px] flex-col gap-6 overflow-y-auto border-l p-6 pt-36 shadow-light-300 dark:shadow-none max-xl:hidden">
      {/* <RightSideBarContent /> */}
      {/* Top questions static */}
      <h3 className="h3-bold text-dark200_light900">Top Questions</h3>
      <div className="mt-7 flex w-full flex-col gap-[30px]">
        {topQuestions.map((question) => {
          return (
            <Link
              key={question.id}
              href="/"
              className="flex cursor-pointer items-center justify-between gap-7"
            >
              <p className="body-medium text-dark500_light700">
                {question.question}
              </p>
              <Image
                src="/assets/icons/chevron-right.svg"
                width={20}
                height={20}
                alt="arrow right"
                className="invert-colors"
              />
            </Link>
          );
        })}
      </div>
      {/* Popular tags static */}
      <div className="mt-16">
        <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>
        <div className="mt-7 flex flex-col gap-4">
          {popularTags.map((tag) => {
            return (
              <RenderTag 
                key={tag._id}
                _id={tag._id}
                name={tag.name}
                totalQuestions={tag.totalQuestions}
                showCount={tag.showCount}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RightSideBar;
