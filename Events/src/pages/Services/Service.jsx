import { useNavigate } from "react-router-dom";
import ServiceCard from "./ServiceCard";
import { SERVICES } from "../../constants/constant";
import SectionTitle from "../../components/ui/SectionTitle";
import { useTranslation } from "react-i18next";

const Service = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="space-y-10">
      <div className="text-center mb-12">
        <SectionTitle highlight={t('services')} />
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((service) => (
          <ServiceCard
            key={service.id}
            icon={service.icon}
            title={service.title}
            description={service.description}
            onClick={() => navigate(`/service/${service.link}`)}
          />
        ))}
      </div>
    </div>
  );
};

export default Service;
