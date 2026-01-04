import { useNavigate } from "react-router-dom";
import ServiceCard from "./ServiceCard";
import { SERVICES } from "../../constants/constant";
import SectionTitle from "../../components/ui/SectionTitle";

const Service = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="text-center mb-12">
        <SectionTitle highlight="Services" />
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
