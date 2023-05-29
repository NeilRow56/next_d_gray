import getWikiResults from "@/lib/getWikiResults";
import Item from "./components/Item";

//searchTerm is the text we typed into the search box in the nave bar

export async function generateMetadata({ params: { searchTerm } }: Props) {
  //Get Wikipedia data
  const wikiData: Promise<SearchResult> = getWikiResults(searchTerm);
  const data = await wikiData;
  //spaces are being received from url as %20, we want to replace with an empty string ''
  const displayTerm = searchTerm.replaceAll("%20", " ");

  if (!data?.query?.pages) {
    return {
      title: `${displayTerm} Not Found`,
    };
  }

  return {
    title: displayTerm,
    description: `Search results for ${displayTerm}`,
  };
}

type Props = {
  params: {
    searchTerm: string;
  };
};

export default async function SearchResults({ params: { searchTerm } }: Props) {
  //Get Wikipedia data
  const wikiData: Promise<SearchResult> = getWikiResults(searchTerm);
  const data = await wikiData;

  //Define results - There could be no results , hence the undefined
  const results: Result[] | undefined = data?.query?.pages;

  //Define content
  const content = (
    <main className="bg-slate-200 mx-auto max-w-lg py-1 min-h-screen">
      {results ? (
        Object.values(results).map((result) => {
          return <Item key={result.pageid} result={result} />;
        })
      ) : (
        <h2 className="p-2 text-xl">{`${searchTerm} Not Found`}</h2>
      )}
    </main>
  );

  return content;
}
