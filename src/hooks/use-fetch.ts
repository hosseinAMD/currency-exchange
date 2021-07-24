import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import t from "i18n";

export const useFetch = (
  url: string,
  responseHandler: (response: any) => void,
  preLoading: boolean
): [boolean, string, () => void] => {
  const [loading, setLoading] = useState<boolean>(preLoading);
  const [error, setError] = useState("");

  const throwError = () => {
    setError(t("defaultError"));
  };

  const fetchApi = useCallback(async () => {
    setLoading(true);
    setError("");
    axios
      .get(url)
      .then((res) => {
        if (res.data instanceof Array && res.data.length === 0) {
          setError(t("noDataError"));
        }
        responseHandler(res.data);
      })
      .catch((e) => {
        throwError();
      })
      .finally(() => {
        setLoading(false);
      });
  }, [responseHandler, url]);

  useEffect(() => {
    preLoading && fetchApi();
  }, [fetchApi, preLoading]);

  return [loading, error, fetchApi];
};
