import "./page-loader.scss";
import t from "i18n";
import { Fragment, ReactNode } from "react";

export interface PageLoaderProps {
  loading?: boolean;
  error?: string;
  onRefresh?: () => void;
  children: ReactNode;
}

const PageLoader: React.FC<PageLoaderProps> = ({
  loading,
  error,
  onRefresh,
  children,
}) => {
  if (loading) {
    return <p className="page-loader__loading">{t("loading")}</p>;
  }

  if (error) {
    return (
      <div>
        <p className="page-loader__error">{error}</p>
        <button onClick={onRefresh} className="page-loader__refresh">
          {t("tryAgain")}
        </button>
      </div>
    );
  }

  return <Fragment>{children}</Fragment>;
};

export default PageLoader;
