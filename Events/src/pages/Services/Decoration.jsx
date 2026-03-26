import { DECORATIONS } from "../../constants/constant";
import DecorationCard from "./DecorationCard";
import { useTranslation } from "react-i18next";
import SectionGrid from "../../components/ui/SectionGrid";

const Decoration = () => {
  const { t } = useTranslation();

  return (
    <SectionGrid id="decorations" title={t("decorations")}>
      {DECORATIONS.map((item) => (
        <DecorationCard
          key={item.id}
          image={item.image}
          title={item.title}
          description={item.description}
        />
      ))}
    </SectionGrid>
  );
};

export default Decoration;
