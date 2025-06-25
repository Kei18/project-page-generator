import * as React from "react";

interface NewsItem {
  body: string;
  date?: string;
  url?: string;
}

interface NewsProps {
  news?: NewsItem[];
}

export const News: React.SFC<NewsProps> = ({ news }) => {
  return (
    <div className="mx-auto mt-5">
      <p className="h5">News</p>
      <ul>
        {news?.map((item, i) => (
          <li key={i}>
            {item.body}
            {item.date ? " (" + item.date + ")" : ""}
            {item.url ? (
              <span>
                {" "}
                <a href={item.url}>[link]</a>
              </span>
            ) : (
              ""
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
