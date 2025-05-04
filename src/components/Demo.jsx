import { useState, useEffect, React } from "react";
import { copy, loader, linkIcon, tick } from "../assets";
import { useLazyGetSummaryQuery } from "../services/article";

const Demo = () => {
  const [article, setArticle] = useState({
    url: "",
    summary: "",
  });

  const [allArticles, setAllArticles] = useState([]);
  const [toastMessage, setToastMessage] = useState(""); // State for the toast message
  const [showToast, setShowToast] = useState(false); // State to control toast visibility
  const [getSummary, { error, isFetching }] = useLazyGetSummaryQuery();
  const [copied, setCopied] = useState("");

  useEffect(() => {
    const articlesFromLs = JSON.parse(localStorage.getItem("articles"));
    if (articlesFromLs) {
      setAllArticles(articlesFromLs);
    }
  }, []);

  // Function to show toast message
  const showErrorToast = (message) => {
    setToastMessage(message);
    setShowToast(true);

    // Hide toast after 7 seconds
    setTimeout(() => {
      setShowToast(false);
    }, 7000);
  };

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const { data } = await getSummary({ articleUrl: article.url });

      if (data?.summary) {
        const newArticle = {
          ...article,
          summary: data.summary,
        };
        const updatedAllArticles = [newArticle, ...allArticles];
        setArticle(newArticle);
        setAllArticles(updatedAllArticles);

        localStorage.setItem("articles", JSON.stringify(updatedAllArticles));
      }
    } catch (err) {
      const status = err?.status;
      const message = err?.data?.error || "Something went wrong.";

      if (status === 503) {
        showErrorToast("Server unavailable. Retrying in 5 seconds...");
        setTimeout(() => handleSubmit(e), 5000);
      } else if (status === 429) {
        showErrorToast("Rate limit exceeded. Please try again later.");
      } else if (status === 404) {
        showErrorToast("Invalid URL or resource not found.");
      } else {
        showErrorToast(message);
      }
      console.error(err);
    }
  }

  async function copyToClipboard(copyUrl) {
    try {
      await setCopied(copyUrl);
      navigator.clipboard.writeText(copyUrl);

      setTimeout(() => {
        setCopied(false);
        setShowToast(false);
      }, 3000); // Clear copied state after 3 seconds
    } catch (err) {
      console.error("Failed to copy:", err);
      setToastMessage("Failed to copy!");
      setShowToast(true);

      setTimeout(() => setShowToast(false), 3000);
    }
  }

  return (
    <section className="mt-16 w-full max-w-4xl">
      {/* Search */}
      <div className="flex-col flex w-full gap-2">
        <form
          action=""
          className="relative flex justify-center items-center "
          onSubmit={handleSubmit}
        >
          <img
            src={linkIcon}
            alt="link_icon"
            className="absolute left-0 my-2 ml-3 w-5"
          />

          <input
            type="url"
            placeholder="Enter Url Here"
            value={article.url}
            onChange={(e) => setArticle({ ...article, url: e.target.value })}
            required="Please fill out this field"
            className="url_input peer"
          />

          <button
            type="submit"
            className="submit_btn peer-focus:border-gray-700 peer-focus:text-gray-800"
          >
            ↲
          </button>
        </form>

        {/* Browse Url History */}
        <div className="flex-col flex gap-2 max-h-60 overflow-y-auto ">
          {allArticles.map((item, index) => (
            <div
              key={`link-${index}`}
              onClick={() => setArticle(item)}
              className="link_card"
            >
              <div className="copy_btn" onClick={() => copyToClipboard(item.url)}>
                <img
                  src={copied === item.url ? tick : copy}
                  alt={copied === item.url ? "tick_icon" : "copy_icon"}
                  className="w-[40%] h-[40%] object-contain object-center"
                  
                />
              </div>
              <p className="flex-2 font-primary-variation-settings text-blue-500 font-medium text-sm truncate">
                {item.url}
              </p>
            </div>
          ))}{" "}
        </div>

        {/* Display Results */}
        <div className="my-10 flex jusify-center max-w-full items-center">
          {isFetching ? ( //for fetching state && displaying loader
            <img
              src={loader}
              alt="loader_icon"
              className="w-10 h-20 object-contain "
            />
          ) : error ? ( // else display error
            <p className="flex-2 font-primary-variation-settings  text-center text-gray-500 font-medium text-sm italic">
              Well, that wasn't supposed to happen.....
              <br />
              <span className="font-primary-variation-settings font-normal text-balck text-sm bold italic">
                {error?.data?.error || "Something went wrong"}
              </span>
            </p>
          ) : (
            article.summary && (
              <div className="flex flex-col gap-3">
                <h2 className="font-primary-variation-settings text-gray-600 font-bold text-xl">
                  Article <span className="blue_gradient">Summary</span>
                </h2>
                <div className="summary_box">
                  <p className="font-primary-variation-settings text-gray-700 font-medium text-sm">
                    {article.summary}
                  </p>
                </div>
              </div>
            )
          )}
        </div>
      </div>

      {/* Toast Notification */}
      {showToast && (
        <div className="fixed bottom-4 right-4 z-50">
          <div className="flex items-center max-w-sm w-full bg-red-600 text-white px-4 py-3 rounded shadow-lg animate-fade-in-out">
            <svg
              className="w-6 h-6 mr-2 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M18.364 5.636l-1.414 1.414M5.636 18.364l1.414-1.414M6 12h12M12 6v12"
              />
            </svg>
            <span className="text-sm">{toastMessage}</span>
            <button
              onClick={() => setShowToast(false)}
              className="ml-auto text-white hover:text-gray-200 focus:outline-none"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Demo;
