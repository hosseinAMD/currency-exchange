import ConvertForm from "components/pages/home/convert-form";
import Result from "components/pages/home/result";
import t from "i18n";

const Home: React.FC = () => {
  return (
    <div>
      <p className="page-title">{t("homeTitle")}</p>
      <ConvertForm />
      <Result
        from="EUR"
        fromValue="500"
        fromUnitRate="0.8678"
        target="USD"
        targetValue="576,168"
        targetUnitRate="1.1523"
      />
    </div>
  );
};

export default Home;
