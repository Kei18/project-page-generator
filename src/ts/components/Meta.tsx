import * as React from "react";
import { Helmet } from "react-helmet";
import images_png from "../../images/*.png";

interface MetaProps {
  title?: string;
  description?: string;
  thumbnail?: string;
  site_url?: string;
  site_name?: string;
  twitter?: string;
}

export const Meta: React.SFC<MetaProps> = ({
  title,
  description,
  thumbnail,
  site_url,
  site_name,
  twitter,
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta charset="utf-8" />
      <meta property="og:type" content="article" />
      {description ? <meta name="description" content={description} /> : ""}
      <meta property="og:title" content={title} />
      {thumbnail && images_png[thumbnail] ? (
        <meta property="og:image" content={images_png[thumbnail]} />
      ) : (
        ""
      )}
      {site_url ? <meta property="og:url" content={site_url} /> : ""}
      {site_name ? <meta property="og:site_name" content={site_name} /> : ""}
      {description ? (
        <meta property="og:description" content={description} />
      ) : (
        ""
      )}
      <meta name="twitter:card" content="summary_large_image" />
      {twitter ? <meta name="twitter:site" content={twitter} /> : ""}
    </Helmet>
  );
};
