import Link from "next/link";
import { Button } from "@/components/ui/button";
import LocalSearchBar from "@/components/shared/navbar/search/LocalSearch";
import Filter from "@/components/shared/Filter";
import { HomePageFilters } from "@/constants/filters";
import HomeFilters from "@/components/home/HomeFilters";
import QuestionCard from "@/components/cards/QuestionCard";
import NoResult from "@/components/shared/NoResult";

export default function Home() {
  const questions = [
    {
      _id: "q6",
      title: "What are the benefits of using GraphQL?",
      author: {
        _id: "a6",
        name: "Eva Williams",
        picture: "url-to-eva-picture",
      },
      tags: [
        { _id: "t11", name: "GraphQL" },
        { _id: "t12", name: "API" },
      ],
      upvotes: 1209789,
      views: 1800000,
      answers: [{ _id: 'answer one'}, { _id: 'answer two'}],
      createdAt: new Date("2023-12-17T15:02:00"),
    },
    {
      _id: "q7",
      title: "How to deploy a Node.js app to AWS?",
      author: {
        _id: "a7",
        name: "David Wilson",
        picture: "url-to-davids-picture",
      },
      tags: [
        { _id: "t13", name: "Node.js" },
        { _id: "t14", name: "AWS" },
      ],
      upvotes: 18,
      views: 220,
      answers: [],
      createdAt: new Date("2023-12-17"),
    },
    {
      _id: "q8",
      title: "What are the key differences between Docker and Kubernetes?",
      author: {
        _id: "a8",
        name: "Grace Lee",
        picture: "url-to-graces-picture",
      },
      tags: [
        { _id: "t15", name: "Docker" },
        { _id: "t16", name: "Kubernetes" },
      ],
      upvotes: 28,
      views: 300,
      answers: [],
      createdAt: new Date("2023-01-08"),
    },
    {
      _id: "q9",
      title: "Tips for improving website accessibility?",
      author: {
        _id: "a9",
        name: "Frank Miller",
        picture: "url-to-franks-picture",
      },
      tags: [
        { _id: "t17", name: "Web Development" },
        { _id: "t18", name: "Accessibility" },
      ],
      upvotes: 15,
      views: 250,
      answers: [],
      createdAt: new Date("2023-01-09"),
    },
    {
      _id: "q10",
      title: "How to use Redux with React Native?",
      author: {
        _id: "a10",
        name: "Gina Anderson",
        picture: "url-to-ginas-picture",
      },
      tags: [
        { _id: "t19", name: "React Native" },
        { _id: "t20", name: "Redux" },
      ],
      upvotes: 22,
      views: 280,
      answers: [],
      createdAt: new Date("2023-01-10"),
    },
    {
      _id: "q11",
      title: "What are the security best practices for a RESTful API?",
      author: {
        _id: "a11",
        name: "Hannah White",
        picture: "url-to-hannahs-picture",
      },
      tags: [
        { _id: "t21", name: "API" },
        { _id: "t22", name: "Security" },
      ],
      upvotes: 14,
      views: 190,
      answers: [],
      createdAt: new Date("2023-01-11"),
    },
    {
      _id: "q12",
      title: "Getting started with Python web scraping?",
      author: {
        _id: "a12",
        name: "Isaac Green",
        picture: "url-to-isaacs-picture",
      },
      tags: [
        { _id: "t23", name: "Python" },
        { _id: "t24", name: "Web Scraping" },
      ],
      upvotes: 19,
      views: 210,
      answers: [],
      createdAt: new Date("2023-01-12"),
    },
    {
      _id: "q13",
      title: "How to design a responsive UI with CSS Grid?",
      author: {
        __id: "a13",
        name: "Julia Brown",
        picture: "url-to-julias-picture",
      },
      tags: [
        { _id: "t25", name: "CSS" },
        { _id: "t26", name: "Responsive Design" },
      ],
      upvotes: 16,
      views: 230,
      answers: [],
      createdAt: new Date("2023-01-13"),
    },
    {
      _id: "q14",
      title: "Optimizing database queries in MongoDB?",
      author: {
        __id: "a14",
        name: "Kevin Anderson",
        picture: "url-to-kevins-picture",
      },
      tags: [
        { _id: "t27", name: "MongoDB" },
        { _id: "t28", name: "Database" },
      ],
      upvotes: 24,
      views: 270,
      answers: [],
      createdAt: new Date("2023-01-14"),
    },
    {
      _id: "q15",
      title: "What are the advantages of using Next.js for React apps?",
      author: {
        _id: "a15",
        name: "Liam Wilson",
        picture: "url-to-liams-picture",
      },
      tags: [
        { _id: "t29", name: "Next.js" },
        { _id: "t30", name: "React" },
      ],
      upvotes: 26,
      views: 310,
      answers: [],
      createdAt: new Date("2023-01-15"),
    },
    {
      _id: "q11",
      title: "What are the security best practices for a RESTful API?",
      author: {
        _id: "a11",
        name: "Hannah White",
        picture: "url-to-hannahs-picture",
      },
      tags: [
        { _id: "t21", name: "API" },
        { _id: "t22", name: "Security" },
      ],
      upvotes: 14,
      views: 190,
      answers: [],
      createdAt: new Date("2023-01-11"),
    },
    {
      _id: "q12",
      title: "Getting started with Python web scraping?",
      author: {
        _id: "a12",
        name: "Isaac Green",
        picture: "url-to-isaacs-picture",
      },
      tags: [
        { _id: "t23", name: "Python" },
        { _id: "t24", name: "Web Scraping" },
      ],
      upvotes: 19,
      views: 210,
      answers: [],
      createdAt: new Date("2023-01-12"),
    },
    {
      _id: "q13",
      title: "How to design a responsive UI with CSS Grid?",
      author: {
        __id: "a13",
        name: "Julia Brown",
        picture: "url-to-julias-picture",
      },
      tags: [
        { _id: "t25", name: "CSS" },
        { _id: "t26", name: "Responsive Design" },
      ],
      upvotes: 16,
      views: 230,
      answers: [],
      createdAt: new Date("2023-01-13"),
    },
    {
      _id: "q14",
      title: "Optimizing database queries in MongoDB?",
      author: {
        __id: "a14",
        name: "Kevin Anderson",
        picture: "url-to-kevins-picture",
      },
      tags: [
        { _id: "t27", name: "MongoDB" },
        { _id: "t28", name: "Database" },
      ],
      upvotes: 24,
      views: 270,
      answers: [],
      createdAt: new Date("2023-01-14"),
    },
    {
      _id: "q15",
      title: "What are the advantages of using Next.js for React apps?",
      author: {
        _id: "a15",
        name: "Liam Wilson",
        picture: "url-to-liams-picture",
      },
      tags: [
        { _id: "t29", name: "Next.js" },
        { _id: "t30", name: "React" },
      ],
      upvotes: 26,
      views: 310,
      answers: [],
      createdAt: new Date("2023-01-15"),
    },
  ];

  return (
    <main>
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center ">
        <h1 className="h1-bold text-dark100_light900">All questions</h1>
        <Link href="ask-question" className="flex justify-end max-sm:w-full">
          <Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900">
            Ask a question
          </Button>
        </Link>
      </div>
      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearchBar
          route="/"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeHolder="Search questions..."
          otherClasses="flex-1"
        />

        <Filter
          filters={HomePageFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
          containerClasses="hidden max-md:flex"
        />
      </div>
      <HomeFilters />
      <div className="mt-10 flex w-full flex-col gap-6">
        {questions.length > 0 ? (
          questions.map((question) => (
            <QuestionCard
              key={question._id}
              _id={question._id}
              title={question.title}
              tags={question.tags}
              upvotes={question.upvotes}
              answers={question.answers}
              views={question.views}
              createdAt={question.createdAt}
              author={question.author}
            />
          ))
        ) : (
          <NoResult
            title="There are no question to show"
            description="Be the first to break the silence! 🚀 Ask a Question and kickstart the discussion. our query could be the next big thing others learn from. Get involved! 💡"
            link="/ask-question"
            linkTitle="Ask a question"
          />
        )}
      </div>
    </main>
  );
}
