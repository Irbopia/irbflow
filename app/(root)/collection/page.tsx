import LocalSearchBar from "@/components/shared/navbar/search/LocalSearch";
import Filter from "@/components/shared/Filter";
import { QuestionFilters } from "@/constants/filters";
import QuestionCard from "@/components/cards/QuestionCard";
import NoResult from "@/components/shared/NoResult";
import { getSavedQuestions } from "@/lib/actions/question.action";
import { auth } from "@clerk/nextjs";


export default async function Home() {
  const { userId } = auth();
  let searchQuery;

  if(!userId) {
    throw new Error("No user found!");
  }

  const result = await getSavedQuestions({ clerkId: userId, searchQuery });


  return (
    <>
        <h1 className="h1-bold text-dark100_light900">Saved questions</h1>
      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearchBar
          route="/"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeHolder="Search questions..."
          otherClasses="flex-1"
        />

        <Filter
          filters={QuestionFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
        />
      </div>
\      <div className="mt-10 flex w-full flex-col gap-6">
        {result.questions.length > 0 ? (
          result.questions.map((question: any) => (
            <QuestionCard
              key={question._id}
              _id={question._id}
              title={question.title}
              tags={question.tags}
              upvotes={question.upvotes.length}
              answers={question.answers}
              views={question.views}
              createdAt={question.createdAt}
              author={question.author}
            />
          ))
        ) : (
          <NoResult
            title="There are no saved questions to show"
            description="Save the questions that you have gotten the most value from."
            link="/ask-question"
            linkTitle="Ask a question"
          />
        )}
      </div>
    </>
  );
}
