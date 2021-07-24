import ConvertForm from "components/pages/home/convert-form";
import t from "i18n";

const Home: React.FC = () => {
  return (
    <div>
      <p className="page-title">{t("homeTitle")}</p>
      <ConvertForm />
    </div>
  );
};

export default Home;
